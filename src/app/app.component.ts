import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-materials-tailwind';

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
