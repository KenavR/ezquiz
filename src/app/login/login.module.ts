import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginContainer } from './login.controller';
import { LoginService } from './login.service';
import { EzquizCommonModule } from '@ezquiz/common';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginContainer, LoginComponent],
  imports: [CommonModule, EzquizCommonModule],
  providers: [LoginService],
  exports: [LoginContainer]
})
export class LoginModule {}
