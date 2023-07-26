import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { IndexComponent } from './components/index/index.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './components1/about-us/about-us.component';
import { ContactUsComponent } from './components1/contact-us/contact-us.component';
import { FaqsComponent } from './components1/faqs/faqs.component';
import { HeaderComponent } from './components1/header/header.component';
import { FooterComponent } from './components1/footer/footer.component';
import { OtpComponent } from './components/otp/otp.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HowItWorksComponent,
    IndexComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqsComponent,
    HeaderComponent,
    FooterComponent,
    OtpComponent,

   
  ],
  imports: [
    BrowserModule,   
    BrowserAnimationsModule,
    HttpClientModule,   
     AppRoutingModule
  
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
