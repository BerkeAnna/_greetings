export const greetings = (names : string[] | null) => {
    if(names == null){
        return 'Hello, my friend';
    }else if(names.length == 1){
        return 'Hello ' + names + '.';
    }else{
        var hi = new String('Hello ');
        for(let i=0 ; i<names.length-2; i++){
           hi += names[i] + ', ';
        }
        hi += names[names.length-2] + ' and ' + names[names.length-1];
        return hi;
    }
};