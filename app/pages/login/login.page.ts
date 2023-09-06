import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormGroup,
         FormControl,
         Validators,
         FormBuilder} from '@angular/forms';     

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';
  constructor(private menuController: MenuController,
              private alertController: AlertController) { }


  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias!',
      message: 'Se han enviado sus datos!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  
  ngOnInit() {
  }


}
