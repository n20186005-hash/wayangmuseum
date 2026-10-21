interface Env { ASSETS: { fetch(request: Request): Promise<Response> } }
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.protocol !== 'https:' || url.hostname === 'www.wayangmuseum.com') {
      url.protocol = 'https:'; url.hostname = 'wayangmuseum.com'; url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    const explicitError = /^\/404(?:\.html)?\/?$/.test(url.pathname);
    const assetRequest = explicitError ? new Request(new URL('/404', url), request) : request;
    const response = await env.ASSETS.fetch(assetRequest);
    if (!explicitError && response.status !== 404) return response;
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, follow');
    return new Response(request.method === 'HEAD' ? null : response.body, { status: 404, headers });
  }
};
