const Order = require('../models/Order');
const Cart = require('../models/Cart');

exports.processCheckout = async (req, res, next) => {
  try {
    const { name, email, cartItems, userId = 'guest' } = req.body;
    

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Customer name and email are required'
      });
    }
    
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty'
      });
    }

    const orderItems = cartItems.map(item => ({
      productId: item.productId._id || item.productId,
      productName: item.productId.name || 'Unknown Product',
      quantity: item.quantity,
      price: item.price,
      subtotal: item.price * item.quantity
    }));
    
    const totalAmount = orderItems.reduce((sum, item) => sum + item.subtotal, 0);
    
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    
    const order = await Order.create({
      orderId,
      customer: { name, email },
      items: orderItems,
      totalAmount,
      status: 'confirmed'
    });

    await Cart.findOneAndDelete({ userId });

    const receipt = {
      orderId: order.orderId,
      customer: {
        name: order.customer.name,
        email: order.customer.email
      },
      items: order.items,
      totalAmount: order.totalAmount.toFixed(2),
      timestamp: order.createdAt,
      status: order.status,
      message: 'Thank you for your purchase!'
    };
    
    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: receipt
    });
  } catch (error) {
    next(error);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    next(error);
  }
};