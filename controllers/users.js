let users = require('../data')

const allusers = ((req, res) => {
    try{
        res.json(users)
    } catch (e) {
        res.status(500).send("Data not able to be served")
    }
    
})

const oneuser = ((req, res) => {
    const id = req.params.id
    try{
        const person = users.find((users) => users.id === Number(id))
        
        if (person === undefined){
            res.status(500).send(`Can not find user with id: ${id}`) 
        }
        res.json(person)
    } catch (e) {
        res.status(500).send(`Data not able to be served`)
    }

})

const create = ((req, res) => {
    try{
        const person = {
        id: users.length + 1,
        ...req.body}
        users.push(person)

        res.json(users)    
    } catch (e) {
        res.status(500).send("Unable to create user")
    }
    
})

const update = ((req, res) => {
    
    try{    
        const id = req.params.id
        const person = users.find((users) => users.id === Number(id))
        const foundindex = users.findIndex((users) => users.id === Number(id))
        const newinfo = {
      
        ...person,
        ...req.body
  
        }
  
        users.splice(foundindex, 1, newinfo)
        res.json(newinfo)
    } catch (e) {
        res.status(500).send("Unable to update user")
    }
})

const remove = ((req, res) => {
    try{
        const id = req.params.id
  
        users = users.filter(people => {
        return people.id !== Number(id)
        })
        for( let i = 0; i < users.length; i++){
    
        if(users[i].id > Number(id)){
            users[i].id = (users[i].id - 1)
        }
        }
        res.json(users)
    } catch (e) {
        res.status(500).send("Unable to delte user")
    }

    })

module.exports = {
    allusers,
    oneuser,
    create,
    update,
    remove
}