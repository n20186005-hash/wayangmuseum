import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE || undefined;

const storageProxy = {
  name: 'manus-storage-proxy',
  configureServer(server) {
    server.middlewares.use('/manus-storage', async (req, res) => {
      const key = req.url?.replace(/^\//, '');
      const baseUrl = (process.env.BUILT_IN_FORGE_API_URL || '').replace(/\/+$/, '');
      const apiKey = process.env.BUILT_IN_FORGE_API_KEY;

      if (!key || !baseUrl || !apiKey) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Storage proxy is unavailable');
        return;
      }

      try {
        const presignUrl = new URL('v1/storage/presign/get', `${baseUrl}/`);
        presignUrl.searchParams.set('path', key);
        const response = await fetch(presignUrl, { headers: { Authorization: `Bearer ${apiKey}` } });
        const { url } = response.ok ? await response.json() : {};
        if (!url) throw new Error('Missing storage URL');
        res.writeHead(307, { Location: url, 'Cache-Control': 'no-store' });
        res.end();
      } catch {
        res.writeHead(502, { 'Content-Type': 'text/plain' });
        res.end('Storage asset unavailable');
      }
    });
  }
};

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  server: {
    allowedHosts: true
  },
  vite: {
    plugins: [tailwindcss(), storageProxy]
  }
});
