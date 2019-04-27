import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginContainer } from './login.controller';
import { EzquizCommonModule } from '@ezquiz/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginContainer, LoginComponent],
  imports: [CommonModule, EzquizCommonModule, RouterModule],
  providers: [],
  exports: [LoginContainer]
})
export class LoginModule {}
