export const greetings = (names: string[] | null) => {
    if(names === null){
        return 'Hello, my friend';
    } else if(names.length === 1){
        if(names[0] === names[0].toUpperCase()){
            return 'HELLO ' + names[0] + '!';
        }
        return 'Hello ' + names[0] + '.';
    } else {
        let upper: string[] = [];
        let lower: string[] = [];

        for(let i = 0 ; i< names.length; i++){
            if(names[i] == names[i].toUpperCase()){
                upper.push(names[i]);
            } else {
                lower.push(names[i]);
            }
        }
        let ret = "";
        if(lower.length > 0){
            const allWithoutLastLower = lower.slice(0, -1).join(', ');
            const lastLowerName = lower[lower.length - 1];
            ret = `Hello ${allWithoutLastLower} and ${lastLowerName}`;
            if(upper.length > 0){
                ret += '.';
            }
        }
        if(upper.length > 0){
            if(lower.length > 0){
                ret += ' HELLO ';
            } else {
                ret += 'HELLO ';
            }
            const allWithoutLastUpper = upper.slice(0, -1).join(', ');
            const lastUpperName = upper[upper.length - 1];
            ret += `${allWithoutLastUpper} AND ${lastUpperName}!`;
        }
        return ret;
    }
};
