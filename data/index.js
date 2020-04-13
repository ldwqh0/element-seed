// 使用mockjs模拟数据，mockjs的相关文档请参考 http://mockjs.com/
import Mock from 'mockjs'
import menus from './menus'
import table from './table'
import qs from 'qs'

function getQuery (url) {
  const s = url.split('?')
  if (s.length > 1) {
    return qs.parse(s[1])
  } else {
    return {}
  }
}

Mock.mock(/^\/table1/, ({ url, type, body }) => {
  const { draw } = getQuery(url)
  const result = table
  if (draw !== undefined) {
    result.draw = draw
  }
  return result
})
Mock.mock('/menus', options => {
  return menus
})
