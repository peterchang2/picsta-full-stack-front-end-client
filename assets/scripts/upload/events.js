const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onUpload = function (event) {
  event.preventDefault()
  const uploadData = getFormFields(event.target)
  console.log('this is uploadData', uploadData.images.date)
  $(event.target).trigger('reset')
  api.upload(uploadData.images.date, uploadData.images.caption, uploadData.images.url)
    .then(ui.uploadSuccess)
    .catch(ui.failure)
}

const onGetImage = function (event) {
  event.preventDefault()
  const imageData = getFormFields(event.target)
  $(event.target).trigger('reset')
  const imageId = imageData.images.id
  console.log(imageId)
  api.getImageId(imageId)
    .then(ui.getImageIdSuccess)
    .catch(ui.failure)
}

module.exports = {
  onUpload,
  onGetImage
}
