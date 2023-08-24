import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//comentario
  nombreUsuario: string = "Victor";
  edadP: number = 30;
  date: Date = new Date();
  //user = "Adriana";
  listaPersonas: any = [
    {
      nombre: "Maria",
      edad: 34,
      apellido: "Josefa",
      sueldo: 550000
    },
    {
      nombre: "Mario",
      edad: 34,
      apellido: "Josefo",
      sueldo: 480000
    }
  ];

  nom : string = "";

  constructor(private toastController: ToastController,private router: Router,private alertController: AlertController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  irPagina1(){
    let navigationExtras: NavigationExtras={
      state :{
        usuarioEnviado: this.nombreUsuario,
        edadEnviada: this.edadP
      }
    }
    //this.presentAlert();
    this.presentToast('bottom');
    this.router.navigate(['/pagina1'],navigationExtras);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Mensaje Importante',
      message: 'Esto es una alerta!',
      buttons: ['Confirmar'],
    });

    await alert.present();
  }

  sumar(){
    this.nombreUsuario;
    console.log("Hola mundo");
  }


}
