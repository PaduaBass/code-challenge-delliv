import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import { AuthLoginBody } from '../../interfaces/Auth/AuthLogin'
import { HashService } from '../../utils/hash.service'
import { JwtService } from '@nestjs/jwt'
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private hashService: HashService,
    private jwtService: JwtService,
  ) {}

  async auth(body: AuthLoginBody) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: body.email },
      })
      if (!user) {
        throw new HttpException('Email not found', HttpStatus.NOT_FOUND)
      }
      const isMatch = await this.hashService.compareHash(
        body.password,
        user.password_hash,
      )
      if (!isMatch) {
        throw new HttpException('Password invalid', HttpStatus.BAD_REQUEST)
      }
      const payload = {
        name: user.name,
        email: user.email,
      }
      return {
        name: user.name,
        email: user.name,
        token: await this.jwtService.signAsync(payload),
      }
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }
  }
}
