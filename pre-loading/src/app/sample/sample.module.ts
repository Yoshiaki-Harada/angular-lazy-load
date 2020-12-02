import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [SampleComponent, Child1Component, Child2Component],
  imports: [
    CommonModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
