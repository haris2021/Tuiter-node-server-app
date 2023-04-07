import TuitsModel from "./Tuits-model.js";


export const findTuits = () => TuitsModel.find();
export const createTuit = (tuit) => TuitsModel.create(tuit);
export const deleteTuit = (tid) => TuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => TuitsModel.updateOne({_id: tid}, {$set: tuit})