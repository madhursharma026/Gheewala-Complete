import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, ConflictException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwt: JwtService,
  ) { }

  async signup(authDto: AuthDto): Promise<User> {
    const userFound = await this.userRepository.findOne({
      where: { email: authDto.email },
    });
    if (userFound)
      throw new ConflictException(`User with email: ${authDto.email} exists!`);
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(authDto.password, salt);
    authDto.password = hash;
    return await this.userRepository.save(authDto);
  }

  async validateUser(email: string, password: string): Promise<any> {
    const foundUser = await this.userRepository.findOne({ where: { email } });
    if (foundUser) {
      if (await bcrypt.compare(password, foundUser.password)) {
        const { password, ...result } = foundUser;
        return result;
      }

      return null;
    }
    return null;
  }
  async login(user: any) {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwt.sign(payload),
      email: user.email,
      userId: user.id,
      address: user.address,
      name: user.name,
      role: user.role,
    };
  }

  async updatedProfile(id: number, name: string, address: string) {
    return this.userRepository.update(id, { name, address })
  }

  async updatedPassword(id: number, password: string) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    password = hash;
    return this.userRepository.update(id, { password })
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findAllUsers(): Promise<User[]> {
    return this.userRepository.find({where: {role: 'user'}});
  }

  findAllAdmin(): Promise<User[]> {
    return this.userRepository.find({where: {role: 'admin'}});
  }
  
  findSingleUserDetails(userId: number) {
    if (!userId) {
      return null;
    }
    return this.userRepository.find({
      where: { id: userId }
    });
  }

  async changeRole(id: number, role: string) {
    return this.userRepository.update(id, { role })
  }
}

