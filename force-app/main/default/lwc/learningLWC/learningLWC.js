import { LightningElement } from 'lwc';

export default class LearningLWC extends LightningElement {
    myValue="Shirish";

    handleChange(event){
        this.myValue=event.target.value;
    }
}