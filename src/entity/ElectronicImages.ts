import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ElectronicsImages{
    @PrimaryColumn("uuid")
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