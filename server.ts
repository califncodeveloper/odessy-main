import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// API Endpoint for Groq AI Chatbot Concierge
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const groqApiKey = process.env.GROQ_API_KEY;

    const systemPrompt = `You are the concise assistant for Odessy Furniture (Chennai, Tamil Nadu).

RULES:
- Answer in ONLY 2 to 3 short, punchy sentences or 2-3 bullet points max.
- NO tables, NO essays, NO long steps.
- Always include the price in ₹ INR and mention Free Home Delivery in Chennai.
- Include the direct WhatsApp link: [+91 991 991 5358](https://wa.me/919919915358).

Products:
- Butterfly Mesh Chair (₹7,150): Top lumbar support & headrest.
- Marvel Mesh Chair (₹6,500): High-back spine contour.
- Jazz Headrest Chair (₹5,850): Cervical neck support.
- X-Mesh Chair (₹4,940): Polished chrome base.
- Retmax Mesh Chair (₹4,550): Dual-tone grey/black fabric seat.
- Box Mesh Chair (₹4,160): Compact chrome swivel chair.
- Sovereign Leather Recliner (₹7,540): Boss recliner with 130° lock.
- Wooden Recliner (₹5,460): 100% solid natural hardwood lounge.
- Zero-Gravity Recliner (₹3,770): Padded cushion relaxation chair.
- Hydraulic Bar Stool (₹3,120): Chrome pedestal swivel.
- Cantilever Visitor Chair (₹2,015): S-frame conference chair.
- Eiffel Accent Chair (₹1,885): Molded shell with beech wood legs.
- C-Shape Laptop Table (₹1,138): Slides under sofas/beds.`;

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
              { role: 'system', content: systemPrompt },
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
            return res.json({ reply: reply.trim() });
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

- **Butterfly Mesh Chair**: ₹7,150 *(Top recommendation for posture & lumbar support)*
- **Marvel Mesh High-Back**: ₹6,500 *(Spine curve & neck cradle)*
- **Sovereign Leather Recliner**: ₹7,540 *(Plush Boss recliner)*

🚚 **Home Delivery available across Chennai.**
Ready to order? Connect with us on **WhatsApp: [+91 991 991 5358](https://wa.me/919919915358)**.`;

    if (lastUserMsg.includes('price') || lastUserMsg.includes('cost') || lastUserMsg.includes('rate')) {
      fallbackReply = `Here are our most popular models in Chennai:

- **Butterfly Mesh**: ₹7,150 *(Dual-wing lumbar & headrest)*
- **Marvel Mesh**: ₹6,500 *(High-back ergonomic)*
- **Jazz Headrest**: ₹5,850 *(Cervical neck support)*
- **X-Mesh Chrome**: ₹4,940 *(Chrome star base)*
- **Sovereign Leather**: ₹7,540 *(Executive boss recliner)*
- **C-Shape Laptop Table**: ₹1,138 *(Under-sofa utility)*

🚚 Free doorstep delivery across Chennai. Order directly on **WhatsApp: [+91 991 991 5358](https://wa.me/919919915358)**.`;
    }

    res.json({ reply: fallbackReply.trim() });
  } catch (error: any) {
    console.error('Chat endpoint error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

async function startServer() {
  const publicPath = path.join(process.cwd(), 'public');
  app.use(express.static(publicPath));
  app.use('/products', express.static(path.join(publicPath, 'products')));

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 1000,
          ignored: [
            '**/*.zip',
            '**/*.jpeg',
            '**/*.jpg',
            '**/*.png',
            '**/public/**',
            '**/node_modules/**',
            '**/dist/**',
            '**/.git/**',
          ],
        },
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Graceful process error handlers to prevent watcher lock crashes
  process.on('uncaughtException', (err: any) => {
    if (err?.code === 'EBUSY' || err?.syscall === 'watch') {
      console.warn('Recovered from transient file watcher lock:', err.message);
      return;
    }
    console.error('Uncaught Exception:', err);
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Odessy Furniture Server running on http://localhost:${PORT}`);
  });
}

startServer();
