import mongoose from 'mongoose';

const PictureSchema = new mongoose.Schema({
  pictureLink: String,
});

const Picture = mongoose.models.Picture || mongoose.model('Picture', PictureSchema);

export default async function handler(req, res) {
  const { method } = req;

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  switch (method) {
    case 'POST':
      try {
        const { pictureLink } = req.body;
        const picture = new Picture({ pictureLink });
        await picture.save();
        res.status(200).json({ message: 'Picture link saved successfully' });
      } catch (error) {
        console.error('Error saving picture link:', error);
        res.status(500).json({ message: 'Error saving picture link' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}