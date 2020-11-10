export class BillingAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipcode: string;

    constructor(addressLine1: string,
    		addressLine2: string,
    		city: string,
    		state: string,
    		zipcode: string) {
    	this.addressLine1 = addressLine1;
    	this.addressLine2 = addressLine2;
    	this.city = city;
    	this.state = state;
    	this.zipcode = zipcode;
    }
}