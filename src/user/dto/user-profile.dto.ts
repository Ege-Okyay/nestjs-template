import { ApiProperty } from '@nestjs/swagger';

export class UserProfileDto {
  @ApiProperty({ description: 'Unique ID of the user', example: 'b9088422-f62b-4dc9-8d05-c2d4fce283ea' })
  userId: string;

  @ApiProperty({ description: 'Email of the user', example: 'user@example.com' })
  email: string;
}
