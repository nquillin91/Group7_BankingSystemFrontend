import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  dataSource: MatTableDataSource<Account> = new MatTableDataSource<Account>()

  get AccountDataSource(): MatTableDataSource<Account> {
    return this.dataSource;
  }

  displayedColumns: string[] = ['accountnumber', 'accounttype', 'balance'];

}
