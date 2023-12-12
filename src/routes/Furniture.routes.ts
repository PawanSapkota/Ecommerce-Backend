import {Router } from "express"
import { Upload } from "../utils/Upload";
import { deleteFurniture, getFurniture, postFurniture } from "../controller/Furniture.controller";

const router=Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     FurnitureDto:
 *         type: object                
 *         properties:
 *           name:
 *             type: string
 *           description:
 *             type: string
 *           price:
 *             type: string
 *           image:
 *             type: array
 *             items: 
 *               type: file
 *             description: this is for name of the PersonalCare
 *
 */

/**
 * @swagger
 * tags:
 *   name: Furniture Record
 *   description: Record of all  CRUD
 *
 */

/**
 * @swagger
 * /furniture/:
 *  get:
 *     summary: Use to request all Furniture Record
 *     tags: [Furniture Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 *  post:
 *     summary: use to post Furniture Record
 *     tags: [Furniture Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:                            
 *             $ref: '#/components/schemas/FurnitureDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 * /furniture/{id}:
 *  patch:
 *     summary: use to update Furniture
 *     tags: [Furniture Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: this if or params with name id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FurnitureDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to delete Furniture Record
 *     tags: [Furniture Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: this is for id
 *     responses:
 *        '200':
 *          description: A sucessfull response
 */


router.route("/").post(Upload.array("image"),postFurniture).get(getFurniture);

router.route("/:id").delete(deleteFurniture)




export default router;