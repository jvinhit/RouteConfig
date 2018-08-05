import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchComponent } from './components/search/search.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';
const routeConfigs: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: '**', redirectTo: 'home' }
];
@NgModule({
    imports: [RouterModule.forRoot(routeConfigs, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [SearchComponent, EmployeeListComponent, HomeComponent];
