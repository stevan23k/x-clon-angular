import { Component, Input } from '@angular/core';
import { Profile } from '../profile/profile';
import { NgIcon, provideIcons } from '@ng-icons/core'
import { octHeartFill, octLoop, octComment, octGraph } from '@ng-icons/octicons';

@Component({
  selector: 'app-posts',
  imports: [Profile, NgIcon],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
  viewProviders: [provideIcons({octHeartFill, octLoop, octComment, octGraph})]
})
export class Posts {
  @Input() description: string = '';
  @Input() imageUrl: string = '';
}
