import { Router } from 'express';
import { Product } from '../entity/Product';
import { ProductController } from '../controllers/ProductController'

export const router = Router();
const productCtrl = new ProductController()

router.post('/', async (req, res) => {
  const {  description, price, quantity } = req.body;

  if ( !description || !price || !quantity) {
    return res.status(400).json({ message: 'Invalid inputs' });
  }
  

  const product = new Product();
  product.description = description;
  product.price = price;
  product.quantity = quantity;

  await productCtrl.save(product);

  return res.status(201).json({ message: 'Product registered' });
});


router.get('/products/:id', async (req, res) => {
  const {id} = req.params;
  const product = await productCtrl.getProductById(Number(id));

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    return res.json({ product});
  });

  

router.get('/products/description/:description', async (req, res) => {
  const {description} = req.params;
  const products = await productCtrl.getProductByDescription(description);

  return res.json({ products });
});

export default router;

