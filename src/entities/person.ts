import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm'
import { Market } from './market'
import { Product } from './product'

@Entity('persons')
export class Person extends BaseEntity {
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