function addTokens(input, tokens){
   
    if (input.length <= 5)
    {
        throw 'Input should have at least 6 characters';
    }

    if (typeof(input) !== 'string')
    {
        throw 'Invalid input';
    }

   
    tokens.forEach(token => {
       
        let word = Object.keys(token);
        
        if (word.length != 1)
        {
            throw 'Invalid array format';
        }
        else if (word[0] != 'tokenName')
        {
            throw 'Invalid array format';
        }
        
        if (typeof(token.tokenName) !== 'string')
        {
            throw 'Invalid array format';
        }
    });
   
   
    tokens.forEach(token => {
        input = input.replace("...", `$\{${token.tokenName}\}`);
    });

    return input;

}

const app = {
    addTokens: addTokens
}

module.exports = app;