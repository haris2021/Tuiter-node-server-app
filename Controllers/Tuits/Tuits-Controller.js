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
    console.log("Inside controller")
    let NewTuit = req.body;

    NewTuit._id =(new Date()).getTime() + '';
    NewTuit.likes = 0;
    NewTuit.liked = false;

    NewTuit.topic = "Traffic";
    NewTuit.username = "The Boring Company";
    NewTuit.handle = "@boringcompany";
    NewTuit.time = "2h";
    NewTuit.image = "../../Images/Tesla.png";
    NewTuit.title = "The Boring Company fixing traffic";
    NewTuit.replies = 0;
    NewTuit.dislikes = 0;
    NewTuit.retuits = 0;

    console.log(NewTuit);

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