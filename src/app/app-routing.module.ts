import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'Sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
