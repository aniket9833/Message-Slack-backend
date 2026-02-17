import mongoose from 'mongoose';

import { DEV_DB_URL, NODE_ENV, PROD_DB_URL } from './serverConfig.js';

export default async function connectDB() {
  try {
    const dbUrl =
      NODE_ENV === 'production' ? PROD_DB_URL || DEV_DB_URL : DEV_DB_URL;

    if (!dbUrl) {
      throw new Error('Database URL is not configured');
    }

    await mongoose.connect(dbUrl);
    console.log(`Connected to mongodb database from ${NODE_ENV} environment`);
  } catch (error) {
    console.log('Error connecting to database', error);
  }
}
