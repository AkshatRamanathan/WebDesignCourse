import mongoose from "mongoose";
import User from "./user.js";
const PackageSchema = new mongoose.Schema({        
        from: {
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        toName: {
            type:String,
            required:true
        },
        toAddress: {
            type:String,
            required:true
        },
        dimension: {
            length : {
                type : Number,
                required: true
            },
            breadth : {
                type : Number,
                required: true
            },
            height : {
                type : Number,
                required: true
            }
        },
        packageType :{
            type : String,
            required : true
        }

    
});
const Package=mongoose.model('Package',PackageSchema);
export default Package;