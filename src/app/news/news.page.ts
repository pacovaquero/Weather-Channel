
import { NewsArticlesService } from '../api/news-articles.service';
import { Component, OnInit } from '@angular/core';


@Component({
 selector: 'app-news',
 templateUrl: './news.page.html',
 styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

 selectedCategory='business'
 topHeadLines: NewsArticle[] = [];

 constructor(private articleService:NewsArticlesService) { 
 }


 ngOnInit() {
    this.articleService.getTopHeadLines().subscribe((results: NewsResponse) =>{
      this.topHeadLines.push(...results.articles);
      console.log(this.topHeadLines);
    })

    this.articleService.getArticleByCategory(this.selectedCategory).subscribe((results: NewsResponse) =>{
      console.log(results);
    })
 }
 deleteArticle(index: number) {
  this.topHeadLines.splice(index, 1);
}
}
export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
 }
 
 export interface Source {
  id: string;
  name: string;
 }
 
 export interface NewsArticle {
urlToImage: any;
publishedAt: string|number|Date;
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
 }