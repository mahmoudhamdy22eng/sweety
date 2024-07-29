import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(products: any[], categoryName: string): any[] {
    if (!products || !categoryName) {
      return products;
    }
    return products.filter(product => product.CategoryName.toLowerCase() === categoryName.toLowerCase());
  }
}
