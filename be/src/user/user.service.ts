import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './entities/user.repository';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  @Inject(UserRepository)
  private readonly userRepository: UserRepository;

  constructor() {}

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.create(
      createUserDto.username,
      await hash(createUserDto.password, 10),
    );
  }

  async findAll() {
    return await this.userRepository.readAll();
  }

  async findOne(id: number) {
    return await this.userRepository.readById(id);
  }

  async findOneUnsafe(id: string) {
    return await this.userRepository.readByIdUnsafe(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = new User(id, updateUserDto.username);
    await this.userRepository.update(user);
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
