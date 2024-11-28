/**
 * @swagger
 *  components:
 *   schemas:
 *      200:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: number
 *                  example: 200
 *      201:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: number
 *                  example: 201
 *      400:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: number
 *                  example: 400
 *              error:
 *                  type: string
 *                  description: "bad request"
 *      401:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: number
 *                  example: 401
 *              error:
 *                  type: string
 *                  description: "authorization error"
 *      404:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: number
 *                  example: 404
 *              error:
 *                  type: string
 *                  description: "not found"
 *      500:
 *          type: object
 *          properties:
 *              statusCode:
 *                  type: number
 *                  example: 500
 *              error:
 *                  type: string
 *                  description: "internal server error"
 */
