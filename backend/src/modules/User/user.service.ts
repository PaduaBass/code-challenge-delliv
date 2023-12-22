/* eslint-disable camelcase */
import {
  HttpException,
  HttpStatus,
  Injectable,
  OnModuleInit,
} from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import { CreateUserBodyDTO } from '../../interfaces/User/CreateUserBody'
import { HashService } from '../../utils/hash.service'
import { userMock } from 'src/mock/user'

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    private prisma: PrismaService,
    private hashService: HashService,
  ) {}

  async onModuleInit() {
    await this.createUserAdmin()
  }

  async create(body: CreateUserBodyDTO) {
    try {
      const password_hash = await this.hashService.generateHash(body.password)
      const user = await this.prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          password_hash,
        },
      })
      return {
        name: user.name,
        email: user.email,
      }
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }
  }

  async list() {
    try {
      const users = await this.prisma.user.findMany()
      return users
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }
  }

  async createUserAdmin() {
    const userAdmin = await this.prisma.user.findUnique({
      where: { email: 'admin@delliv.com' },
    })
    if (!userAdmin) {
      const password_hash = await this.hashService.generateHash('12345678')

      await this.prisma.user.create({
        data: {
          email: userMock.email,
          name: userMock.name,
          password_hash,
        },
      })
    }
  }
}
