import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeDestino} from '../models/viaje-destino.model';
import { ViajeDestinoComponent } from './viaje-destino.component';

describe('ViajeDestinoComponent', () => {
  let component: ViajeDestinoComponent;
  let fixture: ComponentFixture<ViajeDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajeDestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
