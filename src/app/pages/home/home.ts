import { Component } from '@angular/core';
import { Links } from '../../components/links/links';
import { Profile } from '../../components/profile/profile';
import { Posts } from '../../components/posts/posts';

@Component({
  selector: 'app-home',
  imports: [Links, Profile, Posts ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
