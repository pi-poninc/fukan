const functions = require('firebase-functions')
const admin = require('firebase-admin')
const serviceAccount = require('./config/service_account.json')
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://fukan-232601.firebaseio.com'
  })
  admin.firestore().settings({ timestampsInSnapshots: true })
} catch (error) {
  console.log(error)
}

const defaultUserIcon =
  'https://img.icons8.com/cotton/64/000000/person-male.png'

exports.saveUser = functions.auth.user().onCreate(async user => {
  try {
    const result = await admin
      .firestore()
      .doc(`users/${user.uid}`)
      .create({
        uid: user.uid,
        displayName: user.displayName || '名無しさん',
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL || defaultUserIcon,
        phoneNumber: user.phoneNumber,
        providerData: {
          providerId:
            user.providerData.length === 0
              ? 'password'
              : user.providerData[0].providerId,
          uid:
            user.providerData.length === 0
              ? user.email
              : user.providerData[0].uid
        },
        disabled: user.disabled
      })

    console.log(
      `Save User info! Document written at: ${result.writeTime.toDate()}`
    )
  } catch (error) {
    console.log(error)
  }
})
