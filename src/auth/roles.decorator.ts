import { SetMetadata } from "@nestjs/common";
import { Role } from "./role.enum";





export const Role_key='roles';
export const Roles=(...roles:Role[])=>SetMetadata(Role_key,roles);


console.log("hello from umair");


