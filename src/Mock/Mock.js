// 使用 Mock
var Mock = require('mockjs')

// var Random = Mock.Random

// var data = Mock.mock('http://www.qmtexh.com/getList', {
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1,
//         // 'name': Random.cname(),
//         // 'name': '@cname',
//         'name': '@ctitle',
//         'status |1-2': true,
//     }]
// })
// 输出结果


Mock.mock('http://www.qmtexh.com.login', {
    'name': '@cname',
    'img': '@image(100x100,@color)'
})
// export default data
