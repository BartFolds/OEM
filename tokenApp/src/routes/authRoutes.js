import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import primsa from '../prismaClient.js'

const router = express.Router()

//register a new user endpoint /auth/register
router.post('/register', async (req, res) => {   
    
    
    const { username, password } = req.body
    console.log(username, password)
    res.sendStatus(201)

    //we get the email, and lookup the password associated w/ email in database
    //but we recieve it and see it is encrypted.
    //so what we do is oneway encrypt the password the user just entered
    //compare the 2 encrypted passwords

    //encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 8)

    //save the new user and hashed pw to db
    try {
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        })
        
        // now that we have a user, add the first todo for them
        const defaultTodo = `Hello! :) Add your first todo!`
        await prisma.todo.create({
            data: {
                task: defaultTodo,
                userId: user.id
            }
        })
        
        //create a token
        const token = jwt.sign({id: user.id }, 
            process.env.JWT_SECRET, {expiresIn: '24hr'})
        res.json({ token })

    } catch(err) {
        console.log(err.message)
        res.sendStatus(503)
    }
    

} )

router.post('login', async (req, res)=>{
    //we get the emial, look up the password associated w/ the email in the database
    //we recieve it encrypted, so we 1 way encrypt the password entered.
    
     const { username, password } = req.body

    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })

        // if we cannot find a user associated with that username, return out from the function
        if (!user) { return res.status(404).send({ message: "User not found" }) }

        const passwordIsValid = bcrypt.compareSync(password, user.password)
        // if the password does not match, return out of the function
        if (!passwordIsValid) { return res.status(401).send({ message: "Invalid password" }) }
        console.log(user)

        // then we have a successful authentication
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }

} )

export default router