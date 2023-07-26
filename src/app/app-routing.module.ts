import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IndexComponent } from './components/index/index.component';
import { AboutUsComponent } from './components1/about-us/about-us.component';
import { ContactUsComponent } from './components1/contact-us/contact-us.component';
import { FaqsComponent } from './components1/faqs/faqs.component';
import { HeaderComponent } from './components1/header/header.component';
import { FooterComponent } from './components1/footer/footer.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { OtpComponent } from './components/otp/otp.component';



const routes: Routes = [
  {path: "register", component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'reset-password', component:ResetPasswordComponent},
  {path:'terms-conditions', component:TermsConditionsComponent},
  {path:'page-not-found', component:PageNotFoundComponent},
  {path:'index', component:IndexComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'faqs', component:FaqsComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'how-it-works', component:HowItWorksComponent},
  {path:'otp', component:OtpComponent},


  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
