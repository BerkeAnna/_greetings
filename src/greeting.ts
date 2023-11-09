export const greetings = (names : string[] | null) => {
    if(names == null){
        return 'Hello, my friend';
    }else if(names.length == 1){
        return 'Hello ' + names + '.';
    }
};