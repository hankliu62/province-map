const fs = require('fs') // 文件模块
const path = require('path')
const router = require('koa-router')()

router.prefix('/map')

router.post('/gen-file', function (ctx, next) {
  console.log(ctx.request.body);
  const data = ctx.request.body.data;
  const filename = data.filename;

  const content = JSON.stringify(data, '', 2);

  // 指定创建目录及文件名称，__dirname为执行当前js文件的目录
  const file = path.join(__dirname, '../__temp', filename + '.json');

  //写入文件
  fs.writeFile(file, content, function(err) {
    if (err) {
        return console.log(err);
    }

    ctx.body = {
      Success: 'Ok'
    };
  });
})

module.exports = router
