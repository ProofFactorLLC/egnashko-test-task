import {Route, RouterModule} from '@angular/router';
import {ListComponent} from './list.component';

const routes: Route[] = [
  {
    path: '',
    component: ListComponent,
  }
];

export const ListRoutingModule = RouterModule.forChild(routes);
