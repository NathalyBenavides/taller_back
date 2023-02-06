import { IsNumber, IsOptional, IsString } from 'class-validator';
import {PaginationDto} from 'core/dto';
import {
    isNumberValidationOptions,
    isStringValidationOptions,
  } from '@shared/validation';

import { title } from 'process';
export class FilterProductDto extends PaginationDto{
@IsOptional()
@IsString(isStringValidationOptions())
readonly title:string;
@IsOptional()
@IsNumber(isNumberValidationOptions())
readonly categoryId:number;

@IsOptional()
@IsString({message:'el campo nomnbre debe ser string'})
    limit: number;
    page: number;

}


