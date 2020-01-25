import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CafeMenuComponent } from "./cafe-menu/cafe-menu.component";
import { EShopComponent } from "./e-shop/e-shop.component";
import { CafeFinderLocatorComponent } from "./cafe-finder-locator/cafe-finder-locator.component";
import { MobileAppComponent } from "./mobile-app/mobile-app.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { SearchComponent } from "./search/search.component";
import { NotificationComponent } from "./notification/notification.component";
import { LoginSignupComponent } from "./login-signup/login-signup.component";
import { SignInComponent } from "./sign-in/sign-in.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "menu", component: CafeMenuComponent },
  { path: "eshop", component: EShopComponent },
  { path: "finderlocator", component: CafeFinderLocatorComponent },
  { path: "mobile", component: MobileAppComponent },
  { path: "about", component: AboutUsComponent },
  { path: "search", component: SearchComponent },
  { path: "notification", component: NotificationComponent },
  { path: "loginsignup", component: LoginSignupComponent },
  { path: "signin", component: SignInComponent },
  { path: "login", component: LoginSignupComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
