import {Router } from "express"
import { Upload } from "../utils/Upload";
import { deleteBook, getBook, postBook } from "../controller/Book.controller";

const router=Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     BookDto:
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
 *             description: this is for name of the Book
 *
 */

/**
 * @swagger
 * tags:
 *   name: Book Record
 *   description: Record of all  CRUD
 *
 */

/**
 * @swagger
 * /book/:
 *  get:
 *     summary: Use to request all Book Record
 *     tags: [Book Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 *  post:
 *     summary: use to post Book Record
 *     tags: [Book Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:                            
 *             $ref: '#/components/schemas/BookDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * 
 * /book/{id}:
 *  patch:
 *     summary: use to update Book
 *     tags: [Book Record]
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
 *             $ref: '#/components/schemas/BookDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to delete Book Record
 *     tags: [Book Record]
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

router.route("/").get(getBook).post(Upload.array("image",20),postBook)

router.route("/:id").delete(deleteBook)


export default router;