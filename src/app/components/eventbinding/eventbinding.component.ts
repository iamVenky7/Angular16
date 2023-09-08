import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css'],
})
export class EventbindingComponent {
  onClick() {
    console.log('Button was clicked');
  }
  onDblClick() {
    console.log('Button was double clicked');
  }
  onOver() {
    console.log('Mouse Over');
  }
  onMove() {
    console.log('Mouse Mouse');
  }
  onOut() {
    console.log('Mouse Out');
  }

  keyDown() {
    console.log('Key was Down');
  }
  keyUp() {
    console.log('Key was Up');
  }
  keyPress() {
    console.log('Key was Pressed');
  }
  onFocus() {
    console.log('input was focused');
  }
  focusOut() {
    console.log('Input was focused out');
  }
  onInput(){
console.log('you entered a charecter');

  };
}
