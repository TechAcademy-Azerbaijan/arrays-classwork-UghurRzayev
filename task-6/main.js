const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let numbers = result.input.split(" ")
    let max = parseInt(numbers[0])
    let min = parseInt(numbers[0])
    if (numbers.length>=0&&numbers.length<=1) {
        console.log("Ooops!");
    } if (numbers.length>1) {
        for (let i = 0; i < numbers.length; i++) {
            const element = numbers[i];
            if (element>=max) {
                max=element
            }
        } for (let j = 0; j < numbers.length; j++) {
            const next_element = numbers[j];
            if (next_element<=min) {
                min=next_element
            }
            
        } console.log(`${min}\n${max}`);    
    }
    
    
  
});
