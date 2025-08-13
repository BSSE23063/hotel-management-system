import { Controller, Post, Body, UnauthorizedException, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createblacklisttkn } from './tkn.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    console.log('AuthController Constructor Called');
  }

  @Post('login')
  async login(@Body() body: { name: string; password: string }) {
    console.log('Login Endpoint Hit:', body);
    const user = await this.authService.validateUser(body.name, body.password);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    let tkn =await this.authService.login(user);
    console.log(tkn);
    let obj = {
      token: tkn,
      password: user.password,
      role: user.role,
    };
    
    return obj;
  }

  @Post('logout')
  async logout(@Headers('authorization') tokenheader:string){
    console.log("blacklist");
    const [bearer, token] = tokenheader.split(' ');
   return await this.authService.logout(token);
}

}
