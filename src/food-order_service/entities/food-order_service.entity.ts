import { FoodInventory } from "src/food_inventory/entities/food_inventory.entity";
import { Service } from "src/services/entities/service.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("food")
export class FoodOrderService {

@PrimaryGeneratedColumn()
id:number

@Column()
foodservice_bill:number

@OneToMany(()=>Service,(Service)=>Service.foodService,{cascade:true,onDelete:"CASCADE"})
service:Service[]

@ManyToOne(()=>FoodInventory,(FoodInventory)=>FoodInventory.food_order)
@JoinColumn({
    name:"foodinventory_id"
})
inventory:FoodInventory

}

 
 
 