export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const path = url.pathname === "/" ? "/index.html" : url.pathname

    try {
      // 从 Assets 里读取文件
      const res = await env.ASSETS.get(path)
      if (!res) return new Response("Not Found", { status: 404 })
      return new Response(res.body, {
        headers: { "Content-Type": res.metadata?.contentType || "text/plain" },
      })
    } catch (err) {
      return new Response("Error", { status: 500 })
    }
  },
}
