
import UsersModel from "./Users-Model.js";

export const FindUsers = ( ) => UsersModel.find();

export const FindUserById = (userid) => UsersModel.findById(userid);

export const FindUserbyUserName = (username) => UsersModel.findOne({username:username});

export const FindUserByCreditential = (username, password) => UsersModel.findOne({username:username, password:password});

export const UpdateUser = ( userid, user) => UsersModel.updateOne({_id:userid}, user);

export const DeleteUser = (userid ) => UsersModel.deleteOne({_id:userid});

