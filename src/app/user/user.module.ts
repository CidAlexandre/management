import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user';
import { UserUpdate } from './update/user.update';

@NgModule({
  declarations: [UserUpdate],
  exports: [UserUpdate],
  imports: [CommonModule],
})
export class UserModule {}
