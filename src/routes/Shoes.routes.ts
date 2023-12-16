import {Router } from "express"
import { Upload } from "../utils/Upload";
import { deleteShoes, getShoes, postShoes } from "../controller/Shoes.controller";

const router=Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     ShoesDto:
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
 *             description: this is for name of the Shoes
 *
 */

/**
 * @swagger
 * tags:
 *   name: Shoes Record
 *   description: Record of all  CRUD
 *
 */

/**
 * @swagger
 * /shoes/:
 *  get:
 *     summary: Use to request all Shoes Record
 *     tags: [Shoes Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 *  post:
 *     summary: use to post Shoes Record
 *     tags: [Shoes Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:                            
 *             $ref: '#/components/schemas/ShoesDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 * /shoes/{id}:
 *  patch:
 *     summary: use to update Shoes
 *     tags: [Shoes Record]
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
 *             $ref: '#/components/schemas/ShoesDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to delete Shoes Record
 *     tags: [Shoes Record]
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

router.route("/").post(Upload.array("image",20),postShoes).get(getShoes)

router.route("/:id").delete(deleteShoes)





export default router;