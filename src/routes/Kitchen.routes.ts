import {Router } from "express"
import { Upload } from "../utils/Upload";
import { deleteKitchen, getKitchen, postKitchen } from "../controller/Kitchen.controller";

const router=Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     KitchenDto:
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
 *             description: this is for name of the Kitchen
 *
 */

/**
 * @swagger
 * tags:
 *   name: Kitchen Record
 *   description: Record of all  CRUD
 *
 */

/**
 * @swagger
 * /kitchen/:
 *  get:
 *     summary: Use to request all Kitchen Record
 *     tags: [Kitchen Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 *  post:
 *     summary: use to post Kitchen Record
 *     tags: [Kitchen Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:                            
 *             $ref: '#/components/schemas/KitchenDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 * /kitchen/{id}:
 *  patch:
 *     summary: use to update Kitchen
 *     tags: [Kitchen Record]
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
 *             $ref: '#/components/schemas/KitchenDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to delete Kitchen Record
 *     tags: [Kitchen Record]
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

router.route("/").post(Upload.array("image"),postKitchen).get(getKitchen)

router.route("/:id").delete(deleteKitchen)



export default router;