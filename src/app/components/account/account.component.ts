import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../_services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../models/user';
import { TransferFundsService } from '../../_services/transferFunds.service';
import { HttpClient } from '@angular/common/http';
import { Accounts } from '../../models/Accounts';
import { ViewChild, ElementRef } from '@angular/core';
//import * as XLSX from 'xlsx';
import { analytics } from 'firebase';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  // userService: UserService = new UserService();
  // dataSource = new UserDataSource(this.userService);
  //@ViewChild('TABLE') table: ElementRef;
  displayedColumns: string[] = ['id', 'accountType', 'balance'];
  accountDetails = [];
  //dataSource = accountDetails;

  accType: String;


  //constructor(private userService: UserService) { }
  constructor(private transferFundsService: TransferFundsService) {
    // ngOnInit() {
    // }

  }

  ngOnInit(): void {


    //this.accType = accountType;

    this.transferFundsService.getAccountDetails().subscribe(
      res => {
        for (let i = 0; i < res.length; i++) {
          // this.accountDetails=res;
          // this.dataSource = this.accountDetails;
          ///    const result = res.map(item => Object.keys(item)[0]);

          //  this.accountDetails  = [
          //   {id: res.map(item => Object.keys(item)[0]), accountType: res.map(item => Object.keys(item)[2]) , balance: res.map(item => Object.keys(item)[3])},
          // ];
        }
        this.accountDetails = res;
        //  res[0].accountType
      },
      error => {
        alert(error.error.message)

      }
    );
  }

}
export interface accountDetails {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const accountDetails = [
 // { id: res.map(item => Object.keys(item)[0]), accountType: res.map(item => Object.keys(item)[2]), balance: res.map(item => Object.keys(item)[3]) },
];


// export class UserDataSource extends DataSource<any> {
//   constructor(private userService: UserService) {
//     super();
//   }
//   connect(): Observable<User[]> {
//     //return this.userService.getUser();
//   }
//   disconnect() { }
// }