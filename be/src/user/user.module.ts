import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './entities/user.repository';
import { UserDb } from './db/user.db';

@Module({
  controllers: [UserController],
  providers: [UserService, { provide: UserRepository, useClass: UserDb }],
})
export class UserModule {}
