import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Market } from "./market";

@Entity('market_types')
export class MarketType extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    description: string

  @OneToMany(() => Market, market => market.market_type)
    market: Market[]
}
