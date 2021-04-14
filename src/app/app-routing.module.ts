import { NgModule } from '@angular/core';
import { NgModuleFactory } from '@angular/core/src/r3_symbols';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';

const routes: Routes = [
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'teste', component: NgIfNgForComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
