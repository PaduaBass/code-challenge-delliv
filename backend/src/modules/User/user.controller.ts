import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserBodyDTO } from '../../interfaces/User/CreateUserBody'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  createUser(@Body() body: CreateUserBodyDTO) {
    return this.userService.create(body)
  }

  @Get('/')
  listUser() {
    return this.userService.list()
  }
}
