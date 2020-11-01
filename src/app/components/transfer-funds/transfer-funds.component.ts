import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormGroup, FormControl} from '@angular/forms';
import {TransferFunds} from '../../models/TransferFunds';
@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.css']
})
export class TransferFundsComponent implements OnInit {

  AccountTypes: any = ['Savings', 'Checking'];
  transferFunds: TransferFunds;

  // constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  transferFundsForms = new FormGroup({

    senderName : new FormControl(),
    accountType : new FormControl(),
    senderAccountNumber : new FormControl(),
    accountBalance : new FormControl(),
    receiverName : new FormControl(),
    receiverAccountNumber : new FormControl(),
    transferAmount :  new FormControl(),
    date : new FormControl(),
    remarks : new FormControl(),

   });

  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.transferFunds=this.transferFundsForms.value

  }

  onLogout(){
    
  }
}

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog {}