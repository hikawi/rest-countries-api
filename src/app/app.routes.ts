import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: ":id",
    component: DetailsComponent,
  }
];
