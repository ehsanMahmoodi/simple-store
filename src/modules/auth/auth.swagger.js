/**
 * @swagger
 *  components:
 *   schemas:
 *    registerCMP:
 *     type: object
 *     required:
 *       -  fullname
 *       -  email
 *       -  password
 *     properties:
 *      fullname:
 *       type: string
 *      email:
 *       type: string
 *      password:
 *       type: string
 */
/**
 * @swagger
 *  /auth/register:
 *   post:
 *    summary: register new user
 *    tags:
 *     - Auth
 *    requestBody:
 *     content:
 *      application/x-www-form-urlencoded:
 *       schema:
 *        $ref: '#/components/schemas/registerCMP'
 *    responses:
 *     200:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/200'
 *     400:
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/400'
 */