import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {
  public name: string = 'Angular16 Interpolation';
  x = 10;
  emp = {
    fName: 'Steeve',
    lName: '',
    age: 22,
  };


  employee = [
    
    {
      name: [],
      age: '23',
    },
    {
      name: [],
      age: '23',
    },
    {
      name: [],
      age: '23',
    },
    {
      name: [
        {
          'steve':'steve',
          'robin':'robin'
        },
      ]
    },
  
  ];

  imgURL = '../../../assets/trophy.jpg';
}
