document.addEventListener('DOMContentLoaded', () => {
    const robots = [
      { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', image: 'https://robohash.org/Leanne%20Graham' },
      { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', image: 'https://robohash.org/Ervin%20Howell' },
      { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', image: 'https://robohash.org/Clementine%20Bauch' },
      { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/Patricia%20Lebsack' },
      { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/Chelsey%20Dietrich' },
      { id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', image: 'https://robohash.org/Mrs.%20Dennis%20Schulist' },
      { id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', image: 'https://robohash.org/Kurtis%20Weissnat' },
      { id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/Nicholas%20Runolfsdottir%20V' },
      { id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', image: 'https://robohash.org/Glenna%20Reichert' },
      { id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', image: 'https://robohash.org/Clementina%20DuBuque' },
    ];
  
    const robotsContainer = document.getElementById('robotsContainer');
    const searchBox = document.getElementById('searchBox');
  
    const createRobotCard = (robot) => {
      const card = document.createElement('div');
      card.classList.add('robot-card');
  
      const img = document.createElement('img');
      img.src = robot.image;
      img.alt = robot.name;
  
      const name = document.createElement('h2');
      name.textContent = robot.name;
  
      const username = document.createElement('p');
      username.textContent = `Username: ${robot.username}`;
  
      const email = document.createElement('p');
      email.textContent = `Email: ${robot.email}`;
  
      card.append(img, name, username, email);
      return card;
    };
  
    const displayRobots = (robots) => {
      robotsContainer.innerHTML = '';
      robots.forEach(robot => {
        const card = createRobotCard(robot);
        robotsContainer.appendChild(card);
      });
    };
  
    const filterRobots = (event) => {
      const searchTerm = event.target.value.toLowerCase();
      const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchTerm));
      displayRobots(filteredRobots);
    };
  
    searchBox.addEventListener('input', filterRobots);
});
  