import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ConfigdragdropComponent} from './components/configdragdrop/configdragdrop.component';

import { DataService } from './services/data.service';
import { DragulaDNDService } from './services/dragula-dnd.service';
import { DbService } from './services/db.service';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';

import { Ng2DragDropModule } from 'ng2-drag-drop';
import { DragulaModule } from 'ng2-dragula';
import { DbinterfaceComponent } from './components/dbinterface/dbinterface.component';

const appRoutes: Routes = [
  {path: '', component: UserComponent},
  {path: 'configdragdrop', component: ConfigdragdropComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ConfigdragdropComponent,
    DbinterfaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Ng2DragDropModule.forRoot(),
    DragulaModule
  ],
  // need to import service as a provider, because services are providers
  providers: [DataService, DragulaDNDService, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
