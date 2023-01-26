import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'user' })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ length: 255, nullable: true })
    name: string

    @Column({ default: true })
    isActive: boolean

    @Column({ default: false })
    isAdmin: boolean

}