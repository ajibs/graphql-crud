import mongoose from 'mongoose';

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a name',
  },
  address: {
    type: String,
    required: 'You must supply an address!',
  },
  description: {
    type: String,
    required: 'You must supply a description!',
  },
  website: {
    type: String,
    required: 'You must supply a website!',
  },
  email: {
    type: String,
    trim: true,
    required: 'You must supply an email!',
  },
  phone: {
    type: String,
    required: 'You must supply a phone number!',
  },
  categories: [String],
  created: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
    default: 0,
  },
});


// define our indexes
businessSchema.index({
  name: 'text',
  description: 'text',
});


export default mongoose.model('Business', businessSchema);
