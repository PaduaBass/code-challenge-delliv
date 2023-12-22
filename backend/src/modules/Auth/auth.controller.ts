import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthLoginBody } from '../../interfaces/Auth/AuthLogin'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('')
  async login(@Body() body: AuthLoginBody) {
    return await this.authService.auth(body)
  }
}
