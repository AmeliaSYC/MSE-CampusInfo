import { Routes } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { LocationComponent } from './location/location.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'schedule', component: ScheduleComponent },
    { path: 'location', component: LocationComponent },
    { path: '', redirectTo: '/schedule', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
];
