import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  {
    path: ":id",
    component: DetailsComponent,
  },
  {
    path: "",
    component: IndexComponent,
  },
];
