import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ErrorComponent } from './pages/error/error.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RankComponent } from './pages/rank/rank.component';
import { HeaderComponent } from './component/header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FooterComponent } from './component/footer/footer.component';
import { TaskComponent } from './component/task/task.component';
import { RegComponent } from './component/input/reg/reg.component';
import { TimeComponent } from './component/input/time/time.component';
import { RoutineComponent } from './component/input/routine/routine.component';
import { ReminderComponent } from './component/input/reminder/reminder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    ErrorComponent,
    ShopComponent,
    RankComponent,
    HeaderComponent,
    FooterComponent,
    TaskComponent,
    RegComponent,
    TimeComponent,
    RoutineComponent,
    ReminderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
