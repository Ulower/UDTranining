import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { TrendingArticleComponent } from './trending-article/trending-article.component';
import { RecommendedArticleComponent } from './recommended-article/recommended-article.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TrendingArticleComponent,
    RecommendedArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    BrowserAnimationsModule,
    IconsModule,
    LayoutModule,
    IndicatorsModule,
    ScrollViewModule,
    ButtonsModule,
    DateInputsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
