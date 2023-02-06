import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CareerEntity } from './career.entity';

@Entity('catalogues')
export class CatalogueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    name: 'name',
    length: 255,
    default: 'SN',
    comment: 'Nombre del producto',
  })
  name: string;

  @OneToMany(() => CareerEntity, (career) => career.modality)
  modalities: CareerEntity[];

  @OneToMany(() => CareerEntity, (career) => career.state)
  states: CareerEntity[];

  @OneToMany(() => CareerEntity, (career) => career.type)
  types: CareerEntity[];

}
