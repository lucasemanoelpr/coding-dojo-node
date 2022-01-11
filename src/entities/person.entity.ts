import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Product } from './product.entity';

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cash: number;

    @OneToMany(() => Product, product => product.id_person)
    products: Product[];
}