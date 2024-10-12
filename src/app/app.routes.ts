import { Routes } from '@angular/router';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { NewDesignComponent } from './new-design/new-design.component';
import { FisherResidenceComponent } from './fisher-residence/fisher-residence.component';
import { ProductModelOneComponent } from './product-model-one/product-model-one.component';
import { RawaLandingPageComponent } from './rawa-landing-page/rawa-landing-page.component';
import { RawaCopyComponent } from './rawa-copy/rawa-copy.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



export const routes: Routes = [
    {'path': '', component:HomeComponent},
    {'path': 'checkout-page', component:CheckoutPageComponent},
    {'path': 'menubar', component:MenubarComponent},
    {'path': 'new-design', component:NewDesignComponent},
    {'path': 'fisher-residence', component:FisherResidenceComponent},
    {'path': 'product-model-one', component:ProductModelOneComponent},
    {'path': 'rawa-landing-page', component:RawaLandingPageComponent},
    {'path': 'rawa-copy', component:RawaCopyComponent},
    {'path': 'order-page', component:OrderPageComponent},
    {'path': 'payment-page', component:PaymentPageComponent},
    {path: 'product-detail', component:ProductDetailComponent}
];
