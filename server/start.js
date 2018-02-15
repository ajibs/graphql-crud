import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

dotenv.config();

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`Error!: ${err.message}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Magic is happening on ${process.env.PORT}`);
});
