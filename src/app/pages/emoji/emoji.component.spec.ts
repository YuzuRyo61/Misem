import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EmojiComponent} from './emoji.component';

describe('EmojiComponent', () => {
  let component: EmojiComponent;
  let fixture: ComponentFixture<EmojiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EmojiComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
