import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { LoggingMiddleware } from './middlewares/logging.middleware';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  providers: [PrismaService],
  controllers: [UserController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
