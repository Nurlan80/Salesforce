import { LightningElement, track } from 'lwc';

export default class DayThreeComponent extends LightningElement {

  @track  fullName ='';
   @track firstName='';
   @track lastName='';

handleFirstName(event){
this.firstName=event.target.value;
this.caculateFullName();
}

handleLastName(event){
this.lastName=event.target.value;
this.caculateFullName();


}

caculateFullName(){
    this.fullName =this.firstName+' '+this.lastName;
}

}