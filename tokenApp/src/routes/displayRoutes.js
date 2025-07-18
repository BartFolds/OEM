import express from 'express'
import prisma from '../prismaClient.js'

const router = express.Router()

// Get all tokens of a type for logged-in user
router.get('/', async (req, res) => {
    const tokens = await prisma.token.findMany({
        where: {
            userId: req.userId,
            type:   req.type
        }
    })
    res.json(tokens)
})

// Add a token and increment token count of type
router.post('/', async (req, res) => {
    const { newToken } = req.body
    
    const nToken = await prisma.$transaction([
        prisma.token.create({
        data: {
            newToken,
            userId: req.userId
            }
        })
    ])
    
    


    
    res.json(nToken)
})

// Delete a token
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const userId = req.userId
    await prisma.todo.delete({
        where: {
            id: parseInt(id),
            userId
        }
    })
    
    res.send({ message: "Token deleted" })
})

export default router