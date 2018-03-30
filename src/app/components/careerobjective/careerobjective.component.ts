import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-careerobjective',
  templateUrl: './careerobjective.component.html',
  styleUrls: ['./careerobjective.component.css']
})
export class CareerobjectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  Check(){
    //console.log(myForm.value);
  }

  Submit( myForm:NgForm ){
    console.log(myForm.name);
  }
}
