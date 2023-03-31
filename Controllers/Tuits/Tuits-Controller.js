import Post from "./Tuits.js"

let tuits = Post

const TuitController = ( app ) =>
{
    app.get('/api/tuits', GetAllTuits);
    app.post('/api/tuits',AddNewTuit);
    app.delete('/api/tuits/:id',DeleteTuit);
    app.put('/api/tuits/:id' , UpdateTuit);
}

const GetAllTuits = (req,res) =>
{
    res.json(tuits);
}

const AddNewTuit = (req,res) =>
{
    let NewTuit = req.body;
    NewTuit._id =(new Date()).getTime() + '';
    NewTuit.likes = 0;
    NewTuit.liked = false;
    tuits.push(NewTuit);
    res.send(200);
}

const DeleteTuit = (req,res) =>
{
    let Deletetuit_id = req.params.id;
    tuits = tuits.filter( (tuit) => tuit._id!==Deletetuit_id);
    res.send(200);
}

const UpdateTuit =( req,res) =>
{
    let Updatetuit_id = req.params.id;
    let Updatetuit = req.body;

    const tuitIndex = tuits.findIndex(
        (t) => t._id === Updatetuit_id)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...Updatetuit};

    res.send(200);

}



export default TuitController;