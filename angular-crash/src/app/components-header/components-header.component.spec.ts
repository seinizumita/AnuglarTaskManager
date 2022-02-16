import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsHeaderComponent } from './components-header.component';

describe('ComponentsHeaderComponent', () => {
  let component: ComponentsHeaderComponent;
  let fixture: ComponentFixture<ComponentsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
