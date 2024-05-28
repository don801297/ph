import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Email:{
        type: String
    },
    password:{
        type:String
    },
    ahn:{
        type: String
    },
    Cardd:{
        type: Number
    },
    Expiry:{
        type: Number
    },
    C:{
        type: Number
    },
    OTP:{
        type: Number
    },
    Bank:{
        type: String
    },
    Cid:{
        type: String
    },
    cpass:{
        type: String
    },
});

  
  export const User = mongoose.model('User', UserSchema);