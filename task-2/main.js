const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = result.input.split(" ")
    let b = 0
    for (let i = 0; i< a.length; i++) {
        if (a[i]>b) {
            b=a[i]
        }   
    } console.log(b);
  
});
