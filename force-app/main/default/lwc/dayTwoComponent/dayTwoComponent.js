import { LightningElement, track } from 'lwc';

export default class DayTwoComponent extends LightningElement {
     //DOM-Document object model, is backbone of LWC
     //variable with type is object
     //Object is pair of key and value
    @track   contact = {
    firstName :'Nurlan',
    lastName : 'Abdullayev',
    phoneNumber: '2482342122',
    email : 'abd@gmail.com',
    age: 31,
    isSalaried: true,
    salary: 3214.99
};



//Array

contactlist =[   contact = {
    firstName :'Nurlan',
    lastName : 'Abdullayev',
    phoneNumber: '2482342122',
    email : 'abd@gmail.com',
    age: 31,
    isSalaried: true,
    salary: 3214.99
} ,
    {firstName :'Nurlan',
    lastName : 'Abdullayev',
    phoneNumber: '2482342122',
    email : 'abd@gmail.com',
    age: 31,
    isSalaried: true,
    salary: 3214.99
}];




connectedCallback(){    // it executes automatically when component loads

 console.log('Contact',this.contact);
 console.log('Contact',JSON.stringify(this.contact))


}




}