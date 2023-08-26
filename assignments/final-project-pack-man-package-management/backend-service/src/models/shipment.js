import mongoose from "mongoose";
import Package from "./package.js";
const ShipmentSchema = new mongoose.Schema({

        packageData: {
            type: mongoose.Schema.Types.ObjectId,
            required:true
        },
        cost: {
            type:Number,
            required:true
        },
        duration: {
            type:Number,
            required:true
        },
        trackingId: {
           type : String,
           required : true 
        },
        status :{
            type : String,
            required : true
        },
        serviceType :{
            type : String,
            required : true
        }

    
});
const Shipment=mongoose.model('Shipment',ShipmentSchema);
export default Shipment;