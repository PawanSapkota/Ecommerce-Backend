import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ElectronicsImages{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    name:string
    
    @Column()
    description:string

    @Column()
    image:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date
}