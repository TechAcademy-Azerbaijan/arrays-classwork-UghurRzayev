const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let numbers = result.input.split(" ")
    let max = parseInt(numbers[0])
    let min = parseInt(numbers[0])
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element>=max) {
            max = element
        }
    } for (let j = 0; j < numbers.length; j++) {
        const next_element = numbers[j];
        if (next_element<=min) {
            min=next_element
        }
    }   console.log(parseInt(max-min));
});
