const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null; // Close the answer
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px'; // Open the answer smoothly
     
    }
  });
});
