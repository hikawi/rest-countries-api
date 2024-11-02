import { DecimalPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  shouldDisplay(country: string): boolean {
    if (!this.countries.ready())
      return false;

    const name = this.countries.get(country).name.common;
    const region = this.countries.get(country).region;
    return name.toLowerCase().includes(this.search().toLowerCase()) && region.toLowerCase().includes(this.filter().toLowerCase());
  }

  handleClick(country: string) {
    this.router.navigate([country]);
  }

  handleKeydown(e: KeyboardEvent, country: string) {
    switch (e.key) {
      case "Enter":
      case " ":
        this.router.navigate([country]);
        break;
    }
  }

}
