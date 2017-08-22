import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigdragdropComponent } from './configdragdrop.component';

describe('ConfigdragdropComponent', () => {
  let component: ConfigdragdropComponent;
  let fixture: ComponentFixture<ConfigdragdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigdragdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigdragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
