import { getUser } from './http-service.ts';
import { searchShipments } from './http-service.ts';
import { saveShipment } from './http-service.ts';
import { updateShipment } from './http-service.ts';
import { deleteShipment } from './http-service.ts';
import User from "../models/user";
import Shipment from '../models/shipment.js';
const psckURI ='/Pac-Man';
export const getUserr=async (userModel: any)=>{
   
    const user =await getUser <User>(psckURI+'/'+'login',userModel);
    return user;
}
export const getShipments=async (userModel: any)=>{
   
    const shipments =await searchShipments <Shipment>(psckURI+'/'+'shipments',userModel);
    return shipments;
}
export const ADDShipment=async ( userModel: any)=>{
    
    const shipment =await saveShipment <Shipment>(psckURI+'/'+'shipment',userModel);
    console.log(shipment);
    return shipment;
}
export const PUTShipment=async (id: String,userModel: any)=>{
   
    const shipment =await updateShipment <Shipment>(psckURI+'/'+'shipment'+'/'+id,userModel);
    return shipment
}
export const DELShipment=async (id: String)=>{
   
    const shipment =await deleteShipment <Shipment>(psckURI+'/'+'shipment'+'/'+id);
    return shipment
}