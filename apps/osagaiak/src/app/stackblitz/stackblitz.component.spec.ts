import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StackblitzComponent } from './stackblitz.component';

describe('StackblitzComponent', () => {
  let component: StackblitzComponent;
  let fixture: ComponentFixture<StackblitzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackblitzComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StackblitzComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('files', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
