import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsArticle } from '../news/news.page';
import { NewsResponse } from '../news/news.page';

@Injectable({
 providedIn: 'root'
})

export class NewsArticlesService {

 constructor(private httpClient:HttpClient) { 

 }
 getTopHeadLines(): Observable<NewsResponse> {
    return this.httpClient.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${environment.API_KEY2}`);
  
 }

 getArticleByCategory(category: string): Observable<NewsResponse> {
    return this.httpClient.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${environment.API_KEY2}`);
 }

}