import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  cca2: string;
  countries = inject(CountriesService);

  constructor(private router: Router, private route: ActivatedRoute) {
    this.cca2 = this.route.snapshot.paramMap.get("id")!.toUpperCase();
    if (!this.countries.cca2s.has(this.cca2)) {
      this.router.navigate(["../"], { relativeTo: this.route });
    }
  }

}
