import {ApiModelProperty} from '@nestjs/swagger';
export class LoginUserDto {
  @ApiModelProperty()  _key: string;
  @ApiModelProperty() password: String;
  @ApiModelProperty({ required: false }) roles: String[];
}