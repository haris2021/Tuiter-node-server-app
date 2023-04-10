
import mongoose from "mongoose";

const schema = mongoose.Schema({

    /*tuit:String,
    likes: Number,
    liked: Boolean,*/
                                   tuit: String,
                                   likes: Number,
                                   liked: Boolean,
                                   topic: String,
                                   dislikes: Number,
                                   username: String,
    handle:String,
                                   time: String,
                                   image: String,
    replies:Number,
    retuits:Number,
    title:String

}, {collection: 'Tuits'});


export default schema;
