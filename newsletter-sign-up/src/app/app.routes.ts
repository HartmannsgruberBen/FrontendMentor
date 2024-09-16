import { Routes } from '@angular/router';
import { SuccessScreenComponent } from './success-screen/success-screen.component';
import {NewsletterScreenComponent} from "./newsletter-screen/newsletter-screen.component";

export const routes: Routes = [
  { path: "", component: NewsletterScreenComponent, pathMatch: "full" },
  { path: "subscribing-success/:email", component: SuccessScreenComponent }
];
