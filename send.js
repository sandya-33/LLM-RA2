var userInput = document.getElementById('user-input');
var userInputElement = document.querySelector('.user-input');
var sendButton = document.getElementById('send-button');

function sendMessage() {
  var message = userInput.value.trim();

  if (message !== '') {
    var chatLog = document.querySelector('.chat-log');
    var userMessageElement = document.createElement('div');
    userMessageElement.className = 'message user-message';
    userMessageElement.innerHTML = '<p>You: ' + message + '</p>';
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
  sendMessage();
  sendButton.style.display = 'none';
});

userInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
    sendButton.style.display = 'none';
  } else {
    sendButton.style.display = 'inline-block';
  }
});
