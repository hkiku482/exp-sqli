import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: 1 })
  readonly id: number;

  @ApiProperty({ example: '田中太郎' })
  readonly username: string;

  constructor(id: number, username: string) {
    this.id = id;
    this.username = username;
  }
}
