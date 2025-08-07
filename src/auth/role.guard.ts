import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Role_key } from './roles.decorator';
import { Role } from './role.enum';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
     private readonly configService: ConfigService
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(Role_key, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      console.log("No Roles Required");
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
      let decoded=request.user; 

      console.log("Decoded Token:", decoded);
      console.log(decoded.userId);

      if (!requiredRoles.includes(decoded.role)) {
        console.log(`User role (${decoded.role}) does not match required roles:`, requiredRoles);
        throw new ForbiddenException('You do not have permission (Roles)');
      }

      return true;
    } catch (err) {
      console.error('JWT Verification Failed:', err.message);
      throw new ForbiddenException('Invalid Token');
    }
  }
}
