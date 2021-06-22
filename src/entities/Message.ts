import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from 'typeorm'
import {User} from "./User";
import { v4 as uuid } from "uuid"

@Entity("messages")
class Message{

@PrimaryColumn()
id: string;

@Column()
admin_id:string;

@JoinColumn({name: "user_id"})
@ManyToOne(() => User)
user: User;

@Column()
text: string;

@Column()
user_id:string;

@CreateDateColumn()
created_at: Date;

constructor(){

  if(!this.id){

    this.id = uuid();

  }

}




}

export {Message}