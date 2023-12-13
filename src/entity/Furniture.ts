import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Furniture {
    @PrimaryGeneratedColumn("uuid")
    id:string

   @Column()
   name:string

   @Column()
   description:string

   @Column()
   price:string

   @Column("simple-array")
   image:string[]

   @CreateDateColumn()
   createdAt:Date

   @UpdateDateColumn()
   updatedAt:Date

}