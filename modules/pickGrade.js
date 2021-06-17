var grade = Math.round((Math.random()* 20) + 1);


module.exports = {
    grade,
    getTheWord(){
        switch(grade){
            case 8:
                return 'an'
                break;
            case 11:
                return 'an'
                break;
            case 18:
                return 'an'
                break;  
            default:
                return 'a'
                break;
        }
    }
}