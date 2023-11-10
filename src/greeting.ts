export const greetings = (names: string[] | null) => {
    if(names === null){

        return 'Hello, my friend';

    } else if(names.length === 1){

        if(names[0] === names[0].toUpperCase()){
            return 'HELLO ' + names[0] + '!';
        }

        return 'Hello ' + names[0] + '.';

    } else {

        const separatedNames = names.flatMap(name => name.split(', ').filter(Boolean));
        let itHasSeparatedNames = false


        names.forEach(n => {

            if (n.includes(', ')) {
                itHasSeparatedNames = true;
            }

        });

        let upper: string[] = [];
        let lower: string[] = [];

        for(let i = 0 ; i< separatedNames.length; i++){

            if(separatedNames[i] == separatedNames[i].toUpperCase()){
                upper.push(separatedNames[i]);
            } else {
                lower.push(separatedNames[i]);
            }

        }
        let ret = "";

        if(lower.length > 0){

            const allWithoutLastLower = lower.slice(0, -1).join(', ');
            const lastLowerName = lower[lower.length - 1];
            ret = `Hello ${allWithoutLastLower} and ${lastLowerName}`;

            if(upper.length > 0 || itHasSeparatedNames){

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
