import people from './users.js'

let users = people

const UserController = (app) => {
    console.log("user controller")
    app.get('/api/users', findUsers)
    app.get('/api/users/:id', findUsersbyID)
    app.post('/api/users', CreateUsers)
    app.delete('/api/users/:id', DeleteUserbyID)
    app.put('/api/users/:id', UpdateUserByID)
}


/*const findUsers = (req, res) => {
    res.json(users)
}*/

const findUsers = (req, res) => {
    console.log("find users")

    /*const type = req.query.type
    console.log(req.query);
    if(type) {
        const usersOfType = users.filter(u => u.type === type)
        res.json(usersOfType)
        return
    }
    res.json(users)*/
    res.json(users)
}

const findUsersbyID = (req,res ) =>
{
    let id = req.params.id;
    let usersofType = users.find(u=>u._id ===id)
    res.send(usersofType)
}

const CreateUsers = ( req, res) =>
{
    const NewUser = req.body;
    NewUser._id =(new Date()).getTime() + '';
    users.push(NewUser);
    res.json(NewUser)
}

const DeleteUserbyID = ( req, res) =>
{
    const id = req.params.id;
    users = users.filter(usr => usr._id !== id);
    res.send(200);
}

const UpdateUserByID = (req, res) =>
{
   let uid = req.params.id;
   let updateuser = req.body;
   users = users.map( (usr) => usr._id ===uid ? {...usr,...updateuser} : usr )
    res.send(200)
}


export default UserController