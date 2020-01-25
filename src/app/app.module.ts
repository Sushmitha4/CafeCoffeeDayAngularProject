import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SlideItemsComponent } from "./slide-items/slide-items.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { StoryComponent } from "./story/story.component";
import { FooterComponent } from "./footer/footer.component";
import { CafeMenuComponent } from "./cafe-menu/cafe-menu.component";
import { EShopComponent } from "./e-shop/e-shop.component";
import { CafeFinderLocatorComponent } from "./cafe-finder-locator/cafe-finder-locator.component";
import { MobileAppComponent } from "./mobile-app/mobile-app.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { SearchComponent } from "./search/search.component";
import { NotificationComponent } from "./notification/notification.component";
import { LoginSignupComponent } from "./login-signup/login-signup.component";
import { SignInComponent } from "./sign-in/sign-in.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SlideItemsComponent,
    HeaderComponent,
    MainComponent,
    StoryComponent,
    FooterComponent,
    CafeMenuComponent,
    EShopComponent,
    CafeFinderLocatorComponent,
    MobileAppComponent,
    AboutUsComponent,
    SearchComponent,
    NotificationComponent,
    LoginSignupComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
