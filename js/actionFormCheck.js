export const actionFormCheck = () => {
  const form = document.getElementById('form');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');

  const nameError = document.querySelector('#name + .contacts__form-error');
  const emailError = document.querySelector('#email + .contacts__form-error');
  const messageError = document.querySelector('#message + .contacts__form-error');

  const button = document.getElementById('button');

  const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const clearError = () => {
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
  }

  const validateForm = () => {
    let isValid = true

    if (nameField.value.trim().length < 3) {
      isValid = false
      nameError.textContent = 'Имя не может быть короче 3 символов';
    }

    if (nameField.value.trim().length > 10) {
      isValid = false
      nameError.textContent = 'Имя не может быть длиннее 10 символов';
    }

    if (!emailRegexp.test(emailField.value)) {
      isValid = false
      emailError.textContent = 'Введен некорректный email';
    }

    if (!emailField.value.trim()) {
      isValid = false
      emailError.textContent = "Email не может быть пустым";
    }

    if (messageField.value.trim() < 10) {
      isValid = false
      messageError.textContent = 'Сообщение не может быть короче 10 символов'
    }

    return isValid
  }

  const submitForm = () => {
    const body = {
      name: nameField.value.trim(),
      email: emailField.value.trim(),
      body: messageField.value.trim(),
    }

    button.disabled = true

    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(res => res.json())
      .then(data => {
        alert('Успешно отправлено')
        console.log(data)
        button.disabled = false
      })
      .catch(err => {
        alert('Что-то пошло не так')
        console.log(err.message)
        button.disabled = false
      })
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    clearError()
    if (validateForm()) {
      submitForm()
    }
  });
}