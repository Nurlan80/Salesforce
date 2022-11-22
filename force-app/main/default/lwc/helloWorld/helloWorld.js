import { LightningElement ,track} from 'lwc';

export default class HelloWorld extends LightningElement {


    //variables,are help to make data travel from place to another.
    // Stirng :
    //Number 
    //boolean

    @track contact_firstName='Nurlan';
    @track concact_lastName='Abd';  
    @track concact_age=31;
    @track concact_isSalared=true;
    
    //Previousle salesforce made the @track required to displey variable value on the HTML page.
    //Now it becomes optional to use unless and untill variable is collection type means array.


}