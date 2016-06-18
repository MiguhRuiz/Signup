import $ from 'jquery'
const b = document.getElementById('btn')
const i = document.getElementById('email')

let email = '';
const uri = 'http://localhost:3000/new-email'

function addEmail() {
  $.ajax({
    method: 'POST',
    url: uri,
    data: { "email": email }
  })
    .done(function () {
      alert('We did it. Check your email C:')
      $(b).addClass( 'btn-success' )
    })
    .catch(function (err) {
      alert('There was an error. Try it again :C')
      $(b).addClass( 'btn-fail' )
    })
}

function getEmail (ev) {
  ev.preventDefault()
  email = i.value
  addEmail()

}

b.addEventListener("click", getEmail)
