import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class SandboxService {

  constructor() { }

  getCategories() {
    const categories: CategoryModel[] = [
      {
        color: '#FE645A',
        title: 'Money Savings',
        value: 18409
      },
      {
        color: '#2A327D',
        title: 'Expenses',
        value: 1409
      },
      {
        color: '#FFB039',
        title: 'Transfer',
        value: 65955
      },
      {
        color: '#00C689',
        title: 'Fees',
        value: 652
      },
    ];
    return categories;
  }

  getChartData() {
    
  }
}
