import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.model";

@Entity('products',{schema:'ventasbdd'})

export class ProductEntity{
    @PrimaryGeneratedColumn('identity')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;
    @UpdateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'create_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date; 
    @ManyToOne(() => CategoryEntity, (category) => category.product)
    @JoinColumn({name:'product_id'})
    category: CategoryEntity;

    @Column('varchar',{
        name:'title',
        unique:true,
        comment: 'nombre del producto',
    })
    title:string;

    @Column('number',{
        name:'price',
        comment:'precio del  producto',
    })
    
    price:number;
    
    @Column('varchar',{
        name:'description',
        comment:'descripcion del producto'
    })
    description:string;

}


