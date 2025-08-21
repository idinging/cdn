export default {
  async fetch(request, env, ctx) {
    return new Response("静态页面部署成功，Worker 入口就这么简单！", {
      headers: { "Content-Type": "text/plain" }
    })
  }
}

