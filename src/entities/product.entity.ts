import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from "typeorm";
import { Person } from './person.entity'

@Entity()
export class Product {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToOne(() => Person, person => person.products)
  person: string
}