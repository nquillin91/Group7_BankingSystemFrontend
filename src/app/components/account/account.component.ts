import { Component, OnInit } from '@angular/core';
export interface BankAccount {
  accountnumber: number;
  accounttype: string;
  balance: number;
}

const ACCOUNT_DATA: BankAccount[] = [
  { accountnumber: 1, accounttype: 'Checking', balance: 500 },
  { accountnumber: 2, accounttype: 'Savings', balance: 500 },
];
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  displayedColumns: string[] = ['accountnumber', 'accounttype', 'balance'];
  dataSource = ACCOUNT_DATA;

}
