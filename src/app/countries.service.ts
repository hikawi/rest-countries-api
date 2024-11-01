import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries: Record<string, any> = {};
  cca2s = new Set<string>();
  ready = signal(true);

  async requestData() {
    const json = await fetch("https://restcountries.com/v3.1/all").then(res => res.json());
    for (const node of json) {
      this.cca2s.add(node.name.common);
      this.countries[node.name.common] = node;
    }
    this.ready.set(true);
  }

  constructor() {
    this.requestData();
  }

}
