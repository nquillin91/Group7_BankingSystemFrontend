export class Password {
    existingPassword: string;
    newPassword: string;

    constructor(existingPassword: string, newPassword: string) {
    	this.existingPassword = existingPassword;
    	this.newPassword = newPassword;
    }
}