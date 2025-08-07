import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    console.log('AuthController Constructor Called');
  }

  @Post('login')
  async login(@Body() body: { name: string; id: number }) {
    console.log('Login Endpoint Hit:', body);
    const user = await this.authService.validateUser(body.name, body.id);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    let tkn =await this.authService.login(user);
    console.log(tkn);
    let obj = {
      token: tkn,
      ID: user.id,
      role: user.role,
    };
    
    return obj;
  }
}
