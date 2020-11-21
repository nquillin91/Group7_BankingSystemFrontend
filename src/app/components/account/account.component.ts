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
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  //  dataSource = new UserDataSource(this.userService);
=======
  //userService: UserService = new UserService();
  dataSource = this.transferFundsService;
>>>>>>> Stashed changes
=======
  dataSource = this.transferFundsService;
>>>>>>> Stashed changes
  displayedColumns: string[] = ['accountnumber', 'accounttype', 'balance'];
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
          if ((res[i].accountType) == this.accType) {


            //	this.setValues(res, i);
          }
        }

      },
      error => {
        alert(error.error.message)

      }
    );
  }

}
<<<<<<< Updated upstream
<<<<<<< Updated upstream


=======
//export class UserDataSource extends DataSource<any> {
  //constructor(private userService: UserService) {
  //  super();
  //}
  //connect(): Observable<User[]> {
    //return this.userService.getUser();
  //}
  //disconnect() { }
//}
>>>>>>> Stashed changes
=======


>>>>>>> Stashed changes

