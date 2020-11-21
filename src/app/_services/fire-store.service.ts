import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { LoanDoc } from '@/models/loan';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  private loanDoc: AngularFirestoreDocument<LoanDoc>;

  constructor(private af: AngularFirestore) { 
    this.af.collection<LoanDoc>('loans');
  }
}
