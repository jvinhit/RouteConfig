import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// http
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// primeng
import { MenuModule } from 'primeng/menu';
import {
    ContextMenuModule,
    InputTextModule,
    ButtonModule,
    SelectButtonModule,
    DropdownModule,
    ConfirmDialogModule,
    MessagesModule
} from 'primeng/primeng';
// import Route Compoent
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
//  serivces
import { SearchService } from './services/search.service';
import { EmployeeService } from './services/employee.service';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MenuModule,
        ContextMenuModule,
        InputTextModule,
        ButtonModule,
        SelectButtonModule,
        DropdownModule,
        ConfirmDialogModule,
        MessagesModule
    ],
    providers: [SearchService, EmployeeService],
    declarations: [AppComponent, HeaderComponent, FooterComponent, routingComponents],
    bootstrap: [AppComponent]
})
export class AppModule {}
const ss = () => 5;
