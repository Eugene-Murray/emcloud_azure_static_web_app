import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolWebsitesComponent } from './cool-websites.component';

describe('CoolWebsitesComponent', () => {
  let component: CoolWebsitesComponent;
  let fixture: ComponentFixture<CoolWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
