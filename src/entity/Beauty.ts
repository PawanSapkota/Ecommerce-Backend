import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Beauty{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    name:string

    @Column()
    description:string

    @Column()
    price:string

    @Column()
    image:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}