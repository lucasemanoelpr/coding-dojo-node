import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany, BaseEntity, JoinColumn} from "typeorm";
import { Market } from './market'
import { Person } from './person'

@Entity('products')
export class Product extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToOne(() => Person, person => person.products)
  @JoinColumn({ name: 'id_person', referencedColumnName: 'id' })
  person: Person

  @OneToMany(() => Market, market => market.product)
  market: Market[]
}