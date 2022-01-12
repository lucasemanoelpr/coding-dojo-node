import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Product } from './product.entity'

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
}