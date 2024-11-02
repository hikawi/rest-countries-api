import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries: Record<string, any> = {};
  cca3s = new Set<string>();
  ready = signal(true);

  async requestData() {
    const json = await fetch("https://restcountries.com/v3.1/all").then(res => res.json());
    for (const node of json) {
      this.cca3s.add(node.cca3.toLowerCase());
      this.countries[node.cca3.toLowerCase()] = node;
    }
    this.ready.set(true);
  }

  get(code: string): any {
    return this.countries[code.toLowerCase()];
  }

  constructor() {
    this.requestData();
  }

}
