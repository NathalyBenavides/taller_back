
import { Exclude, Expose } from 'class-transformer';
import { BaseProductDto } from './base-product.dto';

@Exclude()
export class ReadProductDto extends BaseProductDto {
  @Expose()
  readonly title;

  @Expose()
  readonly description;

  @Expose()
  readonly price;

  @Expose()
  readonly categoryId;

  @Expose()
  readonly images;

}