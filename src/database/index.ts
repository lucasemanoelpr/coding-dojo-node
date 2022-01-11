import { createConnection } from 'typeorm';

const connection = async () => {
  await createConnection()
}

connection()