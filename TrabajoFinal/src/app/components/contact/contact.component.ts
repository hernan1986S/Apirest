import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
formularioContacto!: FormGroup;


  constructor(
    private fb: FormBuilder

  ) {
    this.formularioContacto = this.fb.group({
    nombre: new FormControl('',[Validators.required]),
    apellido: new FormControl('',[Validators.required]),
    pais: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    contraseña: new FormControl('', [Validators.required]),
    mensaje: new FormControl('', [Validators.required])
  });
   }

  ngOnInit(): void {
  }

   enviarContacto(){
    console.log(this.formularioContacto);
   }



}
