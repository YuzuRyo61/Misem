import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FediverseComponent} from './fediverse.component';

describe('FediverseComponent', () => {
  let component: FediverseComponent;
  let fixture: ComponentFixture<FediverseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FediverseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FediverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
