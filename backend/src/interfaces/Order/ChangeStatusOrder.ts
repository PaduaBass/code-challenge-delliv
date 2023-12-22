import { IsNotEmpty } from 'class-validator'

export class ChangeStatusOrder {
  @IsNotEmpty()
  status: string
}
