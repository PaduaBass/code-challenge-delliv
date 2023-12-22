import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { PrismaService } from '../../database/prisma.service'
import { HashService } from '../../utils/hash.service'
import * as request from 'supertest'
import { INestApplication } from '@nestjs/common'

describe('user controller', () => {
  let app: INestApplication

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaService, HashService],
    }).compile()

    app = module.createNestApplication()

    await app.init()
  })

  const payloadWithOutEmail = {
    name: 'admin',
    password: '12345678',
  }

  it('should return error when email', () => {
    return request(app.getHttpServer())
      .post('/user')
      .send(payloadWithOutEmail)
      .expect(400)
  })

  const payloadWithOutName = {
    email: 'admin@delliv.com',
    password: '12345678',
  }

  it('should return error when name', () => {
    return request(app.getHttpServer())
      .post('/user')
      .send(payloadWithOutName)
      .expect(400)
  })

  const payloadWithOutPassword = {
    email: 'admin@delliv.com',
    name: 'admin',
  }

  it('should return error when password', () => {
    return request(app.getHttpServer())
      .post('/user')
      .send(payloadWithOutPassword)
      .expect(400)
  })

  const payload = {
    email: 'admin@delliv.com',
    name: 'admin',
    password: '12345678',
  }

  it('should return user', () => {
    return request(app.getHttpServer()).post('/user').send(payload).expect(201)
  })

  it('should return error when user already exists', () => {
    return request(app.getHttpServer()).post('/user').send(payload).expect(400)
  })
})
