import { AppDataSource } from "./data-source";
import * as express from "express";
import * as multer from "multer";
import * as bodyParser from "body-parser";
import * as swaggerJsDoc from "swagger-jsdoc";
import * as cors from "cors";
import * as swaggerUiExpress from "swagger-ui-express";
import { port } from "./config";
import * as morgan from "morgan";
import BannerCardImagesRoute  from "./routes/BannerCardImages.routes";
import  ElectronicsImagesRoute  from "./routes/ElectronicImages.routes";
import PersonalCareRoute from "./routes/PersonalCare.routes"
import FurnitureRoute from "./routes/Furniture.routes"
import BeautyRoute from "./routes/Beauty.routes"
import KitchenRoute from "./routes/Kitchen.routes"
import FashionRoute from "./routes/Fashion.routes"
import { Request, Response, NextFunction } from "express";
import AppError from "./utils/AppError";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors ({ credential: true, origin: "http://localhost:3000" }));
    app.use("/public", express.static("src/public"));
    app.use(morgan("dev"));

    //swagger setup
    const swaggerOptions = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Ecommerce Backend",
          version: "15",
          description: "Website",
          contact: {
            name: "Pawan Sapkota",
          },
          servers: [3000],
        },
      },
      apis: [
        "./routes/*.ts",
        "./Routes/*.ts",
        "./**/*.ts",
        "index.ts",
        `${__dirname}/routes/*.routes.ts`,
        `${__dirname}/Routes/*.routes.ts`,
      ],
    };

    const swaggerDocs = swaggerJsDoc(swaggerOptions);

    app.use(
      "/doc",
      swaggerUiExpress.serve,
      swaggerUiExpress.setup(swaggerDocs)
    );

    // routes here
    app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        message: "working",
      });
    });

    app.use("/bannercardimages",BannerCardImagesRoute)
    app.use("/electronicsimages",ElectronicsImagesRoute)
    app.use("/personalcare",PersonalCareRoute)
    app.use("/furniture",FurnitureRoute)
    app.use("/beauty",BeautyRoute)
    // app.use("/kitchen",KitchenRoute)
    app.use("/fashion",FashionRoute)

    // unhandled routes
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    // GLOBAL ERROR HANDLER
    app.use(
      (error: AppError, req: Request, res: Response, next: NextFunction) => {
        error.status = error.status || "error";
        error.statusCode = error.statusCode || 500;

        res.status(error.statusCode).json({
          status: error.status,
          message: error.message,
        });
      }
    );

    app.listen(port, () => {
      console.log(`Sever is running at port ${port}`);
    });
    console.log("Port", port);
  })
  .catch((error) => console.log(error));
