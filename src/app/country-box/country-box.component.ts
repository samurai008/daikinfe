import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-country-box',
  templateUrl: './country-box.component.html',
  styleUrls: ['./country-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryBoxComponent),
      multi: true
    }
  ]
})
export class CountryBoxComponent implements OnInit, ControlValueAccessor {
  @Input()
  countryValue;
  listOfCountries = [
    'Sudan',
    'Zambia',
    'Egypt',
    'Saudi'
  ];
  filteredItems;
  propogateChange = (_: any) => {};

  constructor() { }

  filterItem(value) {
    if (!value || value === '') {
      this.filteredItems = Object.create([]);
      return this.filteredItems;
    }
   this.filteredItems = Object.assign([], this.listOfCountries).filter(
      (item) => {
        return (item.toLowerCase().indexOf(value.toLowerCase()) > -1);
      }
     );
  }

  setCountry(item) {
    this.countryValue = item;
    this.propogateChange(this.countryValue);
    return false;
  }

  ngOnInit() {
  }


  // ControlValueAccessor methods to be implemented
  writeValue(value: any) {
    if (value !== undefined) {
      this.countryValue = value;
    }
  }

  registerOnChange(fn) {
    this.propogateChange = fn;
  }

  registerOnTouched() {}

}
