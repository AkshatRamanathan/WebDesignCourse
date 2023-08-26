import express from 'express';

import * as appController from './../controllers/app-controller.js' 
import app from '../app.js';

// Create an instance of the express Router
const router = express.Router();

// Define routes and their corresponding controller functions
router.route('/login')
    .post(appController.login) // Handle user login
router.route('/user')
    .post(appController.register) // Handle user registration
    .put(appController.updateUser) // Handle user information update
router.route('/shipment')
    .post(appController.create) // Handle shipment creation
    .get(appController.quotation) // Handle shipment quotation calculation
    
router.route('/shipment/:id')
    .put(appController.update) // Handle shipment information update
    .get(appController.track) // Handle shipment tracking by ID
    .delete(appController.remove) // Handle shipment removal by ID
router.route('/packages')
    .get(appController.allPackages) // Get all packages associated with a user
router.route('/shipments')
    .get(appController.allShipments) // Get all shipments
// router.route('/delete')
//     .get(appController.remove)
// router.route('/shipmentStatus/:id')
//     .put(appController.statusUpdate)
// router.route('/trackShipment')
//     .get(appController.trackShipment)
export default router;