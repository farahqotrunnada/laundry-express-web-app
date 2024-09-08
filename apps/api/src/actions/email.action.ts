import { BACKEND_URL } from '@/utils/constant';
import { User } from '@prisma/client';
import { generateEmailToken } from '@/utils/encryption';

export default class EmailAction {
  async sendVerificationEmail(user: User) {
    const email_token = generateEmailToken(user);

    const url = new URL(BACKEND_URL);
    url.pathname = '/verify';
    url.searchParams.set('token', email_token);

    // TODO: send email
    console.log(url.toString());
  }
}
