import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
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

  ngOnInit(): void {
    console.log("[TEASERLIST] init");

    this.loadData();

    console.log("[TEASERLIST] init finished");
  }

  loadData() {
    this.httpClient.get<Product[]>("http://localhost:4200/assets/mockData.json")
      .pipe(catchError((error: HttpErrorResponse) => {
        console.log("STATUS: ", error.status);
        console.log("ERROR: ", error);
        return throwError(() => new Error("That didn't work serverside."));
      })).subscribe((res) => {
        console.log("[TEASERLIST] data received");
        this.loading = false;
        return this.products = res
    })
  }

  onSelected(product: any) {
    this.selectedTeaser = product.title;
  }
}
