import { Schema, model } from 'mongoose';

const orderItemSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  productName: String,
  quantity: Number,
  price: Number,
  subtotal: Number
});

const orderSchema = new Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  customer: {
    name: {
      type: String,
      required: [true, 'Customer name is required']
    },
    email: {
      type: String,
      required: [true, 'Customer email is required'],
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    }
  },
  items: [orderItemSchema],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
    default: 'confirmed'
  }
}, {
  timestamps: true
});

export default model('Order', orderSchema);