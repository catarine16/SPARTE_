import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailInvalidErrorVisible: boolean = false;
  emailRequiredErrorVisible: boolean = false;
  passwordRequiredErrorVisible: boolean = false;
  recoverPasswordButtonDisabled: boolean = true;
  loginButtonDisabled: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onChangeEmail(): void {
    this.toggleButtonsDisable();
    this.toggleEmailErrors();
  }

  onChangePassword(): void {
    this.toggleButtonsDisable();
    this.togglePasswordErrors();
  }

  login(): void {
    // Simulação de exibição de loading
    this.showLoading();

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // Simulação de autenticação usando Firebase
    if (email === 'user@example.com' && password === 'password') {
      // Simulação de sucesso de login
      setTimeout(() => {
        this.hideLoading();
        this.router.navigate(['/artistas']);
      }, 2000); // Tempo de espera simulado de 2 segundos
    } else {
      // Simulação de falha de login
      setTimeout(() => {
        this.hideLoading();
        alert('Email ou senha inválidos');
      }, 2000); // Tempo de espera simulado de 2 segundos
    }
  }

  register(): void {
    this.router.navigate(['/registro']);
  }

  recoverPassword(): void {
    // Simulação de exibição de loading
    this.showLoading();

    const email = this.loginForm.get('email')?.value;

    // Simulação de recuperação de senha usando Firebase
    setTimeout(() => {
      this.hideLoading();
      alert('Email enviado com sucesso');
    }, 2000); // Tempo de espera simulado de 2 segundos
  }

  toggleEmailErrors(): void {
    const email = this.loginForm.get('email')?.value;
    this.emailRequiredErrorVisible = email ? false : true;
    this.emailInvalidErrorVisible = this.validateEmail(email) ? false : true;
  }

  togglePasswordErrors(): void {
    const password = this.loginForm.get('password')?.value;
    this.passwordRequiredErrorVisible = password ? false : true;
  }

  toggleButtonsDisable(): void {
    const emailValid = this.isEmailValid();
    this.recoverPasswordButtonDisabled = !emailValid;

    const passwordValid = this.isPasswordValid();
    this.loginButtonDisabled = !emailValid || !passwordValid;
  }

  isEmailValid(): boolean {
    const email = this.loginForm.get('email')?.value;
    if (!email) {
      return false;
    }
    return this.validateEmail(email);
  }

  isPasswordValid(): boolean {
    const password = this.loginForm.get('password')?.value;
    return password ? true : false;
  }

  validateEmail(email: string): boolean {
    // Simples validação de email (pode ser substituída por uma validação mais robusta)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showLoading(): void {
    // Simulação de exibição de loading
    console.log('Loading...');
  }

  hideLoading(): void {
    // Simulação de ocultação de loading
    console.log('Loading hidden');
  }
}

