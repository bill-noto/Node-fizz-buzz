var res = '';

function buzz(){
    for(var i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            res += 'fizzbuzz <br>';
        }
        else if(i % 3 == 0){
            res += 'fizz <br>';
        }
        else if(i % 5 == 0){
            res += 'buzz <br>';
        } else {
            res += [i] + '<br>'
        }
    }
}
buzz();
module.exports = res;