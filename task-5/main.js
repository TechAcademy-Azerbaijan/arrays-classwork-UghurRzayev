const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = result.input.split(" ")
    a.unshift(a.pop())
    console.log(a.join(" "));
  
});
