const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let array = result.input.split(" ")
    let a = 0;
    
    for (let i = 0; i < array.length; i++) {
        a = a + parseFloat(array[i])
    } console.log(a);
  
});
