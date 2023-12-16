import {Router } from "express"
import { Upload } from "../utils/Upload";
import { deleteBeauty, getBeauty, postBeauty } from "../controller/Beauty.controller";

const router=Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     BeautyDto:
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
 *             description: this is for name of the Beauty
 *
 */

/**
 * @swagger
 * tags:
 *   name: Beauty Record
 *   description: Record of all  CRUD
 *
 */

/**
 * @swagger
 * /beauty/:
 *  get:
 *     summary: Use to request all Beauty Record
 *     tags: [Beauty Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 *  post:
 *     summary: use to post Beauty Record
 *     tags: [Beauty Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:                            
 *             $ref: '#/components/schemas/BeautyDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 * /beauty/{id}:
 *  patch:
 *     summary: use to update Beauty
 *     tags: [Beauty Record]
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
 *             $ref: '#/components/schemas/BeautyDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to delete Beauty Record
 *     tags: [Beauty Record]
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

router.route("/").post(Upload.array("image",20),postBeauty).get(getBeauty)

router.route("/:id").delete(deleteBeauty)





export default router;