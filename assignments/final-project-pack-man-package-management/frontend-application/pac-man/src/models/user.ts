
export default interface User{
        _id : string;
        userName: string;
        email: string;
        address: string;
        password: string;
        userType: string;
    
};
type NewUser = Omit<User, '_id'>;