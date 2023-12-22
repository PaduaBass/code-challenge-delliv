import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { PrismaService } from '../../database/prisma.service'
import { UserService } from './user.service'
import { HashService } from 'src/utils/hash.service'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService, UserService, HashService],
})
export class UserModule {}
