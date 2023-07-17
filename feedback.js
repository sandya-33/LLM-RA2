function addFeedbackButtons() {
  var botMessages = document.querySelectorAll('.bot-message');
  botMessages.forEach(function(botMessage) {
    var feedbackButtons = document.createElement('div');
    feedbackButtons.className = 'feedback-buttons';
    feedbackButtons.innerHTML = `
      <button class="feedback-button"><i class="far fa-comment"></i></button>
      <button class="like-button"><i class="fas fa-thumbs-up"></i></button>
      <button class="dislike-button"><i class="fas fa-thumbs-down"></i></button>
    `;
    botMessage.appendChild(feedbackButtons);

    var feedbackButton = feedbackButtons.querySelector('.feedback-button');
    var likeButton = feedbackButtons.querySelector('.like-button');
    var dislikeButton = feedbackButtons.querySelector('.dislike-button');

    feedbackButton.addEventListener('click', function() {
      var feedbackContainer = botMessage.querySelector('.feedback-container');
      if (feedbackContainer) {
        feedbackContainer.remove();
      } else {
        var newFeedbackContainer = document.createElement('div');
        newFeedbackContainer.className = 'feedback-container';
        newFeedbackContainer.innerHTML = `
          <textarea class="feedback-textarea" placeholder="Leave your feedback..."></textarea>
          <button class="feedback-submit">Submit</button>
        `;
        botMessage.appendChild(newFeedbackContainer);

        var feedbackSubmitButton = newFeedbackContainer.querySelector('.feedback-submit');
        feedbackSubmitButton.addEventListener('click', function() {
          var feedbackTextarea = newFeedbackContainer.querySelector('.feedback-textarea');
          var feedbackMessage = feedbackTextarea.value.trim();
          if (feedbackMessage !== '') {
            var feedbackMessageElement = document.createElement('p');
            feedbackMessageElement.textContent = 'Feedback: ' + feedbackMessage;
            botMessage.appendChild(feedbackMessageElement);
            newFeedbackContainer.remove();
          }
        });
      }
    });

    likeButton.addEventListener('click', function() {
      likeButton.classList.toggle('selected');
      dislikeButton.classList.remove('selected');
    });

    dislikeButton.addEventListener('click', function() {
      dislikeButton.classList.toggle('selected');
      likeButton.classList.remove('selected');
    });
  });
}

addFeedbackButtons();
