import {IsEmail, IsOptional, IsString, MaxLength} from 'class-validator'

export class CreateUserDto {
    
    @IsEmail()
    email: string
    
    @IsString()
    password: string

    @IsString()
    @IsOptional()
    @MaxLength(255)
    name: string
}