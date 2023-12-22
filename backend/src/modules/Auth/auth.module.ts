import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { PrismaService } from 'src/database/prisma.service'
import { HashService } from 'src/utils/hash.service'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10min' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, HashService],
})
export class AuthModule {}
