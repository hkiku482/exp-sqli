import { ApiProperty } from '@nestjs/swagger';

export class QueryUserDto {
  @ApiProperty({ example: '1' })
  query: string;
}
