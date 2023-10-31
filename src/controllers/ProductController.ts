import { Repository } from 'typeorm'
import { Product } from '../entity/Product'
import { AppDataSource } from '../data-source'

export class ProductController {
  private _repo: Repository<Product>

  constructor() {
    this._repo = AppDataSource.getRepository(Product)
  }

  async save(product: Product) {
    const savedProduct = await this._repo.save(product)
    return savedProduct
  }

  async getProductById(id: number) {
    const product = await this._repo.find({where: {id}})
    return product
  }
  
  async getProductByDescription( description:string ) {
      const products = await this._repo.find({where: {description}})

      return products
  }
}
