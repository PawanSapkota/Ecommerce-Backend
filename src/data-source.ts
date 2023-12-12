import "reflect-metadata"
import { DataSource } from "typeorm"
import { BannerCardImages } from "./entity/BannerCardImages"
import { ElectronicsImages } from "./entity/ElectronicImages"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "987654321",
    database: "ecommerce",
    synchronize: true,
    logging: false,
    entities: [BannerCardImages,ElectronicsImages],
    migrations: [],
    subscribers: [],
})

