import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourLeaveRequestsComponent } from './your-leave-requests.component';

describe('YourLeaveRequestsComponent', () => {
  let component: YourLeaveRequestsComponent;
  let fixture: ComponentFixture<YourLeaveRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourLeaveRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourLeaveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
