import {Router } from "express"
import { Upload } from "../utils/Upload";
import { deleteGaming, getGaming, postGaming } from "../controller/GamigAccessories.controller";

const router=Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     GamingAccessoriesDto:
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
 *             description: this is for name of the GamingAccessories
 *
 */

/**
 * @swagger
 * tags:
 *   name: GamingAccessories Record
 *   description: Record of all  CRUD
 *
 */

/**
 * @swagger
 * /gamingaccessories/:
 *  get:
 *     summary: Use to request all GamingAccessories Record
 *     tags: [GamingAccessories Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 *  post:
 *     summary: use to post GamingAccessories Record
 *     tags: [GamingAccessories Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:                            
 *             $ref: '#/components/schemas/GamingAccessoriesDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 * /gamingaccessories/{id}:
 *  patch:
 *     summary: use to update GamingAccessories
 *     tags: [GamingAccessories Record]
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
 *             $ref: '#/components/schemas/GamingAccessoriesDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to delete GamingAccessories Record
 *     tags: [GamingAccessories Record]
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
 * 
 * 
 */

router.route("/").post(Upload.array("image",20),postGaming).get(getGaming)

router.route("/:id").delete(deleteGaming)





export default router;