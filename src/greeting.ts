export const greetings = (names : string[] | null) => {
    if(names === null){
        return 'Hello, my friend';
    }else if(names.length === 1){
        return 'Hello ' + names + '.';
    }else{
        const allWithoutLast = names.slice(0, -1).join(', ');
        const lastName = names[names.length - 1];
        return `Hello ${allWithoutLast} and ${lastName}`;
    }
};