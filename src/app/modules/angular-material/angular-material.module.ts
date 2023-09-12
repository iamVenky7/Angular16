import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';


const materialComponents =[
  MatButtonModule
]
@NgModule({
  exports: [materialComponents],
  imports: [materialComponents],
})
export class AngularMaterialModule {}
