export class AddUser {
    constructor(
        public id: number,
        public fname: string,
        public lname: string,        
        public bdate: Date,        
        public phoneNum: string,
        public selectedCountry: number,
        public selectedState: number,
        public selectedCity: number,
        public email: string,
        public pincode: number
    ) { }    
}