const express = require('express');
const products = require('../data/products');
const { protect, admin } = require('../middleware/authMiddleware');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} = require('../controllers/productController.js');
const router = express.Router();

// router.get('/', async (req, res) => {
//   res.json(products);
// });

// router.get('/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params._id);
//   res.json(product);
// });

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

module.exports = router;
