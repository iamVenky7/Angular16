import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
  public names = ['Venky', 'John', 'Kyle', 'Akshai '];

  public emp = [
    {
    id : 1,
    name:'Satish',
    age:43
  },
    {
    id : 2,
    name:'kyle',
    age:23
  },
    {
    id : 3,
    name:'mark',
    age:33
  },
    {
    id : 4,
    name:'john',
    age:63
  },
    {
    id : 5,
    name:'askshai',
    age:83
  },
]
}
