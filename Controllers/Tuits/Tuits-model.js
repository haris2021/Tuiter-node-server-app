import mongoose from "mongoose";
import TuitsSchema from "./Tuits-Schema.js";

const TuitsModel = mongoose.model('Tuitmodel', TuitsSchema);


export default TuitsModel;



