import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Market } from "./market";

@Entity()
export class MarketType {

  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    description: string

  @OneToMany(() => Market, market => market.market_type)
    market: Market[]
}
