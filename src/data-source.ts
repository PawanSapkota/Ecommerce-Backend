import "reflect-metadata"
import { DataSource } from "typeorm"
import { BannerCardImages } from "./entity/BannerCardImages"
import { ElectronicsImages } from "./entity/ElectronicImages"
import { PersonalCare } from "./entity/PersonalCare"
import { Furniture } from "./entity/Furniture"
import { Beauty } from "./entity/Beauty"
import { Fashion } from "./entity/Fashion"
import { Kitchen } from "./entity/Kitchen"
import { Book } from "./entity/Book"
import { Baby } from "./entity/Baby"
import { GamingAccessories } from "./entity/GamingAccessories"
import { Shoes } from "./entity/Shoes"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "987654321",
    database: "ecommerce",
    synchronize: true,
    logging: false,
    entities: [BannerCardImages,ElectronicsImages,PersonalCare,Furniture,Beauty,Fashion,Kitchen,Book,Baby,GamingAccessories,Shoes],
    migrations: [],
    subscribers: [],
})

