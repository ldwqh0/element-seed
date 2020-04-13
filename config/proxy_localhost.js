module.exports = {
  '/gw/u/': {
    target: 'http://127.0.0.1:8080',
    pathRewrite: { '^/gw/u/': '/' }
  },
  '/gw/p/': {
    target: 'http://127.0.0.1:8080',
    pathRewrite: { '^/gw/p/': '/' }
  },
  '/gw/': {
    target: 'http://127.0.0.1:8080',
    pathRewrite: { '^/gw/': '/' },
    onProxyRes (proxyRes, req, res) {
      if (proxyRes.statusCode === 302) {
        let redirect = proxyRes.headers.location
        if (redirect) {
          redirect = redirect.replace(/http:\/\/127.0.0.1:8080\//g, 'http://localhost/gw/')
        }
        if (redirect.startsWith('/')) {
          redirect = process.env.CONTEXT_PATH + redirect.substring(1) + 'login'
        }
        proxyRes.headers.location = redirect
      }
    }
  }
}
