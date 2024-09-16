import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListItemComponent } from './my-list-item.component';

describe('MyListItemComponent', () => {
  let component: MyListItemComponent;
  let fixture: ComponentFixture<MyListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
