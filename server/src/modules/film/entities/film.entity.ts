import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column({ type: 'longtext', nullable: true })
  overview: string;

  @Column()
  year: number;

  @Column({ length: 250 })
  artwork: string;

  @Column({ length: 10, nullable: true })
  colour: string;

  @Column({ nullable: true })
  idMovieDB: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
