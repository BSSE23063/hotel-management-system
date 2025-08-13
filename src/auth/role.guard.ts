import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Role_key } from './roles.decorator';
import { Role } from './role.enum';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { blacklist_tkn } from './blacklist_tkn.entity';
import { Repository } from 'typeorm';


@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    @InjectRepository(blacklist_tkn)
    private readonly tknrepository: Repository<blacklist_tkn>,
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(Role_key, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      console.log('No Roles Required');
      return true;
    }

    const request = context.switchToHttp().getRequest();
    // const authHeader = request.headers.authorization;

    // if (!authHeader) {
    //   console.log("No Authorization Header");
    //   throw new ForbiddenException('No token provided');
    // }

    // const [bearer, token] = authHeader.split(' ');

    // if (bearer !== 'Bearer' || !token) {
    //   console.log("Malformed Authorization Header");
    //   throw new ForbiddenException('Invalid token format');
    // }

    try {
      // const decoded = this.jwtService.verify(token,{secret:this.configService.get('JWT_SECRET')});
      const authHeader = request.headers.authorization;
      
      if (authHeader) {
        const [bearer, token] = authHeader.split(' ');
        
        const verify = this.tknrepository.findOne(token);
        if (verify != null) {
          throw new UnauthorizedException('Token is expired');
        }
      }
      let decoded = request.user;

      console.log('Decoded Token:', decoded);

      if (!requiredRoles.includes(decoded.role)) {
        console.log(
          `User role (${decoded.role}) does not match required roles:`,
          requiredRoles,
        );
        throw new ForbiddenException('You do not have permission (Roles)');
      }

      return true;
    } catch (err) {
      console.error('JWT Verification Failed:', err.message);
      throw new ForbiddenException('Invalid Token');
    }
  }
}
