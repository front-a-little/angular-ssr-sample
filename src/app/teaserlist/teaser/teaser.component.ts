import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Tag {
  id: string,
  label: string,
}

export interface Product {
  description: string,
  highlighted: boolean,
  labelReadMore: string,
  link: string,
  path: string,
  tags: Tag[],
  title: string,
}

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})


export class TeaserComponent {
  @Input() product! : Product;
  @Output() selected = new EventEmitter();
}
