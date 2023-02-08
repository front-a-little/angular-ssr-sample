import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-teaser-list',
  templateUrl: './teaser-list.component.html',
  styleUrls: ['./teaser-list.component.scss']
})
export class TeaserListComponent  implements OnInit {

  products = [];
  loading = true;
  selectedTeaser = "";

  async ngOnInit(): Promise<void> {
    const res = await fetch("./assets/mockData.json");
    this.products = await res.json();
    this.loading = false;
  }

  onSelected(product: any) {
    this.selectedTeaser = product.title;
  }
}
