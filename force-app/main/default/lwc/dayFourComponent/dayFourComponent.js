import { LightningElement,wire,track  } from 'lwc';
import getContacts from '@salesforce/apex/Day.getContacts';


export default class DayFourComponent extends LightningElement {


  @wire(getContacts)contacts;



}