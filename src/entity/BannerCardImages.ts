import { Column, CreateDateColumn,Entity,PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";

@Entity()
export class BannerCardImages {
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    image:string

    


}