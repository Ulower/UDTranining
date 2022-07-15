import { Component } from '@angular/core';
import { tags, articles, recommendedArticles } from "./articles-info";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
  title = 'my-app';

  public tags = tags;
  public articles = articles;
  public recommendedArticles = recommendedArticles;

  public selectedDate = new Date();

  public kendokaAvatar =
    "https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png";
  public items: Array<{ url: string }> = [
      {
        url: "../assets/pexels-ahmad-syahrir-758744.jpg",
      },
      {
        url: "../assets/pexels-quintin-gellar-6563903.jpg",
      },
      {
        url: "../assets/pexels-exclusive-fate-6470756.jpg",
      },
    ];
    public width = "100%";
    public height = "1280px";
  public item = [
    {
        text: 'Home',
        title: 'Home',
        icon: 'home'
    },
    {
        text: 'Products',
        title: 'Products'
    },
    {
        text: 'Keyboards',
        title: 'Keyboards'
    }
    
  ];

  handleValueChange(): void {
    articles.sort(() => Math.random() - 0.5);
    recommendedArticles.sort(() => Math.random() - 0.5);
  }
}
