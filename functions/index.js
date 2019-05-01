const functions = require('firebase-functions')

/*
* Triggers when was created new user, user account is saved Firestore.
*/
if (
  !process.env.FUNCTION_NAME ||
  process.env.FUNCTION_NAME === 'saveAuthUser'
) {
  exports.saveAuthUser = require('./saveAuthUser').saveUser
}
