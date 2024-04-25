import mongoose from 'mongoose';

const pictureSchema = new mongoose.Schema({
  url: String,
  createdAt: { type: Date, default: Date.now }
});

const Picture = mongoose.model('Picture', pictureSchema);

export default Picture;