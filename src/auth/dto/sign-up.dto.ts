import { IsEmail, IsString, MinLength } from "class-validator";

export class SignUpDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must have minimum 8 characters' })
  password: string;
}
