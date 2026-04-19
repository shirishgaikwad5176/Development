import { LightningElement } from 'lwc';
import save from '@salesforce/apex/NewRecord.save';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class SignUp extends LightningElement {
    name;
    password;
 
  handleDSubmit=()=>{

   /* let allValues = this.template.querySelectorAll("lightning-input");    
       allValues.forEach((val)=>{
        if(val.name == 'user') this.name=val.value;

        else if(val.name == 'pass') this.password=val.value;

      },this)

      save({name:this.name,pass:this.password})
      .then(res=>{
        if(JSON.stringify(res) == 'true'){
            const toastEvent = new ShowToastEvent({
              title: 'New User Added',
              message: 'New data is saved in database',
              variant: 'success'
          });
          this.dispatchEvent(toastEvent);
          }
      }).catch(err=>{console.log("this error is "+ JSON.stringify(err));
      const toastEvent = new ShowToastEvent({
        title: 'Can not add User',
        message: 'there is issue while adding new data',
        variant: 'error'
    });
    this.dispatchEvent(toastEvent);

  }) */

   

}
}