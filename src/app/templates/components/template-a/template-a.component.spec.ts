import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAComponent } from './template-a.component';

describe('TemplateAComponent', () => {
  let component: TemplateAComponent;
  let fixture: ComponentFixture<TemplateAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
