export const greetings = (names : string[] | null) => {
    if(names === null){
        return 'Hello, my friend';
    }else if(names.length === 1){
        if(names[0] === names[0].toUpperCase()){
            return 'HELLO ' + names[0] + '!' ;
        }
        return 'Hello ' + names[0] + '.';
    }else{
        const allWithoutLast = names.slice(0, -1).join(', ');
        const lastName = names[names.length - 1];
        return `Hello ${allWithoutLast} and ${lastName}`;
    }
};