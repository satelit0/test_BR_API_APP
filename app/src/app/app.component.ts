import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ICandidate } from './candidates/candidates.interface';
import { CandidatesService } from './services/candidates.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Block, Notify, Confirm } from 'notiflix';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  title = 'testbr_app';

  @ViewChild('candidatesTable', { read: MatSort }) candidatesTableMatSort!: MatSort;

  candidateDataSource: MatTableDataSource<any> = new MatTableDataSource();

  candidatesTableColumns: string[] = ['id', 'cedula', 'nombres', 'apellidos', 'fecha_nacimiento', 'expectativa_salarial', 'trabajo_actual', 'actions'];

  private unsubscribeAll: Subject<any> = new Subject<any>();

  data$!: Observable<ICandidate[]>;
  candidates: ICandidate[] = [];
  candidate!: ICandidate;

  modeEdit = false;

  candidateForm = this.fb.group({
    id: [NaN, []],
    cedula: ['', [Validators.required, Validators.minLength(11)]],
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    fecha_nacimiento: ['', [Validators.required]],
    expectativa_salarial: [NaN],
    trabajo_actual: [''],
  });

  constructor(
    private candidatesService: CandidatesService,
    private fb: FormBuilder,
  ) {

  }
  ngOnDestroy(): void {
    this.unsubscribeAll.next(true);
    this.unsubscribeAll.complete();
  }

  /**
  * 
  */
  ngOnInit(): void {
    this.loadCandidates();
  }

/**
 * 
 */
  ngAfterViewInit(): void {
    this.candidateDataSource.sort = this.candidatesTableMatSort;
  }

  loadCandidates() {
    // Loading.standard('Cargando, espere...');
    Block.standard('.block_table', 'Cargando, espere...');
    // Get Candodates
    this.data$ = this.candidatesService.getConadidates();

    this.data$.pipe(takeUntil(this.unsubscribeAll)).subscribe({
      next: ((candidates) => {
        this.candidates = candidates;
        this.candidateDataSource.data = this.candidates;
        // Loading.remove();
      }),
      error: (error) => {
        Notify.failure(`${error.message}`)
        Block.remove('.block_table');
      },
      complete: () => {
        Block.remove('.block_table');
      }

    });
  }

  addCanditate() {
    this.candidatesService.addCandidate({
      cedula: this.candidateForm.controls.cedula.value!,
      nombres: this.candidateForm.controls.nombres.value!,
      apellidos: this.candidateForm.controls.apellidos.value!,
      fecha_nacimiento: this.candidateForm.controls.fecha_nacimiento.value!,
      expectativa_salarial: this.candidateForm.controls.expectativa_salarial.value,
      trabajo_actual: this.candidateForm.controls.trabajo_actual.value!,
    }).pipe(takeUntil(this.unsubscribeAll)).subscribe({
      next: newCandidate => {
      },
      error: (error => {
        Notify.failure(`${error.error.message}`);
      }),
      complete: () => {
        Notify.success(`Candidato ${this.candidateForm.controls.nombres.value} ${this.candidateForm.controls.apellidos.value}, fue creado con exito`);
        this.loadCandidates();
        this.clearForm();
      }
    });
  }

  loadCandidatesFieldToEdit(id: number) {
    this.candidatesService.getCandidateById(id).pipe(takeUntil(this.unsubscribeAll)).subscribe(candidate => {
      this.candidateForm.patchValue(candidate);
      this.modeEdit = true;
    });

  }

  deleteCadidate(id: number) {
    Confirm.show('Eliminar Candidato', 'Esta seguro de querer eliminar el candidato ?', 'Sí', 'No',()=>{ 

      this.candidatesService.deleteCandidate(id, false).subscribe({
        next: (resp => {
          this.clearForm();
        }),
        error: (err) => {
          Notify.failure(`${err.error.message}`);
        },
        complete: () => {
          Notify.info(`Candidato con id: ${id}, eliminado.`);
          this.loadCandidates();
        }
      });
    });
  }

  editCandidate(id: number) {
    Block.standard('.block_table', 'Cargando esper...')
    this.candidatesService.updateCandidate(id, {
      // id: this.candidateForm.controls.id.value,
      cedula: this.candidateForm.controls.cedula.value!,
      nombres: this.candidateForm.controls.nombres.value!,
      apellidos: this.candidateForm.controls.apellidos.value!,
      fecha_nacimiento: this.candidateForm.controls.fecha_nacimiento.value!,
      expectativa_salarial: this.candidateForm.controls.expectativa_salarial.value,
      trabajo_actual: this.candidateForm.controls.trabajo_actual.value!,
    }).pipe(takeUntil(this.unsubscribeAll)).subscribe({
      next: resp => {

      },
      error: err => {
        Notify.failure(`${err.error.message}`);
        Block.remove('.block_table');
      },
      complete: () => {
        Notify.info(`Candidato con id: ${id}, editado con exito.`);
        this.loadCandidates();
        this.clearForm();
        Block.remove('.block_table');
      }
    });
  }

  clearForm() {
    this.candidateForm.reset();
    this.modeEdit = false;
  }

  applyToCandidate() {
    if (this.candidateForm.controls.id.value) {
      this.editCandidate(this.candidateForm.controls.id.value!);
    } else {
      this.addCanditate()
    }
  }

}



