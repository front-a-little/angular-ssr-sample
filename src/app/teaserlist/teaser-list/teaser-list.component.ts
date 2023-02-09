import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Product } from "../teaser/teaser.component";

@Component({
  selector: 'app-teaser-list',
  templateUrl: './teaser-list.component.html',
  styleUrls: ['./teaser-list.component.scss']
})
export class TeaserListComponent  implements OnInit {

  products: Product[] = [];
  loading = true;
  selectedTeaser = "";

  constructor(private httpClient: HttpClient) {
  }

  async ngOnInit(): Promise<void> {
    this.httpClient.get<Product[]>("./assets/mockData.json").subscribe(res => this.products = res);
    this.loading = false;
  }

  onSelected(product: any) {
    this.selectedTeaser = product.title;
  }
}
