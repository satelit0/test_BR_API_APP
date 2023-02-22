import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICandidate } from './candidates.interface';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  @Input() candidate$!: Observable<ICandidate>;
  // @Input() run 

  candidateForm = this.fb.group({
    id                  : [null],
    cedula              : ['', [Validators.required, Validators.minLength(11)]],
    nombres             : ['', [Validators.required]],
    apellidos           : ['', [Validators.required]],
    fecha_nacimiento    : ['', [Validators.required]],
    expectativa_salarial: [null],
    trabajo_actual      : [''],
  });

  

  constructor(
    private fb: FormBuilder,
  ) { 
    this.candidate$.subscribe( resp => {
      console.log('in son', resp);
    });
  }



  ngOnInit(): void {
    //  this.fb.group({
    //   id                  : [0],
    //   cedula              : ['', [Validators.required, Validators.minLength(11)]],
    //   nombres             : ['', [Validators.required]],
    //   apellidos           : ['', [Validators.required]],
    //   fecha_nacimiento    : ['', [Validators.required]],
    //   expectativa_salarial: [null],
    //   trabajo_actual      : [''],
    // });

    // this.candidateForm.controls.cedula.setValue(this.candidate.cedula!);
    
  }

  test(id: number){
    console.log('ok...', id);
    
  }



}
