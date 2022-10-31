import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveJsonComponent } from './recursive-json.component';

describe('RecursiveJsonComponent', () => {
  let component: RecursiveJsonComponent;
  let fixture: ComponentFixture<RecursiveJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
