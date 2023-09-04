import { Component } from '@angular/core';

@Component({
  selector: 'app-classbindind',
  templateUrl: './classbindind.component.html',
  styleUrls: ['./classbindind.component.css'],
})
export class ClassbindindComponent {
  public myText = 'textSize';
  public grpClasses = {
    textSize: true,
    textColor: true
  };

  public isRequired = true;
}
