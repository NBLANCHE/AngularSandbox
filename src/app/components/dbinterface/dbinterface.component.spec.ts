import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbinterfaceComponent } from './dbinterface.component';

describe('DbinterfaceComponent', () => {
  let component: DbinterfaceComponent;
  let fixture: ComponentFixture<DbinterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbinterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
