import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductImagesComponent } from './product-detail/product-images/product-images.component';
import { ProductDescriptionComponent } from './product-detail/product-description/product-description.component';
import { ProductTabsComponent } from './product-detail/product-tabs/product-tabs.component';
import { RelatedProductsComponent } from './product-detail/related-products/related-products.component';
import { CartComponent } from './cart/cart.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProgressIndicatorComponent } from './checkout/progress-indicator/progress-indicator.component';
import { ShippingFormComponent } from './checkout/shipping-form/shipping-form.component';
import { DeliveryOptionsComponent } from './checkout/delivery-options/delivery-options.component';
import { PaymentMethodComponent } from './checkout/payment-method/payment-method.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ThankYouMessageComponent } from './order-confirmation/thank-you-message/thank-you-message.component';
import { AccountComponent } from './account/account.component';
import { SidebarComponent } from './account/sidebar/sidebar.component';
import { OrderHistoryComponent } from './account/order-history/order-history.component';
import { PersonalInfoComponent } from './account/personal-info/personal-info.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './about/about.component';
import { CompanyInfoComponent } from './about/company-info/company-info.component';
import { TeamComponent } from './about/team/team.component';
import { ContactInfoComponent } from './about/contact-info/contact-info.component';
import { ContactUsComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { QuestionListComponent } from './faq/question-list/question-list.component';
import { TermsComponent } from './terms/terms.component';
import { TermsContentComponent } from './terms/terms-content/terms-content.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ResultsListComponent } from './search-results/results-list/results-list.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionListComponent } from './promotions/promotion-list/promotion-list.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleListComponent } from './blog/article-list/article-list.component';
import { ArticleComponent } from './blog/article/article.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewListComponent } from './reviews/review-list/review-list.component';
import { ReviewFormComponent } from './reviews/review-form/review-form.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ItemListComponent } from './wishlist/item-list/item-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageComponent } from './page-not-found/message/message.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';
import { ProductFiltersComponent } from './catalog/product-filters/product-filters.component';
import { ProductSortingComponent } from './catalog/product-sorting/product-sorting.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutService } from './services/checkout.service';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { AccountDashboardComponent } from './account/account-dashboard/account-dashboard.component';
import { AddressBookComponent } from './account/address-book/address-book.component';
import { AddressFormComponent } from './account/address-form/address-form.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { QuantityInputComponent } from './quantity-input/quantity-input.component';
import { TeamsComponent } from './teams/teams.component';
import { BestSellingComponent } from './home/best-selling/best-selling.component';
import { CandyBannerComponent } from './home/candy-banner/candy-banner.component';
import { CandyInfoComponent } from './home/candy-info/candy-info.component';
import { MarqueeComponent } from './home/marquee/marquee.component';
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { BlogsComponent } from './admin/blogs/blogs.component';
import { FeaturesComponent } from './admin/features/features.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { BuffetsComponent } from './buffets/buffets.component';
import { NewproductComponent } from './admin/newproduct/newproduct.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { SuccessmodalComponent } from './admin/successmodal/successmodal.component';
import { AuthInterceptor } from './auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoryFilterPipe } from './category-filter.pipe';
import { NewsweetComponent } from './admin/newsweet/newsweet.component';
import { NewsnackComponent } from './admin/newsnack/newsnack.component';
import { UpdatesweetComponent } from './admin/updatesweet/updatesweet.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    CategoriesComponent,
    CatalogComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductImagesComponent,
    ProductDescriptionComponent,
    ProductTabsComponent,
    RelatedProductsComponent,
    CartComponent,
    CartSummaryComponent,
    CartItemsComponent,
    CheckoutComponent,
    ProgressIndicatorComponent,
    ShippingFormComponent,
    DeliveryOptionsComponent,
    PaymentMethodComponent,
    OrderSummaryComponent,
    OrderConfirmationComponent,
    ThankYouMessageComponent,
    AccountComponent,
    SidebarComponent,
    OrderHistoryComponent,
    PersonalInfoComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    CompanyInfoComponent,
    TeamComponent,
    ContactInfoComponent,
    FaqComponent,
    QuestionListComponent,
    TermsComponent,
    TermsContentComponent,
    SearchResultsComponent,
    ResultsListComponent,
    PromotionsComponent,
    PromotionListComponent,
    BlogComponent,
    ArticleListComponent,
    ArticleComponent,
    ReviewsComponent,
    ReviewListComponent,
    ReviewFormComponent,
    WishlistComponent,
    ItemListComponent,
    PageNotFoundComponent,
    MessageComponent,
    AdminComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    ManageUsersComponent,
    MaintenanceComponent,
    HeaderComponent,
    FooterComponent,
    FeaturedProductsComponent,
    ProductFiltersComponent,
    ProductSortingComponent,
    ForgotPasswordComponent,
    AccountDashboardComponent,
    AddressBookComponent,
    AddressFormComponent,
    CarouselSliderComponent,
    ProductCardComponent,
    ProductFormComponent,
    QuantityInputComponent,
    TeamsComponent,
    BestSellingComponent,
    CandyBannerComponent,
    CandyInfoComponent,
    MarqueeComponent,
    DashboardComponent,
    AnalyticsComponent,
    BlogsComponent,
    FeaturesComponent,
    WishlistComponent,
    BestsellerComponent,
    BuffetsComponent,
    NewproductComponent,
    UpdateproductComponent,
    SuccessmodalComponent,
    CategoryFilterPipe,
    NewsweetComponent,
    NewsnackComponent,
    UpdatesweetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,   
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ProductService,
    CartService,
    CheckoutService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
