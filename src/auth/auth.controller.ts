import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { LoginDto } from './dto/login.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('sign-up')
  @ApiOperation({ summary: 'Signs up a user' })
  @ApiCreatedResponse({ description: 'User signed up successfully' })
  @ApiBadRequestResponse({ description: 'Email is already in use' })
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Logs in a user' })
  @ApiOkResponse({ description: 'User logged in successfully' })
  @ApiBadRequestResponse({ description: 'Invalid email or password' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
