// pages/api/session.js

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function handler(req, res) {
  const { getUser } = getKindeServerSession(req);
  const user = await getUser();
  res.status(200).json({ user });
}
