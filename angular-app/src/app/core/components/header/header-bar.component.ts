import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  template: `
    <header>
      <nav
        class=""
        role="navigation"
        aria-label="main navigation"
      >
        <app-header></app-header>
      </nav>
    </header>
  `,
})
export class HeaderBarComponent {}
