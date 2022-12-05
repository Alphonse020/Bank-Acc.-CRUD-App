import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http:HttpClient) {

   }
  postBankAccount(formData: any){
   return this.http.post(environment.apiBaseURI+'/BankAccount',formData);

  }
  putBankAccount(formData: any){
    return this.http.put(environment.apiBaseURI+'/BankAccount/'+formData.bankAccountID,formData);
 
   }
   deleteBankAccount(id: any){
    return this.http.delete(environment.apiBaseURI+'/BankAccount/'+id);
 
   }
  getBankAccountList(){
    return this.http.get(environment.apiBaseURI+'/BankAccount');
  }
}
