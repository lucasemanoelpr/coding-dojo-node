import express, { Request, Response } from 'express'

const app = express()

app.get('/', (_: Request, res: Response) => {
	return res.send('Hello World')
})

export default app