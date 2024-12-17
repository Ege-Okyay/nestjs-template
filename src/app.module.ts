import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { LoggingMiddleware } from './middlewares/logging.middleware';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
