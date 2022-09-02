import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    usuario: new FormControl('hernán', [Validators.required]),
    contraseña: new FormControl('1234', [Validators.required])
  });

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    const usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contraseña: this.formulario.value.contraseña
    }
    this.auth.iniciarSesion(usuario);
    this.router.navigate(['inicio']);
  }

}
