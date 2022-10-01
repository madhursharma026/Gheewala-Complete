import { User } from './user.entity';
import { AuthDto } from './dtos/auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dtos/update-auth-dto';
import { Controller, Request, Post, UseGuards, Body, Patch, Param, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private usersService: AuthService) { }

  @Post('signup')
  async signup(@Body() authDto: AuthDto): Promise<User> {
    return this.usersService.signup(authDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.usersService.login(req.user);
  }

  @Patch('updated_profile/:id')
  async updatedProfile(@Param('id') id: string, @Body() body: UpdateAuthDto) {
    const updatedProfile = await this.usersService.updatedProfile(+id, body.name, body.address);
    return updatedProfile;
  }

  @Patch('updated_password/:id')
  async updatedPassword(@Param('id') id: string, @Body() body: UpdateAuthDto) {
    const updatedPassword = await this.usersService.updatedPassword(+id, body.password);
    return updatedPassword;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/allUsers')
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get('/allAdmin')
  findAllAdmin() {
    return this.usersService.findAllAdmin();
  }

  @Get("/user_profile/:userId")
  findSingleUserDetails(@Param('userId') userId: number) {
    return this.usersService.findSingleUserDetails(+userId);
  }

  @Patch('change_user_role/:id')
  async changeRole(@Param('id') id: string, @Body() body: UpdateAuthDto) {
    const updatedRole = await this.usersService.changeRole(+id, body.role);
    return updatedRole;
  }
}

