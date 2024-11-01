import { DecimalPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { CountriesService } from '../../countries.service';
import { ListToStringPipe } from '../../pipes/list-to-string.pipe';

@Component({
  selector: 'country-view',
  standalone: true,
  imports: [DecimalPipe, ListToStringPipe],
  templateUrl: './country-view.component.html',
  styleUrl: './country-view.component.scss'
})
export class CountryViewComponent {

  search = input.required<string>();
  filter = input.required<string>();

  countries = inject(CountriesService);

  shouldDisplay(country: string): boolean {
    if (!this.countries.ready())
      return false;

    const name = this.countries.countries[country].name.common;
    const region = this.countries.countries[country].region;
    return name.toLowerCase().includes(this.search().toLowerCase()) && region.toLowerCase().includes(this.filter().toLowerCase());
  }

}
