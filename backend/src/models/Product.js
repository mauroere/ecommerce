const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be a positive number'],
},
stock: {
    type: Number,
    default: 0,
    min: [0, 'Stock must be a non-negative integer'],
},
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: null,
  },
  videoUrl: {
    type: String, // Nuevo campo para videos
    default: null,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);