import { SignUpComponent } from './logSign/sign-up/sign-up.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NewDesignComponent } from './new-design/new-design.component';
import { FisherResidenceComponent } from './fisher-residence/fisher-residence.component';
import { HomeComponent } from './home/home.component';
import { ProductModelOneComponent } from './product-model-one/product-model-one.component';
import { RawaLandingPageComponent } from './rawa-landing-page/rawa-landing-page.component';
import { RawaCopyComponent } from './rawa-copy/rawa-copy.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './logSign/login/login.component';
import { LocalCrudComponent } from './local-crud/local-crud.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';

@Component({
  selector: 'app-root',
  template: `
    Hello world
  `,
  styles: `
    :host {
      color: blue;
    }
  `,
  standalone: true,
  imports: [RouterOutlet,SignUpComponent,LoginComponent,HomeComponent,LocalCrudComponent, LifeCycleComponent,TabContainerComponent,ProductDetailComponent, CheckoutPageComponent, MenubarComponent,NewDesignComponent,FisherResidenceComponent, ProductModelOneComponent,RawaLandingPageComponent, RawaCopyComponent,OrderPageComponent,PaymentPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hero';
}
