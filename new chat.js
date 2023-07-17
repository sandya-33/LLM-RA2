var newChatButton = document.querySelector('.new-chat-button');

newChatButton.addEventListener('click', function() {
  // Create a new iframe element
  var iframe = document.createElement('iframe');
  iframe.src = '2.html';
  iframe.className = 'chat-iframe';

  // Append the iframe to the document body
  document.body.appendChild(iframe);
});
