import mongoose from "mongoose";

import UsersSchema from "./Users-Schema.js";

const UsersModel = mongoose.model("UserModel" , UsersSchema);

export default UsersModel;
