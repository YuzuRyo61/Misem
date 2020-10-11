import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MiauthComponent} from './miauth.component';

describe('MiauthComponent', () => {
  let component: MiauthComponent;
  let fixture: ComponentFixture<MiauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiauthComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
