const Product = require('../models/Product');

// Mock product data for seeding
const mockProducts = [
  {
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
    stock: 50
  },
  {
    name: 'Smart Fitness Watch',
    price: 199.99,
    description: 'Advanced fitness tracking with heart rate monitor and GPS',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
    stock: 30
  },
  {
    name: 'Leather Laptop Backpack',
    price: 89.99,
    description: 'Professional laptop backpack with USB charging port',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300',
    stock: 75
  },
  {
    name: 'Mechanical Gaming Keyboard',
    price: 129.99,
    description: 'RGB mechanical keyboard with customizable keys',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300',
    stock: 40
  },
  {
    name: 'Wireless Mouse Pro',
    price: 49.99,
    description: 'Ergonomic wireless mouse with precision tracking',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300',
    stock: 100
  },
  {
    name: 'USB-C Hub Adapter',
    price: 34.99,
    description: 'Multi-port USB-C hub with HDMI and card reader',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300',
    stock: 60
  },
  {
    name: 'Portable Phone Charger',
    price: 29.99,
    description: '20000mAh power bank with fast charging',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300',
    stock: 80
  },
  {
    name: 'HD Webcam 1080p',
    price: 69.99,
    description: 'Professional webcam with auto-focus and built-in microphone',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1589395937920-9d0c7370d4ea?w=300',
    stock: 45
  }
];

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getAllProducts = async (req, res, next) => {
  try {
    let products = await Product.find();
    
    // Seed products if database is empty
    if (products.length === 0) {
      products = await Product.insertMany(mockProducts);
      console.log('✅ Mock products seeded successfully');
    }
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};