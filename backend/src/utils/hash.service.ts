import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
@Injectable()
export class HashService {
  async generateHash(password: string) {
    const hash = await bcrypt.hash(password, 8)
    return hash
  }

  async compareHash(password: string, password_hash: string) {
    const isMatch = await bcrypt.compare(password, password_hash)
    return isMatch
  }
}
