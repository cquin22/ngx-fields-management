import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomListBasicComponent } from './custom-list-basic.component';

describe('CustomListBasicComponent', () => {
  let component: CustomListBasicComponent;
  let fixture: ComponentFixture<CustomListBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomListBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomListBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
