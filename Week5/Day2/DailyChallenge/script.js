document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('libform');
    const storySpan = document.getElementById('story');
    const shuffleButton = document.getElementById('shuffle-button');
    let values = {};
    let stories = [
      (values) => `Once upon a time, a ${values.adjective} ${values.noun} met ${values.person} while trying to ${values.verb} in ${values.place}.`,
      (values) => `${values.person} decided to take a ${values.adjective} ${values.noun} to ${values.place} and then ${values.verb} all the way home.`,
      (values) => `In ${values.place}, a ${values.adjective} ${values.noun} was seen ${values.verb} by ${values.person}.`
    ];
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const noun = document.getElementById('noun').value.trim();
      const adjective = document.getElementById('adjective').value.trim();
      const person = document.getElementById('person').value.trim();
      const verb = document.getElementById('verb').value.trim();
      const place = document.getElementById('place').value.trim();
  
      if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill out all fields.");
        return;
      }
  
      values = { noun, adjective, person, verb, place };
      displayStory();
      shuffleButton.style.display = 'inline-block';
    });
  
    function displayStory() {
      const randomStory = stories[Math.floor(Math.random() * stories.length)];
      storySpan.textContent = randomStory(values);
    }
  
    shuffleButton.addEventListener('click', function() {
      displayStory();
    });
  });
  