import { Routes } from '@angular/router';

import { TechdemoComponent } from './techdemo/techdemo.component';
import { BookdemoComponent } from './bookdemo/bookdemo.component';

export const routes: Routes = [
    {path : 'technologies', component : TechdemoComponent},
    {path : 'books', component : BookdemoComponent},
];
