export * from './header/header-bar.component';
export * from './header/header-bar-brand.component';
export * from './nav.component';
export * from './not-found.component';

import { HeaderBarBrandComponent } from './header/header-bar-brand.component';
import { HeaderBarComponent } from './header/header-bar.component';
import { NavComponent } from './nav.component';
import { NotFoundComponent } from './not-found.component';

export const declarations = [
  NavComponent,
  HeaderBarComponent,
  HeaderBarBrandComponent,
  NotFoundComponent,
];
