import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './modules/User/user.module'
import { OrderModule } from './modules/Order/order.module'
import { AuthModule } from './modules/Auth/auth.module'

@Module({
  imports: [UserModule, OrderModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
