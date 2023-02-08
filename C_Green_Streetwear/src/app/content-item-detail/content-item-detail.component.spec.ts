import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItemDetailComponent } from './content-item-detail.component';

describe('ContentItemDetailComponent', () => {
  let component: ContentItemDetailComponent;
  let fixture: ComponentFixture<ContentItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
