import { Injectable } from '@angular/core';
import {BlogPostData} from "./blogpostdata";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts: BlogPostData[] = [
    {id: 1, title: 'Ichep 2024', image:'assets/Ichep_1.jpg', content: 'test', side: "right"},
    {id: 2, title: 'Trip to a fusion reactor', image:'assets/tokamak.jpg', content: '' +
        'On the 31st of June I with a group of people set out within a school action " " ' +
        '', side: "left"},
    {id: 3, title: 'Nuclear days', image:'assets/code_img.jpg', content: 'test', side: "right"},
    {id: 4, title: 'Nobel`s institute', image:'assets/nobeluv_institut.jpg', content: 'test', side: "right"},
    {id: 5, title: 'Art camp 2023', image:'assets/art_course.jpg', content: 'test', side: "right"},
    {id: 6, title: 'App Decibel', image:'assets/fanda.svg', content: 'This is an application programed by me and my brother as a joke to a friend the sounds were edited by me the working app can be found here https://decibel.bronaruzicka.cz/.', side: "left"},

  ]

  getAllPosts(): BlogPostData[] {
    return this.posts;
  }

  getPost(id: number): BlogPostData | undefined {
    return this.posts.find(post => post.id == id);
  }

}
