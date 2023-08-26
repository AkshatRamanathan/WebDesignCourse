export default interface Course {
    
    name: string;
    instructor: string;
    location: {
        building: string;
        room: string;
    };
    schedule: {
        day: string;
        startTime: string;
        endTime: string;
    };

}