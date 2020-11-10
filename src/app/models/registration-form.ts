export class RegistrationForm {
    username: string;
    emailAddress: string;
    firstName: string;
    middleName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
    providedIncome: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipcode: string;
   

    constructor(username: string = 'testUser',
        emailAddress: string = 'testUser@test.com',
        firstName: string = 'Test',
        middleName: string = '',
        lastName: string = 'User',
        birthDate: string = '01/22/1992',
        phoneNumber: string = '123-456-7890',
        providedIncome: number = 78000.00,
        addressLine1: string = '123 Test Avenue',
        addressLine2: string = 'Apt 1',
        city: string = 'Chicago',
        state: string = 'IL',
        zipcode: string = '60602') {
        
        // this.username = username;
        // this.emailAddress = emailAddress;
        // this.firstName = firstName;
        // this.middleName = middleName;
        // this.lastName = lastName;
        // this.birthDate = birthDate;
        // this.phoneNumber = phoneNumber;
        // this.providedIncome = providedIncome;
        // this.addressLine1 = addressLine1;
        // this.addressLine2 = addressLine2;
        // this.city = city;
        // this.state = state;
        // this.zipCode = zipCode;
    }
}