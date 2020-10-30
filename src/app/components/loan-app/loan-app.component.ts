import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-app.component.html',
  styleUrls: ['./loan-app.component.css']
})
export class LoanAppComponent implements OnInit {

  loanAppForm = new FormGroup({
    employerName : new FormControl(),
    employerAddr: new FormControl(),
    employerPhone: new FormControl(),
    debtAmount : new FormControl(),
    creditScore : new FormControl(),
    loanUse: new FormControl(),
    eSignature : new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const formValue = this.loanAppForm.value;
  }

}