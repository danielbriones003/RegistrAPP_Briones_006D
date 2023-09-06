import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { InicioPage } from '../inicio/inicio.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  usuario={
    nombre:'',
    apellido:'',
    email:'',
    password:''
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias!',
      message: 'Se han enviado sus datos!',
      buttons: ['OK'],
    });
    await alert.present();
  }


  Enviar(){
    console.log('Registro Enviado');
    this.MostrarMensaje();
    this.usuario.nombre='';
    this.usuario.apellido='';
    this.usuario.email='';
    this.usuario.password='';
  }

}