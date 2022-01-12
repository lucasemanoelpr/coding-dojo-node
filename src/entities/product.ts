import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany} from "typeorm";
import { Market } from "./market";
import { Person } from './person'

@Entity()
export class Product {

  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    name: string

  @ManyToOne(() => Person, person => person.products)
    person: string

  @OneToMany(() => Market, market => market.product)
		market: Market[]
}