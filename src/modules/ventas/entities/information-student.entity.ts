import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { StudentEntity } from '/.student.entity';
import { CatalogueEntity } from '/.catalogue.entity';

@Entity('information_students')
export class InformationStudentEntity {

  @OneToOne(() => StudentEntity)
  student: StudentEntity;

  @ManyToOne(() => CatalogueEntity, { nullable: true })
  @JoinColumn({ name: 'is_subject_repeat' })
  isSubjectRepeat: CatalogueEntity;

  @Column('varchar', {
    name: 'address',
    length: 1000,
    comment: 'La direccion donde reside el estudiante',
  })
  address: string;

  @Column('varchar', {
    name: 'cell_phone',
    length: 10,
    comment: 'Numero de celular del estudiante',
  })
  cellPhone: string;

  @Column('varchar', {
    name: 'id_number',
    length: 10,
    comment: 'Numero de cédula',
  })
  codanisNumber: string;


}
