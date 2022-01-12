import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Market } from './market'
import { Product } from './product'

@Entity()
export class Person {
	@PrimaryGeneratedColumn('uuid')
		id: string

	@Column()
		name: string

	@Column()
		cash: number

	@OneToMany(() => Product, product => product.person)
		products: Product[]

	@OneToMany(() => Market, market => market.person)
		market: Market[]
}