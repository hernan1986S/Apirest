import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formulario: FormControl = new FormControl({
    nomnbre: new FormControl('hernan', [Validators.required,]),
    celular: new FormControl('1128868111', [Validators.required]),
    email: new FormControl('strata@hotmail.com', [Validators.required, Validators.email]),
    contraseña: new FormControl('1234', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
