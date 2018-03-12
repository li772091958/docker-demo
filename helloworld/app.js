const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(3000);


    $.ajax({
      type: "POST",
      url: config.endpoint + "/api/member/register.json",
      contentType: "application/json",
      dataType: "json",
      timeout: 12000,
      data: JSON.stringify({
      }),
      success: function(data) {
      	console.log(data);
      },
      error: function(err) {
      	console.log(err);
      }
    });
  });
