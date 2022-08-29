const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = result.input.split(' ')
    let b = result.input
    for (let i = 0; i < a.length; i++) {
        if (a[i]>0) {
            a[i]=parseInt(a[i])+parseInt(2)   
        }
        else if (a[i]<0) {
            a[i]=parseInt(a[i])
        }
        } console.log(a);
  
});
