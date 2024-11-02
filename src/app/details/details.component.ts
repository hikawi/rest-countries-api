import { DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../countries.service';
import { ListToStringPipe } from '../pipes/list-to-string.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DecimalPipe, ListToStringPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  cca3: string;
  countries = inject(CountriesService);

  nativeNames: string[];
  currencies: string[];
  languages: string[];

  borderingIds: string[];
  borderingNames: Record<string, string>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.cca3 = this.route.snapshot.paramMap.get("id")!.toLowerCase();
    if (!this.countries.cca3s.has(this.cca3)) {
      this.router.navigate(["../"], { relativeTo: this.route });
    }

    const nativeNames = this.countries.get(this.cca3).name.nativeName;
    this.nativeNames = [];
    for (const [key, obj] of Object.entries(nativeNames))
      this.nativeNames.push(`${(obj as any).common} (${key})`);

    this.currencies = [];
    const currencies = this.countries.get(this.cca3).currencies;
    for (const [key, obj] of Object.entries(currencies))
      this.currencies.push(`${(obj as any).name} (${key})`);

    this.languages = [];
    const languages = this.countries.get(this.cca3).languages;
    for (const [key, obj] of Object.entries(languages))
      this.languages.push(`${obj} (${key})`);

    // Some don't have borders.
    this.borderingIds = [];
    this.borderingNames = {};
    const borders = this.countries.get(this.cca3).borders;
    if (borders) {
      for (const key of borders) {
        this.borderingIds.push(key);
        this.borderingNames[key] = this.countries.get(key).name.common;
      }
    }
  }

  ngOnInit() {
    document.title = this.countries.get(this.cca3).name.common;
  }

  goBack() {
    this.router.navigate(["/"]);
  }

  goToCountry(id: string) {
    this.router.navigate(["/"], { skipLocationChange: true }).then(() => this.router.navigate([id.toLowerCase()]));
  }

}
