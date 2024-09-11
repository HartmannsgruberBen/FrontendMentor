import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMessageDialogComponent } from './my-message-dialog.component';

describe('MyMessageDialogComponent', () => {
  let component: MyMessageDialogComponent;
  let fixture: ComponentFixture<MyMessageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyMessageDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
