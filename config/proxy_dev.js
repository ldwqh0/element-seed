module.exports = {
  '/ei/gw/': {
    target: 'http://10.10.1.101:8888/',
    //  target: 'http://127.0.0.1:8080',
    pathRewrite: { '^/ei/gw/': '/' },
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
