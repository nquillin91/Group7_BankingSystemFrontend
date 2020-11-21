import {Component,	OnInit} from '@angular/core';
import {FormGroup,	FormControl} from '@angular/forms';
import {TransferFunds} from '../../models/TransferFunds';
import {TransferFundsService} from '../../_services/transferFunds.service';
import {Router} from '@angular/router';
import {isThisTypeNode} from 'typescript';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {Validators} from '@angular/forms';


@Component({
	selector: 'app-transfer-funds',
	templateUrl: './transfer-funds.component.html',
	styleUrls: ['./transfer-funds.component.css']
})

export class TransferFundsComponent implements OnInit {

	AccountTypes: any = ['Checking', 'Savings'];
	transferFunds: TransferFunds;
	accType: String;
	Status: any = ['PENDING', 'COMPLETE', 'REJECTED'];


	transferFundsForms = new FormGroup({

		senderName: new FormControl('', [
			Validators.pattern(" ^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$")
		]),
		accountType: new FormControl(),
		senderAccountNumber: new FormControl(),
		accountBalance: new FormControl(),
		receiverName: new FormControl('', [
			Validators.pattern(" ^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$")
		]),
		receiverAccountNumber: new FormControl('', [
			Validators.pattern("^[0-9]*$")
		]),
		transferAmount: new FormControl('', [
			Validators.pattern("^[0-9]*$")
		]),
		date: new FormControl(new Date()),
		remarks: new FormControl(),
		accounts: new FormGroup({
			id: new FormControl(),
			accountType: new FormControl(),
			balance: new FormControl(),
			status: new FormControl(),
			createdDate: new FormControl(),
			lastUpdatedDate: new FormControl(),


		})

	});
	constructor(private transferFundsService: TransferFundsService, private router: Router /*,public dialog: MatDialog*/ ) {
		this.transferFunds = new TransferFunds();


	}
	get receiverAccountNumber() {
		return this.transferFundsForms.get('receiverAccountNumber')
	}
	get transferAmount() {
		return this.transferFundsForms.get('transferAmount')
	}
	get senderName() {
		return this.transferFundsForms.get('senderName')
	}
	get receiverName() {
		return this.transferFundsForms.get('receiverName')
	}

	ngOnInit(): void {
		this.transferFundsForms.controls['accountBalance'].disable();
		this.transferFundsForms.controls['senderAccountNumber'].disable();

	}


	getAccountDetails(accountType) {

		this.accType = accountType;

		this.transferFundsService.getAccountDetails().subscribe(
			res => {
				for (let i = 0; i < res.length; i++) {
					if ((res[i].accountType) == this.accType) {


						this.setValues(res, i);
					}
				}

			},
			error => {
				alert(error.error.message)

			}
		);
  }
  
	onSubmit() {
		this.transferFunds = this.transferFundsForms.getRawValue();


		this.transferFundsService.getTransactionDetails(this.transferFunds).subscribe(
			res => {

				alert("transaction done successfully");
				this.router.navigateByUrl('/accounts');
			},
			error => {
				if ((error["error"].text) == "TransactionSuccessfull") {

					alert(error["error"].text);
					this.router.navigateByUrl('/account');
				} else
					alert(error["error"].message);

			}
		);
	}
	setValues(res, i) {
		this.transferFundsForms.controls['accountBalance'].setValue(res[i].balance);
		this.transferFundsForms.controls['senderAccountNumber'].setValue(res[i].id);
	}

}