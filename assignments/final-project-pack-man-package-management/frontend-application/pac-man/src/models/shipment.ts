
export default interface Shipment{
    _id: string;
    packageData: string;
    cost: number;
    duration: number;
    trackingID: string;
    status : string;
    serviceType :string;


};
type NewShipment = Omit<Shipment, '_id'>;