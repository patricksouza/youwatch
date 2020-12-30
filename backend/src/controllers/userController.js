const connection = require('../database/connection');


module.exports = {
    async index(request, response){
        const users = await connection('users').insert({
            name,
            email
        })

        return response.json(users);



    }

    
}


