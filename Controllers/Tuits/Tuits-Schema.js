
import mongoose from "mongoose";

const schema = mongoose.Schema({

    tuit:String,
    likes: Number,
    liked: Boolean
}, {collection: 'Tuits'});


export default schema;
