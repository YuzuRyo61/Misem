import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RelayComponent} from './relay.component';

describe('RelayComponent', () => {
  let component: RelayComponent;
  let fixture: ComponentFixture<RelayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RelayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
