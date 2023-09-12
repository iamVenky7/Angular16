import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css'],
})
export class TwowayComponent {
  public myName: string = '';
  public myFee: number = 0;
  public myCourse: string = '';
  public myText:string;

  onClick(v) {
    console.log('Name:' + v);
    this.myName = v;
  }
  onClick1(v) {
    console.log('Name:' + v);
    this.myCourse = v;
  }
  onClick2(v) {
    console.log('Name:' + v);
    this.myFee = v;
  }
}
