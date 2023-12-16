import {Router } from "express"
import { Upload } from "../utils/Upload";

import { deleteElectronicsImages, getElectronicsImages, postElectronicsImages } from "../controller/ElectronicImages.controller";


const router=Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     ElectronicsImagesDto:
 *         type: object                
 *         properties:
 *           name:
 *             type: string
 *           description:
 *             type: string
 *           image:
 *             type: array
 *             items: 
 *               type: file
 *             description: this is for name of the ElectronicsImages
 *
 */

/**
 * @swagger
 * tags:
 *   name: ElectronicsImages Record
 *   description: Record of all  CRUD
 *
 */

/**
 * @swagger
 * /electronicsimages/:
 *  get:
 *     summary: Use to request all ElectronicsImages Record
 *     tags: [ElectronicsImages Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 *  post:
 *     summary: use to update ElectronicsImages Record
 *     tags: [ElectronicsImages Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:                            
 *             $ref: '#/components/schemas/ElectronicsImagesDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 * /electronicsimages/{id}:
 *  patch:
 *     summary: use to update ElectronicsImages
 *     tags: [ElectronicsImages Record]
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
 *             $ref: '#/components/schemas/ElectronicsImagesDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all ElectronicsImages Record
 *     tags: [ElectronicsImages Record]
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

router.route("/").get(getElectronicsImages).post(Upload.array("image",20),postElectronicsImages)

router.route("/:id").delete(deleteElectronicsImages)

export default router;