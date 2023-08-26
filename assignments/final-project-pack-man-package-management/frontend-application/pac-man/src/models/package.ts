export default interface Package{        
    _id: string;    
    from: string;
    toName: string;
    toAddress: string;
    dimension: {
            length : number;
            breadth : number;
            height : number;
    },
    packageType :string;

    
};
type NewPackage = Omit<Package, '_id'>;