import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { PrismaService } from '../../database/prisma.service'
import { HashService } from '../../utils/hash.service'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants'
import * as request from 'supertest'

describe('Auth controller', () => {
  let app: INestApplication

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '10min' },
        }),
      ],
      controllers: [AuthController],
      providers: [AuthService, PrismaService, HashService],
    }).compile()
    app = module.createNestApplication()
    await app.init()
  })

  const payload = { email: 'admin@delliv.com', password: '12345678' }
  it('should return success login', () => {
    return request(app.getHttpServer()).post('/auth').send(payload).expect(201)
  })

  const payloadError = { email: 'adm@delliv.com', password: '12345678' }

  it('should return error in login', () => {
    return request(app.getHttpServer())
      .post('/auth')
      .send(payloadError)
      .expect(400)
  })
})
