import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AnnouncementComponent} from './announcement.component';

describe('AnnouncementComponent', () => {
  let component: AnnouncementComponent;
  let fixture: ComponentFixture<AnnouncementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
