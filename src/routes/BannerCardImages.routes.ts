import {Router} from "express"
import { deleteBannerCardImages, getBannerCardImages, postBannerCardImages } from "../controller/BannerCardImages.controller"
import { Upload } from "../utils/Upload"

const router =Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     BannerCardImagesDto:
 *         type: object
 *         properties:
 *           image:
 *             type: file
 *             description: this is for name of the banner
 */

/**
 * @swagger
 * tags:
 *   name: BannerCardImages Record
 *   description: Record of all banner CRUD
 *
 */

/**
 * @swagger
 * /bannercardimages/:
 *  get:
 *     summary: Use to request all banner Record
 *     tags: [BannerCardImages Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new banner
 *     tags: [BannerCardImages Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/BannerCardImagesDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 *
  * /bannercardimages/{id}:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [BannerCardImages Record]
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
 *  patch:
 *     summary: used to update banner
 *     tags: [BannerCardImages Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: this if or params with name id
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/BannerCardImagesDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [BannerCardImages Record]
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

router.route("/").get(getBannerCardImages).post(Upload.single("image"),postBannerCardImages)

router.route("/:id").delete(deleteBannerCardImages)


export default router
