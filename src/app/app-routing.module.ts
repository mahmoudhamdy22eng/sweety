import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompanyInfoComponent } from './about/company-info/company-info.component';
import { ContactInfoComponent } from './about/contact-info/contact-info.component';
import { TeamComponent } from './about/team/team.component';
import { AccountComponent } from './account/account.component';
import { OrderHistoryComponent } from './account/order-history/order-history.component';
import { PersonalInfoComponent } from './account/personal-info/personal-info.component';
import { SidebarComponent } from './account/sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
// import { AHeaderComponent } from './admin/header/aheader.component';
// import { AFooterComponent } from './admin/footer/afooter.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ArticleListComponent } from './blog/article-list/article-list.component';
import { ArticleComponent } from './blog/article/article.component';
import { BlogComponent } from './blog/blog.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DeliveryOptionsComponent } from './checkout/delivery-options/delivery-options.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';
import { PaymentMethodComponent } from './checkout/payment-method/payment-method.component';
import { ProgressIndicatorComponent } from './checkout/progress-indicator/progress-indicator.component';
import { ShippingFormComponent } from './checkout/shipping-form/shipping-form.component';
import { ContactUsComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { QuestionListComponent } from './faq/question-list/question-list.component';
import { BannerComponent } from './home/banner/banner.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ThankYouMessageComponent } from './order-confirmation/thank-you-message/thank-you-message.component';
import { MessageComponent } from './page-not-found/message/message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDescriptionComponent } from './product-detail/product-description/product-description.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductImagesComponent } from './product-detail/product-images/product-images.component';
import { ProductTabsComponent } from './product-detail/product-tabs/product-tabs.component';
import { RelatedProductsComponent } from './product-detail/related-products/related-products.component';
import { PromotionListComponent } from './promotions/promotion-list/promotion-list.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ReviewFormComponent } from './reviews/review-form/review-form.component';
import { ReviewListComponent } from './reviews/review-list/review-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ResultsListComponent } from './search-results/results-list/results-list.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TermsContentComponent } from './terms/terms-content/terms-content.component';
import { TermsComponent } from './terms/terms.component';
import { ItemListComponent } from './wishlist/item-list/item-list.component';
import { WishlistComponent } from './account/wishlist/wishlist.component';
import { AccountDashboardComponent } from './account/account-dashboard/account-dashboard.component';
import { AddressBookComponent } from './account/address-book/address-book.component';
import { AddressFormComponent } from './account/address-form/address-form.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { BlogsComponent } from './admin/blogs/blogs.component';
import { FeaturesComponent } from './admin/features/features.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: BannerComponent },
      { path: 'categories', component: CategoriesComponent },
    ],
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [{ path: '', component: ProductListComponent }],
  },

  { path: 'product/:id', component: ProductDetailComponent },

  {
    path: 'product-detail',
    component: ProductDetailComponent,
    children: [
      { path: 'images', component: ProductImagesComponent },
      { path: 'description', component: ProductDescriptionComponent },
      { path: 'tabs', component: ProductTabsComponent },
      { path: 'related-products', component: RelatedProductsComponent },
    ],
  },
  {
    path: 'cart',
    component: CartComponent,
    children: [
      { path: 'summary', component: CartSummaryComponent },
      { path: 'items', component: CartItemsComponent },
    ],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    children: [
      { path: 'progress', component: ProgressIndicatorComponent },
      { path: 'shipping', component: ShippingFormComponent },
      { path: 'delivery', component: DeliveryOptionsComponent },
      { path: 'payment', component: PaymentMethodComponent },
      { path: 'summary', component: OrderSummaryComponent },
    ],
  },
  {
    path: 'order-confirmation',
    component: OrderConfirmationComponent,
    children: [{ path: 'thank-you', component: ThankYouMessageComponent }],
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'sidebar', component: SidebarComponent },
      { path: 'order-history', component: OrderHistoryComponent },
      { path: 'personal-info', component: PersonalInfoComponent },
      { path: 'address-book', component: AddressBookComponent},
      { path: 'wishlist', component: WishlistComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/forgot-password', component: ForgotPasswordComponent },
  { path: 'account/dashboard', component: AccountDashboardComponent },
  { path: 'account/order-history', component: OrderHistoryComponent },
  { path: 'account/personal-info', component: PersonalInfoComponent },
  { path: 'account/address-book', component: AddressBookComponent },
  { path: 'account/address-book/new', component: AddressFormComponent },
  { path: 'account/address-book/edit/:id', component: AddressFormComponent },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'company-info', component: CompanyInfoComponent },
      { path: 'team', component: TeamComponent },
      { path: 'contact-info', component: ContactInfoComponent },
    ],
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
    children: [{ path: 'questions', component: QuestionListComponent }],
  },
  {
    path: 'terms',
    component: TermsComponent,
    children: [{ path: 'content', component: TermsContentComponent }],
  },
  {
    path: 'search-results',
    component: SearchResultsComponent,
    children: [{ path: 'list', component: ResultsListComponent }],
  },
  {
    path: 'promotions',
    component: PromotionsComponent,
    children: [{ path: 'list', component: PromotionListComponent }],
  },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      { path: 'articles', component: ArticleListComponent },
      { path: 'article', component: ArticleComponent },
      { path: 'sidebar', component: SidebarComponent },
    ],
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
    children: [
      { path: 'list', component: ReviewListComponent },
      { path: 'form', component: ReviewFormComponent },
    ],
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    children: [{ path: 'items', component: ItemListComponent }],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'login', component: AdminComponent },
      { path: 'dashboard', component: DashboardComponent },
      // { path: 'aheader', component: AHeaderComponent },
      // { path: 'afooter', component: AFooterComponent },
      { path: 'manage-products', component: ManageProductsComponent },
      {path: 'analytics', component: AnalyticsComponent},
      {path: 'blogs', component: BlogsComponent},
      {path:'features', component: FeaturesComponent},
      { path: 'manage-orders', component: ManageOrdersComponent },
      { path: 'manage-users', component: ManageUsersComponent },
    ],
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
    children: [{ path: 'message', component: MessageComponent }],
  },

  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
