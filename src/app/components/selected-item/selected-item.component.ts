import { parseHostBindings } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css'],
})
export class SelectedItemComponent {
  public courseId;
  constructor(private _activatedRoute: ActivatedRoute, private _router:Router) {
    // this.courseId= this._activatedRoute.snapshot.paramMap.get('id')
    this._activatedRoute.paramMap.subscribe((p: ParamMap) => {
      this.courseId = parseInt(p.get('id'));
    });
  }

  goPrevious() {
    let currentId = this.courseId -1;
    this._router.navigate(['/selectedItem', currentId])
  }
  goNext(){
    let currentId = this.courseId + 1;
    this._router.navigate(['/selectedItem', currentId]);

    
  };
  //we can pass name

  //snapshot only work for one time for one variable,  updated value wont work - so paramMap solution
}
