import dotenv from 'dotenv';

import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_URL: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BYCRYPT_SULT_ROUNTS,
  default_password: process.env.DEFAULT_PASSWORD,
  NODE_ENV: process.env.NODE_ENV,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_access_expires_in_refresh: process.env.JWT_ACCESS_EXPIRES_IN_REFRESH,

};
