import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListOrderComponent } from './page-list-order.component';

describe('PageListOrderComponent', () => {
  let component: PageListOrderComponent;
  let fixture: ComponentFixture<PageListOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
