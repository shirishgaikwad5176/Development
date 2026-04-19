import { LightningElement } from 'lwc';
import  dataList from '@salesforce/apex/UserData.getAllData';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class LoginUI extends LightningElement {
       username;
       password;
    
     handleUSubmit=()=>{
     /*  alert("in javascript"); */
      let allValues = this.template.querySelectorAll("lightning-input");    
      

      allValues.forEach((val)=>{
        if(val.name == 'user') this.username=val.value;

        else if(val.name == 'pass') this.password=val.value;

      })
       
       alert('username'+this.username);
      alert(this.password); 
     
         dataList({username : this.username , password:this.password})
         .then(result=>{
          console.log("Checking for Apex method "+JSON.stringify(result));
         if(JSON.stringify(result) == 'true'){
          const toastEvent = new ShowToastEvent({
            title: 'User Found',
            message: 'User is present in the database',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
        }else{
          console.log("in else block");
          const toastEvent = new ShowToastEvent({
            title: 'User Not Found',
            message: 'User is not present in the database',
            variant: 'error'
        });
        this.dispatchEvent(toastEvent);
        }



        }).catch(err=>{console.log("this error is "+ JSON.stringify(err));
      })

        

       

    }

   
}