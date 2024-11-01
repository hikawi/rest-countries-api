import { DecimalPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CountriesService } from '../countries.service';
import { ListToStringPipe } from '../pipes/list-to-string.pipe';
import { CountryViewComponent } from "./country-view/country-view.component";
import { FilterMenuComponent } from "./filter-menu/filter-menu.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FilterMenuComponent, DecimalPipe, ListToStringPipe, CountryViewComponent],
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

}
