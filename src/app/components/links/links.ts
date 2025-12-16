import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core'
import { heroUsers } from '@ng-icons/heroicons/outline';
import { octHomeFill, octSearch, octBell, octPersonAdd, octMail, octStar, octListUnordered, octFileBadge, octPeople, octZap, octPerson, octKebabHorizontal, octX } from '@ng-icons/octicons';

@Component({
  selector: 'app-links',
  imports: [NgIcon],
  templateUrl: './links.html',
  styleUrl: './links.css',
  viewProviders: [provideIcons({ octHomeFill, octSearch, octBell, octPersonAdd, octMail, octStar, octListUnordered, octFileBadge, octPeople, octZap, octPerson, octKebabHorizontal, octX })]
})
export class Links {
  @Input() text: string = '';
  @Input() icon: string = '';
}
