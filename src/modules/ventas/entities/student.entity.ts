import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudentEntity } from '/.student.entity';
import { InformationStudentEntity } from '.information-student.entity';

@Entity('students')
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => InformationStudentEntity)
  @JoinColumn({ name: 'student' })
  student: InformationStudentEntity;

  @Column('varchar', { name: 'name', comment: 'Nombre del estudiante' })
  name: string;

  @OneToOne(() => UserEntity, (user) => user.student)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
