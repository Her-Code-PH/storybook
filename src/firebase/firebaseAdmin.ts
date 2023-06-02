import admin from 'firebase-admin'

export const verifyIdToken = (token: string) => {
  const firebasePrivateKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        // clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
      }),
      // databaseURL
    })
  }

  return admin.auth()
    .verifyIdToken(token)
    .catch((err) => {
      throw(err)
    })
}
