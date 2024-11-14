import { IsEmail, IsString, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty({ description: 'Email of the user', example: 'newuser@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ 
    description: 'Password of the user, must be at least 8 characters long', 
    example: 'securePassword8',
    minLength: 8 
  })
  @IsString()
  @MinLength(8, { message: 'Password must have minimum 8 characters' })
  password: string;
}
