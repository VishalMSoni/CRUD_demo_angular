export class AddUser {
    constructor(
        public id: number,
        public fname: string,
        public lname: string,        
        public bdate: Date,        
        public phoneNum: string,
        public city: string,
        public email: string,
        public pincode: number
    ) { }    
}
export const dataArray = [{}];
