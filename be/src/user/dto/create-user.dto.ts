import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: '田中太郎' })
  username: string;

  @ApiProperty({ example: 'password' })
  password: string;
}
