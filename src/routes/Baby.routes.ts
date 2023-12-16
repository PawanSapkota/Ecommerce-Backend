import {Router } from "express"
import { Upload } from "../utils/Upload";
import { deleteBaby, getBaby, postBaby } from "../controller/Baby.controller";

const router=Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     BabyDto:
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
 *             description: this is for name of the Baby
 *
 */

/**
 * @swagger
 * tags:
 *   name: Baby Record
 *   description: Record of all  CRUD
 *
 */

/**
 * @swagger
 * /baby/:
 *  get:
 *     summary: Use to request all Baby Record
 *     tags: [Baby Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 *  post:
 *     summary: use to post Baby Record
 *     tags: [Baby Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:                            
 *             $ref: '#/components/schemas/BabyDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 * /baby/{id}:
 *  patch:
 *     summary: use to update Baby
 *     tags: [Baby Record]
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
 *             $ref: '#/components/schemas/BabyDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to delete Baby Record
 *     tags: [Baby Record]
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

router.route("/").get(getBaby).post(Upload.array("image",20),postBaby)

router.route("/:id").delete(deleteBaby)




export default router;