import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list :any;
  searchForm: FormGroup;
constructor(	private _formBuilder: FormBuilder,){
  this.list = [
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Mani",
      specialization:"Cardiologist",
      location :"Salem"
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Padmanaban",
      specialization:"Cardiologist1",
      location :"Navi Mumbai"
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Padmanaban",
      specialization:"Cardiologist",
      location :"Navi Mumbai"
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Padmanaban",
      specialization:"Cardiologist",
      location :"Navi Mumbai"
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Padmanaban",
      specialization:"Cardiologist",
      location :"Navi Mumbai"
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Padmanaban",
      specialization:"Cardiologist",
      location :"Navi Mumbai"
    },
  ];



  this.searchForm = this._formBuilder.group({
    doctor: [''],
    location: [''],
    specialization: [''],
  
  });
}




submit(){
  debugger
 console.log( this.searchForm.value);

 const result = this.list.filter(word => word.doctorName == this.searchForm.value.doctor 
  || word.location == this.searchForm.value.location || word.specialization == this.searchForm.value.specialization )
  this.list = result;
}

cancel(){
  this.list = [
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Mani",
      specialization:"Cardiologist",
      location :"Salem"
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Padmanaban",
      specialization:"Cardiologist1",
      location :"Navi Mumbai"
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Padmanaban",
      specialization:"Cardiologist",
      location :"Navi Mumbai"
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Padmanaban",
      specialization:"Cardiologist",
      location :"Navi Mumbai"
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Padmanaban",
      specialization:"Cardiologist",
      location :"Navi Mumbai"
    },
    {
      img:"https://material.angular.io/assets/img/examples/shiba1.jpg",
      doctorName:"Dr. Padmanaban",
      specialization:"Cardiologist",
      location :"Navi Mumbai"
    },
  ];

}
 
}
