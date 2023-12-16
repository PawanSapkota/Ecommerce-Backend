import {Router } from "express"
import { Upload } from "../utils/Upload";
import { deletePersonalCare, getPersonalCare, postPersonalCare } from "../controller/PersonalCare.controller";

const router=Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     PersonalCareDto:
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
 *   name: PersonalCare Record
 *   description: Record of all  CRUD
 *
 */

/**
 * @swagger
 * /personalcare/:
 *  get:
 *     summary: Use to request all PersonalCare Record
 *     tags: [PersonalCare Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 *  post:
 *     summary: use to post PersonalCare Record
 *     tags: [PersonalCare Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:                            
 *             $ref: '#/components/schemas/PersonalCareDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 * /personalcare/{id}:
 *  patch:
 *     summary: use to update PersonalCare
 *     tags: [PersonalCare Record]
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
 *             $ref: '#/components/schemas/PersonalCareDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to delete PersonalCare Record
 *     tags: [PersonalCare Record]
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

router.route("/").post(Upload.array("image",20),postPersonalCare).get(getPersonalCare)

router.route("/:id").delete(deletePersonalCare)



export default router;