import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {
  public myColor:string = 'blue';
  public isReq:boolean = true;

  public grpStyles = {
    color:'orange',
    fontStyle:'italic',
    fontSize:'30px'
  }
}
