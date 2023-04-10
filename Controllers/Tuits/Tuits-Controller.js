/*import Post from "./Tuits.js"

let tuits = Post*/

import * as TuitsDAO from "./Tuits-DAO.js"
import {raw} from "express";


const TuitController = ( app ) =>
{
    app.get('/api/tuits', findTuits);
    app.post('/api/tuits',AddNewTuit);
   app.delete('/api/tuits/:tid',DeleteTuit);
   app.put('/api/tuits/:id' , UpdateTuit);
}

const findTuits = async (req,res) =>
{
    const tuits = await TuitsDAO.findTuits();
    res.json(tuits);
}


const AddNewTuit = async (req,res) =>
{
    console.log("Inside controller")
    let NewTuit = req.body;

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
    const InsertedTuit = await TuitsDAO.createTuit(NewTuit);
    res.send(InsertedTuit );
}


const DeleteTuit = async (req,res) =>
{
    let Deletetuit_id = req.params.tid;
    let status = await TuitsDAO.deleteTuit(Deletetuit_id);
    res.send(status);
}

const UpdateTuit = async ( req,res) =>
{
    let Updatetuit_id = req.params.id;
    let Updatetuit = req.body;

    let status = await TuitsDAO.updateTuit(Updatetuit_id,Updatetuit);
    res.send(status);

}



export default TuitController;