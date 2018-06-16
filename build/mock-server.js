module.exports = (app) => {
  app.get('/menus', (req, rsp) => {
    rsp.json([{
      id: 1,
      path: '/form'
    }, {
      id: 2,
      path: '/table'
    }])
    rsp.end()
  })
}
