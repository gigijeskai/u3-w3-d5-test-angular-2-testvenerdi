import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  templateUrl: './active-posts.page.html',
  styleUrls: ['./active-posts.page.scss'],
})
export class ActivePostsPage implements OnInit {
  posts!: Post[];
  constructor() {}

  ngOnInit(): void {}
}
