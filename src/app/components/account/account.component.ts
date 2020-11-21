import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../_services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../models/user';
import {TransferFundsService} from '../../_services/transferFunds.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
 // dataSource = new UserDataSource(this.userService);
  displayedColumns: string[] = ['accountnumber', 'accounttype', 'balance'];
  accType: String;
  //constructor(private userService: UserService) { }
  constructor(private transferFundsService: TransferFundsService ) {
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
// export class UserDataSource extends DataSource<any> {
//   constructor(private userService: UserService) {
//     super();
//   }
  // connect(): Observable<User[]> {
  //   return this.userService.getUser();
  // }
 //disconnect() { }
//}

