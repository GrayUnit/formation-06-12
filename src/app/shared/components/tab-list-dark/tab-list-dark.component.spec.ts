import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabListDarkComponent } from './tab-list-dark.component';

describe('TabListDarkComponent', () => {
  let component: TabListDarkComponent;
  let fixture: ComponentFixture<TabListDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabListDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabListDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
