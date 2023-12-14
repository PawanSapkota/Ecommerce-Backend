import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class GamingAccessories{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({nullable:true})
    name:string
    
    @Column({nullable:true})
    description:string

    @Column({nullable:true})
    price:string

    @Column("simple-array")
    image:string[]

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}