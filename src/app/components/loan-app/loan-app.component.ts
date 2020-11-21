import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
// import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { Router } from '@angular/router';


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

  constructor(private route: Router) { }

  ngOnInit(): void {

    // const loanAppsRef = this.af.collection<any>(`loans`, ref => ref.where('userId', '==',
    //                           JSON.parse(sessionStorage.getItem('cur-user'))));
  }

  onSubmit(){
    const formValue = this.loanAppForm.value;
    alert("Application submitted Successfully!");
    this.route.navigate(['user-profile']);
  }

}