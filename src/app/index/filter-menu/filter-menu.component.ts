import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'filter-menu',
  standalone: true,
  imports: [],
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.scss'
})
export class FilterMenuComponent {

  @Input() filter: string = "";
  @Output() filterChange = new EventEmitter<string>();

  @ViewChild("filterMenu") filterMenuRef: ElementRef | undefined;
  @ViewChild("ul") filterOptionsRef: ElementRef | undefined;
  menuOpen = false;

  handleClick() {
    if (this.menuOpen) {
      this.menuOpen = false;
      this.filterMenuRef?.nativeElement?.focus();
    } else {
      this.menuOpen = true;
      this.filterOptionsRef?.nativeElement?.focus();
    }
  }

  handleKeydown(e: KeyboardEvent) {
    switch (e.key) {
      case "Enter":
      case " ":
      case "Return":
        this.handleClick();
        break;
    }
  }

  handleKeydownOption(e: KeyboardEvent, region: string) {
    switch (e.key) {
      case "Enter":
      case " ":
      case "Return":
        this.setFilter(region);
        break;
    }
  }

  setFilter(region: string) {
    if (region == "None") {
      region = "";
    }

    this.filter = region;
    this.filterChange.emit(region);
  }

}
