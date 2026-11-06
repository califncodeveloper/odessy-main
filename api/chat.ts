// Vercel Serverless Function: api/chat.ts
export const config = {
  runtime: 'nodejs',
};

interface VercelRequest {
  method: string;
  body: any;
}

interface VercelResponse {
  setHeader: (key: string, value: string) => VercelResponse;
  send: (body: any) => VercelResponse;
  json: (jsonBody: any) => VercelResponse;
  status: (statusCode: number) => VercelResponse;
}

const SYSTEM_PROMPT = `You are the concise assistant for Odessy Furniture (Chennai, Tamil Nadu).

RULES:
- Answer in ONLY 2 to 3 short, punchy sentences or 2-3 bullet points max.
- NO tables, NO essays, NO long steps.
- Always include the price in ₹ INR and mention Free Home Delivery in Chennai.
- Include the direct WhatsApp link: [+91 991 991 5358](https://wa.me/919919915358).

Products:
- Butterfly Mesh Chair (₹5,500): Top lumbar support & headrest.
- Marvel Mesh Chair (₹5,000): High-back spine contour.
- Jazz Headrest Chair (₹4,500): Cervical neck support.
- X-Mesh Chair (₹3,800): Polished chrome base.
- Retmax Mesh Chair (₹3,500): Dual-tone grey/black fabric seat.
- Box Mesh Chair (₹3,200): Compact chrome swivel chair.
- Sovereign Leather Recliner (₹5,800): Boss recliner with 130° lock.
- Wooden Recliner (₹4,200): 100% solid natural hardwood lounge.
- Zero-Gravity Recliner (₹2,900): Padded cushion relaxation chair.
- Hydraulic Bar Stool (₹2,400): Chrome pedestal swivel.
- Cantilever Visitor Chair (₹1,550): S-frame conference chair.
- Eiffel Accent Chair (₹1,450): Molded shell with beech wood legs.
- C-Shape Laptop Table (₹875): Slides under sofas/beds.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body || {};
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const groqApiKey = process.env.GROQ_API_KEY;

    if (groqApiKey && groqApiKey.trim() !== '') {
      try {
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${groqApiKey.trim()}`,
          },
          body: JSON.stringify({
            model: 'openai/gpt-oss-120b',
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              ...messages.map((m: { role: string; content: string }) => ({
                role: m.role === 'assistant' ? 'assistant' : 'user',
                content: String(m.content),
              })),
            ],
            temperature: 0.5,
            max_tokens: 300,
          }),
        });

        if (groqResponse.ok) {
          const data = await groqResponse.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return res.status(200).json({ reply: reply.trim() });
          }
        } else {
          const errText = await groqResponse.text();
          console.warn('Groq API error response:', errText);
        }
      } catch (apiErr: any) {
        console.warn('Groq API fetch exception:', apiErr.message);
      }
    }

    // Concise Local Fallback
    const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user')?.content?.toLowerCase() || '';

    let fallbackReply = `Welcome to **Odessy Furniture (Chennai)**! 

- **Butterfly Mesh Chair**: ₹5,500 *(Top recommendation for posture & lumbar support)*
- **Marvel Mesh High-Back**: ₹5,000 *(Spine curve & neck cradle)*
- **Sovereign Leather Recliner**: ₹5,800 *(Plush Boss recliner)*

🚚 **Home Delivery available across Chennai.**
Ready to order? Connect with us on **WhatsApp: [+91 991 991 5358](https://wa.me/919919915358)**.`;

    if (lastUserMsg.includes('price') || lastUserMsg.includes('cost') || lastUserMsg.includes('rate')) {
      fallbackReply = `Here are our most popular models in Chennai:

- **Butterfly Mesh**: ₹5,500 *(Dual-wing lumbar & headrest)*
- **Marvel Mesh**: ₹5,000 *(High-back ergonomic)*
- **Jazz Headrest**: ₹4,500 *(Cervical neck support)*
- **X-Mesh Chrome**: ₹3,800 *(Chrome star base)*
- **Sovereign Leather**: ₹5,800 *(Executive boss recliner)*
- **C-Shape Laptop Table**: ₹875 *(Under-sofa utility)*

🚚 Free doorstep delivery across Chennai. Order directly on **WhatsApp: [+91 991 991 5358](https://wa.me/919919915358)**.`;
    }

    return res.status(200).json({ reply: fallbackReply.trim() });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Internal error' });
  }
}
