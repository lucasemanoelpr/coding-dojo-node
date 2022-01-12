import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { MarketType } from "./marketType";
import { Person } from "./person";
import { Product } from "./product";

@Entity()
export class Market {

  @PrimaryGeneratedColumn()
    id: string;

  @ManyToOne(() => MarketType, marketType => marketType.market)
  @JoinColumn({name: 'id_type', referencedColumnName: 'id'})
    market_type: string;

  @ManyToOne(() => Person, person => person.market)
  @JoinColumn({name: 'id_person', referencedColumnName: 'id'})
    person: string;

  @ManyToOne(() => Product, product => product.market)
  @JoinColumn({name: 'id_product', referencedColumnName: 'id'})
    product: string;

  @Column()
    price: number;

  @Column()
    quantity: number;
}
