import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import Orphanage from './Orphanage'

@Entity('images')
class Image {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  path: string

  @Column()
  orphanage_id: string

  @ManyToOne(() => Orphanage)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
}

export default Image
