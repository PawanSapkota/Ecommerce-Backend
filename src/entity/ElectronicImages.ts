import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ElectronicsImages{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({nullable:true})
    name:string
    
    @Column({nullable:true})
    description:string

    @Column("simple-array")
    image:string[]

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date
}