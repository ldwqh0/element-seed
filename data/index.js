// 使用mockjs模拟数据，mockjs的相关文档请参考 http://mockjs.com/
import Mock from 'mockjs'
import menus from './menus'

Mock.mock('/menus', menus)
