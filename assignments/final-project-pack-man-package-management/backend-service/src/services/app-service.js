//import geolib from 'geolib';

import Package from "../models/package.js";
import Shipment from "../models/shipment.js";
import User from "../models/user.js";

export const save = async (newUser) => {
    const user = new User(newUser);
    console.log('inservice');
    console.log(user);
    return user.save();
}
export const savePackage = async (newPackage) => {
    //const  package =await User.findOne({newPackage.form}).exec();
    // const user =new User(newPackage.form);
    const userName=newPackage.from;
    console.log(userName);
    const userobj =await User.findOne({userName}).exec();
    console.log(userobj);
    const packagee =new Package({
        from :userobj._id,
        toName:newPackage.toName,
        toAddress:newPackage.toAddress,
        dimension:{
            length:newPackage.dimension.length,
            breadth:newPackage.dimension.breadth,
            height:newPackage.dimension.height,
        },
        packageType:newPackage.packageType,
    });
    console.log(packagee);
    return packagee.save();
}
function generateRandomFiveDigitNumber() {
    const min = 10000; // Minimum 5-digit number (10000)
    const max = 99999; // Maximum 5-digit number (99999)
  
    // Generate a random number between min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return randomNumber;
}
function generateRandomDistance() {
    const min = 100; 
    const max = 999; 
    // Generate a random number between min and max (inclusive)
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}
export const saveShipment = async (newpackage, _serviceType ) => {
    console.log(newpackage);
    const savedPackage=await savePackage(newpackage);
    console.log(savedPackage._id);
    // const packagee =await Package.findOne({newpackage}).exec();
    // //const packagee = new Package(newpackage);
    // console.log(packagee._id);
    console.log(newpackage.from.address+''+newpackage.toAddress);
    //savePackage(packagee);
    // const coordinates1 = await getCoordinatesForAddress(newpackage.from.address);
    // const coordinates2 =  geolib.getCoordinateKeys(newpackage.toAddress);
    // console.log(coordinates1+''+coordinates2);
    // // Calculate the distance using the Haversine formula
    // const distanceInMeters = geolib.getDistance(coordinates1, coordinates2);
    // console.log(distanceInMeters);
    // Convert the distance to kilometers
    //const distanceInKm = distanceInMeters / 1000;
    const distanceInKm=100;
    let  _cost=distanceInKm*1.5;
    let  _duration=0;
    console.log(distanceInKm/10);
    if(_serviceType=='EXPRESS')
    {
        _duration=distanceInKm/20;
    }
    else{
        _duration=distanceInKm/10;
    }
    
    const _trackingId=_cost.toString()+_duration.toString()+generateRandomFiveDigitNumber().toString();
    const shipment =new Shipment({
        packageData: savedPackage._id,
        cost: _cost,
        duration:_duration,
        trackingId:_trackingId,
        status:'CREATED',
        serviceType:_serviceType,


    });
    
    
   
    return shipment.save();
}
export const shipmentQuotation = async (newpackage, _serviceType ) => {
    //const packagee = new Package(newpackage);
    console.log(newpackage.from.address+''+newpackage.toAddress);
    // const coordinates1 = await geolib.getCoordinates(newpackage.from.address);
    // const coordinates2 = await geolib.getCoordinates(newpackage.toAddress);

    // // Calculate the distance using the Haversine formula
    // const distanceInMeters = geolib.getDistance(coordinates1, coordinates2);

    // Convert the distance to kilometers
    // const distanceInKm = distanceInMeters / 1000;
    const distanceInKm = generateRandomDistance();
    let _cost=distanceInKm*1.5;
    let _duration=0.0;
    if(_serviceType=='EXPRESS')
    {
        _duration=distanceInKm/20;
    }
    else{
        _duration=distanceInKm/10;
    }
    
    const _trackingId=_cost.toString()+_duration.toString()+generateRandomFiveDigitNumber().toString();
    const shipment =new Shipment({
        packageData: newpackage,
        cost: _cost,
        duration:_duration,
        trackingId:_trackingId,
        status:'CREATED',
        serviceType:_serviceType,


    });
    
    
   
    return shipment;
}
export const loginUser = async (userName,password)=> {
    const user =await User.findOne({userName}).exec();
    if(user)
    {
        //const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!(password === user.password)) {
            return 'Invalid email or password.';
        }
        
    }
    else{
        return 'User not found.';
    }
    return user;
}
export const updateUser = async (id, userObj) => {
    console.log(userObj);
    const user =await User
        .findByIdAndUpdate(id, userObj)
        .exec();
    return user;
}
export const updateStatus = async (_trackingId, _status) => {
    const trackingId=_trackingId;
    const shipment =await Shipment.findOne({trackingId}).exec();
    if (shipment) {
        shipment.status=_status;
        shipment.save();
        
    }
    else{
        return 'shipment not found';
        
    }
    return shipment;
}
export const updateShipment = async (id,shipmentObj) => {
    console.log(shipmentObj);
    const shipment =await Shipment
        .findByIdAndUpdate(id, shipmentObj)
        .exec();
    return shipment;
}
export const trackShipment = async (_trackingId) => {
    
    const trackingId=_trackingId;
    const shipment =await Shipment.findOne({trackingId}).exec();
    if (shipment) {
        return shipment;
        
    }
    else{
        return 'shipment not found';
        
        
    }
    
}
export const search = async (userId) => {
    // console.log(userId);
    const packages = Package.find({
        'from': ObjectId(userId)
    }).exec();
    return packages;
}
export const searchShipments = async (params) => {
    // console.log(userId);
    const packages = Shipment.find(params).exec();
    
    return packages;
}
export const remove = async (id) => {

    const shipment = Shipment
        .findByIdAndDelete(id)
        .exec();
    return shipment;
}