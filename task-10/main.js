const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let numbers = result.input.split(" ")
    let max = parseInt(numbers[0])
    let index = 0
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element>=max) {
            max = element
            index=i
        }
    } let a  = numbers.indexOf(numbers[index]);
        numbers.splice(a, 1);
        let numbers2 = numbers
        let max2 = parseInt(numbers[0])
        for (let j = 0; j < numbers.length; j++) {
            const next_element = numbers[j];
            if (next_element>=max2) {
                max2 = next_element
            }
        } console.log(parseInt(max)+parseInt(max2));
});
