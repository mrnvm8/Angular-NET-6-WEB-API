import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryInterfaceComponent } from './library-interface/library-interface.component';


const routes: Routes = [
  {path: '', redirectTo: 'library', pathMatch: 'full'},
  {path: 'library', component: LibraryInterfaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
