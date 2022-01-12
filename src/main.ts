import { Product } from './entities/product';
import { Person } from './entities/person'
import express, { Request, Response } from 'express'
import './database'

const app = express()

app.get('/cadastrar-usuario', async (_: Request, res: Response) => {

  const newPerson = new Person()
  newPerson.name = 'Lucas'
  newPerson.cash = 1500
  await newPerson.save()

	return res.send(newPerson)
})

app.get('/cadastrar-produto', async (_: Request, res: Response) => {

  const person = await Person.findOne('a2e311e5-33f8-4c6f-bc2f-d0a2936f6dc1')

  const newProduct = new Product()
  newProduct.name = 'Peixe'
  newProduct.person = person
  await newProduct.save()  

	return res.send(newProduct)
})

export default app