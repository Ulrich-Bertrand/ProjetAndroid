import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {
  userId: any;
  messageText: any;
  messages = [];

  constructor(
    public afDB: AngularFireDatabase,
    public afAuth: AngularFireList,
    private fb: Facebook,
    public platform: Platform
  ) {
    this.providerFb = new firebase.auth.FacebookAuthProvider();
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('Non connecte');
      } else {
        console.log('Utilisateur connecte: ' + auth.uid);
        this.connected = true;
        this.userId = auth.uid;
        this.getMessages();
      }
    })
  }
  
  
  sendMessage() {
    console.log('messageText: ' + this.messageText);
    this.afDB.list('Messages/').push({
      userId: this.userId,
      text: this.messageText,
      date: new Date().toDateString()
    });
    this.messageText = '';
  }

  getMessages() {
    this.afDB.list('Messages/').snapshotChanges(['child_added']).subscribe(actions => {
      this.messages = [];
      actions.forEach(action => {
        console.log('MessageText: ' + action.payload.exportVal().text);  
      });
    });
  }

}
