import {Router } from "express"
import { Upload } from "../utils/Upload";
import { deleteFashion, getFashion, postFashion } from "../controller/Fashion.controller";

const router=Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     FashionDto:
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
 *             description: this is for name of the Fashion
 *
 */

/**
 * @swagger
 * tags:
 *   name: Fashion Record
 *   description: Record of all  CRUD
 *
 */

/**
 * @swagger
 * /fashion/:
 *  get:
 *     summary: Use to request all Fashion Record
 *     tags: [Fashion Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 *  post:
 *     summary: use to post Fashion Record
 *     tags: [Fashion Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:                            
 *             $ref: '#/components/schemas/FashionDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 * /fashion/{id}:
 *  patch:
 *     summary: use to update Fashion
 *     tags: [Fashion Record]
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
 *             $ref: '#/components/schemas/FashionDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to delete Fashion Record
 *     tags: [Fashion Record]
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

router.route("/").post(Upload.array("image"),postFashion).get(getFashion)    

router.route("/:id").delete(deleteFashion)


export default router;