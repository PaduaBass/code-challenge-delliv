import { INestApplication } from '@nestjs/common'
import { OrderController } from './order.controller'
import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from '../../database/prisma.service'
import * as request from 'supertest'
import { OrderService } from './order.service'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { jwtConstants } from '../Auth/constants'
import { AuthController } from '../Auth/auth.controller'
import { AuthService } from '../Auth/auth.service'
import { HashService } from '../../utils/hash.service'

describe('order controller', () => {
  let app: INestApplication
  let token = null
  const payload = { email: 'admin@delliv.com', password: '12345678' }
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

    await request(app.getHttpServer())
      .post('/auth')
      .send(payload)
      .then((res) => {
        token = res.body.token
      })
      .catch()

    app.close()
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [PrismaService, OrderService, JwtService],
    }).compile()
    app = module.createNestApplication()
    await app.init()
  })

  it('shold return error when token not send', () => {
    return request(app.getHttpServer()).get('/order').expect(401)
  })

  it('shold return list of orders', () => {
    return request(app.getHttpServer())
      .get('/order')
      .set({ authorization: `Bearer ${token}` })
      .expect(200)
  })
})
