import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBubbleComponent } from './profile-bubble.component';

describe('ProfileBubbleComponent', () => {
  let component: ProfileBubbleComponent;
  let fixture: ComponentFixture<ProfileBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
