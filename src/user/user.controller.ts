import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse, ApiExtraModels } from '@nestjs/swagger';
import { UserProfileDto } from './dto/user-profile.dto'; // Import the DTO

@ApiTags('user')
@ApiBearerAuth()
@ApiExtraModels(UserProfileDto)
@Controller('user')
export class UserController {
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiOkResponse({ 
    description: 'Returns the profile of the authenticated user', 
    type: UserProfileDto,
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized, invalid or missing JWT token' })
  getProfile(@Request() req): UserProfileDto {
    return req.user;
  }
}
