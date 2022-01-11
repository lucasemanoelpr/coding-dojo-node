import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from "typeorm";
import { Person } from './person.entity'

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Person, person => person.products)
    id_person: number;
}