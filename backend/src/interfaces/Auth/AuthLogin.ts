import { IsNotEmpty, Length } from 'class-validator'

export class AuthLoginBody {
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  @Length(8)
  password: string
}
