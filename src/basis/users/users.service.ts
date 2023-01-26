import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    create(createUser: CreateUserDto): Promise<User> {
        const user = this.usersRepository.create(createUser);
        return this.usersRepository.save(user);
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.usersRepository.findOneBy({ id });
    }

    async find(email: string) {
        return this.usersRepository.find({ where: { email } });
    }

    async remove(id: number): Promise<User> {
        const user = await this.findOne(id);

        if(!user) throw new NotFoundException('User not found.');

        return this.usersRepository.remove(user);
    }
}
