import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  templateUrl: './inactive-posts.page.html',
  styleUrls: ['./inactive-posts.page.scss'],
})
export class InactivePostsPage implements OnInit {
  posts!: Post[];

  constructor() {}

  ngOnInit(): void {}
}
