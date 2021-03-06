
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  if ($('.pass').val() !== $('.confirmpass').val()) {
    $(event.target).trigger('reset')
    ui.passDoesntMatch()
  } else {
    $(event.target).trigger('reset')
    api.signUp(userData)
      .then(ui.signUpSuccess)
      .catch(ui.failure)
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  // console.log('this is userdata' + userData)
  $(event.target).trigger('reset')
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function () {
  event.preventDefault()
  const userData = getFormFields(event.target)
  if ($('.old-Pass').val() === $('.new-Pass').val()) {
    $(event.target).trigger('reset')
    ui.changePassFailure()
  } else {
    $(event.target).trigger('reset')
    api.changePassword(userData)
      .then(ui.changePasswordSuccess)
      .catch(ui.failure)
  }
}

const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
