import { Column, CreateDateColumn, Decimal128, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class PersonalCare{
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