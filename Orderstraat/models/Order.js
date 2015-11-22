import {Company} from 'Company';
import {Product} from 'Product';

export class Order{
    constructor(){
        this.company = new Company();
        this.product = new Product();
    }
}

