import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService, QuizService } from '@ezquiz/services';
import {
  CardComponent,
  SidescrollerComponent,
  PageComponent
} from '@ezquiz/components';

@NgModule({
  declarations: [CardComponent, SidescrollerComponent, PageComponent],
  imports: [CommonModule],
  providers: [UserService, QuizService],
  exports: [CardComponent, SidescrollerComponent, PageComponent]
})
export class EzquizCommonModule {}
