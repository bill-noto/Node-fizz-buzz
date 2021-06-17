var result = '';

function find(){
    for(var i = 1; i <= 1000; i++){
        if(i % 2 == 0){
            result += [i] + '\n';
        }
    }
}
find();


module.exports = result;