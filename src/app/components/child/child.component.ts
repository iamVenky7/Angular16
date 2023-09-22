import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() public fromParent;

  @Output() public fromChild = new EventEmitter();

  sendChildToParent(){
    this.fromChild.emit("This data coming  from child ")
  };
}
