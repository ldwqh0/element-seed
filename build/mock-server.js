const path = require('path')
const fs = require('fs')
module.exports = (app) => {
  app.get('/menus', (req, rsp) => {
    let file = path.resolve(__dirname, '..', 'data', 'menus.json')
    fs.readFile(file, 'utf8', (err, content) => {
      rsp.write(content)
      rsp.end()
    })
  })
}
