import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveTableViewComponent } from './recursive-table-view.component';

describe('RecursiveTableViewComponent', () => {
  let component: RecursiveTableViewComponent;
  let fixture: ComponentFixture<RecursiveTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
