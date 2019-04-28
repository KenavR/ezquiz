import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {
  CardComponent,
  SidescrollerComponent,
  PageComponent,
  QuizCardComponent,
  ModalComponent,
  LogoComponent
} from '@ezquiz/components';

@NgModule({
  declarations: [
    CardComponent,
    QuizCardComponent,
    SidescrollerComponent,
    PageComponent,
    ModalComponent,
    LogoComponent
  ],
  imports: [CommonModule, AngularFireAuthModule],
  exports: [
    CardComponent,
    QuizCardComponent,
    SidescrollerComponent,
    PageComponent,
    ModalComponent,
    LogoComponent
  ]
})
export class EzquizCommonModule {}
