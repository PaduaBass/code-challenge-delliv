import { IsEmail, IsNotEmpty, Length } from 'class-validator'

export class CreateUserBodyDTO {
  id: string
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @Length(8)
  password: string

  password_hash: string
}
