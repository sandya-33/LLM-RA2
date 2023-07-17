var userInput = document.getElementById('user-input');
var userInputElement = document.querySelector('.user-input');
var sendButton = document.getElementById('send-button');

function sendMessage() {
  var message = userInput.value.trim();

  if (message !== '') {
    var chatLog = document.querySelector('.chat-log');
    var userMessageElement = document.createElement('div');
    userMessageElement.className = 'message user-message';
    userMessageElement.innerHTML = `
      <p>You: ${message}</p>
      <button class="edit-button"><i class="fas fa-edit"></i></button>
    `;
    chatLog.appendChild(userMessageElement);

    userInput.value = '';
    userInputElement.classList.remove('active');
    sendButton.style.display = 'none';
  }
}

userInput.addEventListener('input', function() {
  if (userInput.value.trim() !== '') {
    userInputElement.classList.add('active');
    sendButton.style.display = 'inline-block';
  } else {
    userInputElement.classList.remove('active');
    sendButton.style.display = 'none';
  }
});

sendButton.addEventListener('click', function() {
  var target = document.querySelector('.edit-button.save-button');
  if (target) {
    var userMessage = target.parentNode;
    var userMessageText = userMessage.querySelector('p');
    var editedMessage = userInput.value.trim();
    if (editedMessage !== '') {
      userMessageText.textContent = 'You: ' + editedMessage;
      target.innerHTML = '<i class="fas fa-edit"></i>';
      target.classList.remove('save-button');
      userMessage.classList.remove('editing');
    }
    userMessage.removeChild(userMessage.querySelector('.cancel-button'));
  } else {
    sendMessage();
    sendButton.style.display = 'none';
  }
});

userInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    var target = document.querySelector('.edit-button.save-button');
    if (target) {
      var editedMessage = userInput.value.trim();
      if (editedMessage !== '') {
        var userMessage = target.parentNode;
        var userMessageText = userMessage.querySelector('p');
        userMessageText.textContent = 'You: ' + editedMessage;
        target.innerHTML = '<i class="fas fa-edit"></i>';
        target.classList.remove('save-button');
        userMessage.classList.remove('editing');
        userMessage.removeChild(userMessage.querySelector('.cancel-button'));
      }
    } else {
      sendMessage();
      sendButton.style.display = 'none';
    }
  } else {
    sendButton.style.display = 'inline-block';
  }
});

document.addEventListener('click', function(event) {
  var target = event.target;
  if (target.classList.contains('edit-button')) {
    var userMessage = target.parentNode;
    var userMessageText = userMessage.querySelector('p');
    var messageText = userMessageText.textContent;

    if (target.classList.contains('save-button')) {
      var editedMessage = userInput.value.trim();
      if (editedMessage !== '') {
        userMessageText.textContent = 'You: ' + editedMessage;
        target.innerHTML = '<i class="fas fa-edit"></i>';
        target.classList.remove('save-button');
        userMessage.classList.remove('editing');
        userMessage.removeChild(userMessage.querySelector('.cancel-button'));
      }
    } else {
      var previousMessage = messageText.substring(4).trim();
      var editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.value = previousMessage;
      userMessage.replaceChild(editInput, userMessageText);
      editInput.focus();
      target.innerHTML = '<i class="fas fa-save"></i>';
      target.classList.add('save-button');
      userMessage.classList.add('editing');

      var cancelButton = document.createElement('button');
      cancelButton.className = 'cancel-button';
      cancelButton.textContent = 'Cancel';
      cancelButton.addEventListener('click', function() {
        editInput.value = previousMessage;
        userMessage.replaceChild(userMessageText, editInput);
        target.innerHTML = '<i class="fas fa-edit"></i>';
        target.classList.remove('save-button');
        userMessage.classList.remove('editing');
        userMessage.removeChild(cancelButton);
      });
      userMessage.appendChild(cancelButton);
    }
  }
});

