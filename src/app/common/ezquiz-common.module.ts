import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {
  UserService,
  QuizService,
  InitializationService
} from '@ezquiz/services';
import {
  CardComponent,
  SidescrollerComponent,
  PageComponent,
  QuizCardComponent
} from '@ezquiz/components';

@NgModule({
  declarations: [
    CardComponent,
    QuizCardComponent,
    SidescrollerComponent,
    PageComponent
  ],
  imports: [CommonModule, AngularFireAuthModule],
  exports: [
    CardComponent,
    QuizCardComponent,
    SidescrollerComponent,
    PageComponent
  ]
})
export class EzquizCommonModule {}
