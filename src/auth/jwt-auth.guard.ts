import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


console.log("auth guard");
@Injectable()
export class jwtAuthGuard extends AuthGuard('jwt'){}