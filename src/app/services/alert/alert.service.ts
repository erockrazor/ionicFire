import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) { }

  async presentAlert(header, message, buttons) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [buttons]
    });
    await alert.present();
  }
}
