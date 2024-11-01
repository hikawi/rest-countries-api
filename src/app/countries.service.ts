import { Injectable } from '@angular/core';
import dataFile from "../data.json";

type Country = {
  name: string;
  nativeName: string[];
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  bordering: string[];
  flags: {
    image: string;
    alt: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries: Record<string, typeof import("../data.json")[0]> = {};
  cca2s: string[] = []

  constructor() {
    for (const data of dataFile) {
      this.countries[data.cca2] = data;
      this.cca2s.push(data.cca2);
    }
  }

}
