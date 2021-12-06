import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListClientComponent } from './page-list-client.component';

describe('PageListClientComponent', () => {
  let component: PageListClientComponent;
  let fixture: ComponentFixture<PageListClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
