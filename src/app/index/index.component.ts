import { Component, inject, signal } from '@angular/core';
import { CountriesService } from '../countries.service';
import { CountryViewComponent } from "./country-view/country-view.component";
import { FilterMenuComponent } from "./filter-menu/filter-menu.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FilterMenuComponent, CountryViewComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  filter = signal("");
  search = signal("");

  countries = inject(CountriesService);

  searchChange(e: Event) {
    this.search.set((e.target as HTMLInputElement).value);
  }

  ngOnInit() {
    document.title = "All Countries";
  }

}
