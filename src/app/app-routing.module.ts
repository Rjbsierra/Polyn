import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ErrorComponent } from './pages/error/error.component';
import { RankComponent } from './pages/rank/rank.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
 
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  }, 
  {
    path: "rank",
    component: RankComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
