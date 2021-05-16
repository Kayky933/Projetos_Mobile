import { Component } from '@angular/core';
import {
  AlertController,
  ToastController,
  ActionSheetController,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: any[] = [];
  constructor(
    public alertCtrl: AlertController,
    private tostCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.loadStorage();
  }

  unread(item) {}

  async openActions(task: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header:"oque deseja fazer?",
      buttons:[{
        text: task.done? "Desmarcar":"Marcar",
        icon: task.done? "radio-button-off":"checkmark-circle",
        handler:()=>{
          task.done = !task.done;
          this.updatelocalStorage();
        }
      },
    {
      text: "Cancelar",
      icon: "Close",
      handler:()=>{
        console.log("Cancel clicled");
      }
    }]        

    });
    await actionSheet.present();
  }
async delet(task:any){
  this.tasks = this.tasks.filter((tasksArray)=> tasksArray != task);
  this.updatelocalStorage();
}
  loadStorage() {
    let taskJson = localStorage.getItem('tasKDb');
    console.log(taskJson);
    if (taskJson) {
      this.tasks = JSON.parse(taskJson);
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async ShowAdd() {
    const alert = await this.alertCtrl.create({
      header: 'O que deseja fazer ?',
      inputs: [
        {
          name: 'taskToDo',
          type: 'text',
          placeholder: 'Comprar pão',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('clicked cancel');
          },
        },
        {
          text: 'Adicionar',
          handler: (form) => {
            console.log(form.newTask);
            this.add(form.taskToDo);
          },
        },
      ],
    });
    await alert.present();
  }
  async add(newTask: String) {
    if (newTask.trim().length < 1) {
      const toast = await this.tostCtrl.create({
        message: 'Informe algo nas anotações!',
        duration: 2000,
        position: 'top',
      });
      toast.present();
      return;
    }
    let task = { name: newTask, done: false };
    this.tasks.push(task);
    this.updatelocalStorage();
  }
  updatelocalStorage() {
    localStorage.setItem('tasKDb', JSON.stringify(this.tasks));
  }
}
