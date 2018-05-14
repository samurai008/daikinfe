import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBoxComponent } from './country-box.component';

describe('CountryBoxComponent', () => {
  let component: CountryBoxComponent;
  let fixture: ComponentFixture<CountryBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
