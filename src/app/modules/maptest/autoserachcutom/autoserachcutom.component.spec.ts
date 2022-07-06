import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoserachcutomComponent } from './autoserachcutom.component';

describe('AutoserachcutomComponent', () => {
  let component: AutoserachcutomComponent;
  let fixture: ComponentFixture<AutoserachcutomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoserachcutomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoserachcutomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
