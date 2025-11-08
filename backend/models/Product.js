const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative']
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300'
  },
  category: {
    type: String,
    trim: true
  },
  stock: {
    type: Number,
    default: 100,
    min: 0
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

productSchema.virtual('formattedPrice').get(function() {
  return `$${this.price.toFixed(2)}`;
});

productSchema.methods.isAvailable = function(quantity) {
  return this.inStock && this.stock >= quantity;
};

module.exports = mongoose.model('Product', productSchema);