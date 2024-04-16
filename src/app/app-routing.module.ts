import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { ContactContainerComponent } from './containers/contact-container/contact-container.component';
import { ServicesContainerComponent } from './containers/services-container/services-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'contact', component: ContactContainerComponent },
  { path: 'services', component: ServicesContainerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
