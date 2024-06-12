const activities = [
    { city: 'telaviv', type: 'mall', name: 'Dizengoff Center Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dizengoff_Center_Interior.jpg' },
    { city: 'telaviv', type: 'touristic', name: 'Shuk HaCarmel', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Carmel_Market%2C_2019_%2807%29.jpg' },
    { city: 'telaviv', type: 'archeology', name: 'Eretz Israel Museum', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Eretz_Israel_Museum2.jpg' },
    { city: 'telaviv', type: 'trails', name: 'Yarkon Park', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Hayarkon-TelAviv.jpg' },
    { city: 'telaviv', type: 'religious', name: 'Great Synagogue of TLV', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/99486_the_great_synagogue_in_tel_aviv_PikiWiki_Israel.jpg' },
    { city: 'telaviv', type: 'mall', name: 'TLV Mall', image: 'https://media.timeout.com/images/103696377/1372/772/image.webp' },
    { city: 'telaviv', type: 'touristic', name: 'Florentin', image: 'https://www.roadcalls.fr/wp-content/uploads/2019/05/quartier-florentine-tel-aviv.jpg' },
    { city: 'telaviv', type: 'archeology', name: 'Tel Grisa / Napoleon Hill', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Napoleon_Hill%2C_Ramat_Gan.JPG' },
    { city: 'telaviv', type: 'trails', name: 'Pardesim Stream', image: '' },
    { city: 'telaviv', type: 'religious', name: 'Beit Hafutsot', image: '' },
    { city: 'telaviv', type: 'mall', name: 'Azraeli Mall', image: '' },
    { city: 'telaviv', type: 'touristic', name: 'Jaffa', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Jaffa_Clock_Tower%2C_2019_%2803%29.jpg' },
    { city: 'telaviv', type: 'archeology', name: 'Tel Qasile', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Qassila_078.jpg' },
    { city: 'telaviv', type: 'trails', name: 'Park Hamesila', image: '' },
    { city: 'telaviv', type: 'religious', name: 'Yitshak Rabin Center', image: '' },
    { city: 'telaviv', type: 'mall', name: 'Ramat Aviv Mall', image: '' },
    { city: 'telaviv', type: 'touristic', name: 'Tayelet', image: '' },
    { city: 'telaviv', type: 'archeology', name: 'The Egyptian Gate in Yaffa', image: '' },
    { city: 'telaviv', type: 'trails', name: 'Charles Clore Park', image: '' },
    { city: 'telaviv', type: 'religious', name: 'Nahalat Binyamin Synagogue', image: '' },
    { city: 'telaviv', type: 'mall', name: 'Weizmann City Mall', image: '' },
    { city: 'telaviv', type: 'touristic', name: 'Neve Tsedek', image: '' },
    { city: 'telaviv', type: 'archeology', name: 'Sheva Tahanot', image: '' },
    { city: 'telaviv', type: 'trails', name: 'The Great Synagogue of Ramat Aviv', image: '' },
    { city: 'telaviv', type: 'mall', name: 'City Garden', image: '' },
    { city: 'telaviv', type: 'touristic', name: 'Habima Square', image: '' },
    { city: 'telaviv', type: 'trails', name: 'Mechachem Begin Park', image: '' },
    { city: 'telaviv', type: 'mall', name: 'Ayalon Mall', image: '' },
    { city: 'telaviv', type: 'touristic', name: 'Yitshak Rabin Center', image: '' },
    { city: 'telaviv', type: 'mall', name: 'Dizengoff Center Mall', image: '' },
    { city: 'telaviv', type: 'touristic', name: 'TLV Museum of Art', image: '' },
    { city: 'telaviv', type: 'trails', name: 'North Dog Beach - Tel Baruch', image: '' },
    { city: 'jerusalem', type: 'mall', name: 'Malcha Mall', image: '' },
    { city: 'jerusalem', type: 'touristic', name: 'Vieille ville', image: '' },
    { city: 'jerusalem', type: 'archeology', name: 'Cité de David', image: '' },
    { city: 'jerusalem', type: 'trails', name: 'Jerusalem Trail', image: '' },
    { city: 'jerusalem', type: 'religious', name: 'Grande synagogue', image: '' },
    { city: 'jerusalem', type: 'mall', name: 'Hadar Mall', image: '' },
    { city: 'jerusalem', type: 'touristic', name: 'Promenade de Bak\'a', image: '' },
    { city: 'jerusalem', type: 'archeology', name: 'Tunnels du Mur', image: '' },
    { city: 'jerusalem', type: 'trails', name: 'Jerusalem Hills Trail', image: '' },
    { city: 'jerusalem', type: 'religious', name: 'Kotel', image: '' },
    { city: 'jerusalem', type: 'mall', name: 'Central Bus Station', image: '' },
    { city: 'jerusalem', type: 'touristic', name: 'Mamilla', image: '' },
    { city: 'jerusalem', type: 'archeology', name: 'The Western Wall', image: '' },
    { city: 'jerusalem', type: 'trails', name: 'Ein Lavan Trail', image: '' },
    { city: 'jerusalem', type: 'religious', name: 'Mont du Temple', image: '' },
    { city: 'jerusalem', type: 'mall', name: 'Center One', image: '' },
    { city: 'jerusalem', type: 'touristic', name: 'Mea Shearim', image: '' },
    { city: 'jerusalem', type: 'archeology', name: 'The Temple Mount', image: '' },
    { city: 'jerusalem', type: 'trails', name: 'Sataf Nature Reserve', image: '' },
    { city: 'jerusalem', type: 'religious', name: 'Hurva Synagogue', image: '' },
    { city: 'jerusalem', type: 'mall', name: 'Rav Shefa Mall', image: '' },
    { city: 'jerusalem', type: 'touristic', name: 'Har HaTzofim', image: '' },
    { city: 'jerusalem', type: 'archeology', name: 'The Tower of David Museum', image: '' },
    { city: 'jerusalem', type: 'trails', name: 'Jerusalem Forest', image: '' },
    { city: 'jerusalem', type: 'religious', name: 'Mount of Olives', image: '' },
    { city: 'jerusalem', type: 'mall', name: 'Ramot Mall', image: '' },
    { city: 'jerusalem', type: 'touristic', name: 'The Davidson Center', image: '' },
    { city: 'jerusalem', type: 'archeology', name: 'Emek Hamatzleva', image: '' },
    { city: 'haifa', type: 'mall', name: 'Cenomi Haifa Mall', image: '' },
    { city: 'haifa', type: 'touristic', name: 'High Garden', image: '' },
    { city: 'haifa', type: 'archeology', name: 'Mont Carmel', image: '' },
    { city: 'haifa', type: 'trails', name: 'Carmel National Park', image: '' },
    { city: 'haifa', type: 'religious', name: 'The Great Synagogue', image: '' },
    { city: 'haifa', type: 'mall', name: 'Azraeli Mall Haifa', image: '' },
    { city: 'haifa', type: 'touristic', name: 'The German Colony', image: '' },
    { city: 'haifa', type: 'archeology', name: 'Roman Road in Haifa', image: '' },
    { city: 'haifa', type: 'trails', name: 'Haifa\'s Beach', image: '' },
    { city: 'haifa', type: 'religious', name: 'Cave of Elija', image: '' },
    { city: 'haifa', type: 'mall', name: 'Grand Canyon Haifa', image: '' },
    { city: 'haifa', type: 'touristic', name: 'Haifa Educational Zoo', image: '' },
    { city: 'haifa', type: 'archeology', name: 'Carmel Mountain', image: '' },
    { city: 'haifa', type: 'trails', name: 'The Ramchal Synagogue', image: '' },
    { city: 'haifa', type: 'mall', name: 'Cinema Mall Haifa', image: '' },
    { city: 'haifa', type: 'touristic', name: 'Haifa Cable Car', image: '' },
    { city: 'haifa', type: 'archeology', name: 'Louis Promenade', image: '' },
    { city: 'haifa', type: 'trails', name: 'Nesher Park', image: '' },
    { city: 'haifa', type: 'mall', name: 'Castra Center', image: '' },
    { city: 'haifa', type: 'touristic', name: 'The Lighthouse Promenade', image: '' },
    { city: 'haifa', type: 'mall', name: 'Auditorium Square Mall', image: '' },
    { city: 'akko', type: 'mall', name: 'Azraeli Akko', image: '' },
    { city: 'akko', type: 'touristic', name: 'Citadelle', image: '' },
    { city: 'akko', type: 'archeology', name: 'Crusader Citadel', image: '' },
    { city: 'akko', type: 'trails', name: 'Akko Promenade', image: '' },
    { city: 'akko', type: 'religious', name: 'Synagogue Tunisienne d\'Acre', image: '' },
    { city: 'akko', type: 'mall', name: 'Akko Mall', image: '' },
    { city: 'akko', type: 'touristic', name: 'Old City of Akko', image: '' },
    { city: 'akko', type: 'archeology', name: 'Templar Tunnel', image: '' },
    { city: 'akko', type: 'trails', name: 'Nahal Keziv Nature Reserve', image: '' },
    { city: 'akko', type: 'religious', name: 'Or Torah Synagogue', image: '' },
    { city: 'akko', type: 'mall', name: 'Akko Port', image: '' },
    { city: 'akko', type: 'touristic', name: 'Market Akko Port', image: '' },
    { city: 'akko', type: 'archeology', name: 'Akkos Old City', image: '' },
    { city: 'akko', type: 'trails', name: 'Rosh Hanikra Coastal Trail', image: '' },
    { city: 'akko', type: 'religious', name: 'The Ramchal Synagogue', image: '' },
    { city: 'akko', type: 'mall', name: 'Nesher Park', image: '' },
    { city: 'akko', type: 'touristic', name: 'Trails', image: '' },
    { city: 'akko', type: 'religious', name: 'The Tunisian Synagogue', image: '' },
    { city: 'akko', type: 'religious', name: 'The Karaite Synagogue', image: '' },
    { city: 'akko', type: 'religious', name: 'The Ramchal\'s Tomb', image: '' },
    { city: 'hadera', type: 'mall', name: 'Ofer Lev Hadera', image: '' },
    { city: 'hadera', type: 'touristic', name: 'Hadera River Park', image: '' },
    { city: 'hadera', type: 'archeology', name: 'Tel Hadera', image: '' },
    { city: 'hadera', type: 'trails', name: 'Nahal Hadera Park', image: '' },
    { city: 'hadera', type: 'religious', name: 'Ohel Yaakov Synagogue', image: '' },
    { city: 'hadera', type: 'mall', name: 'Mall Hahof Village', image: '' },
    { city: 'hadera', type: 'touristic', name: 'Hadera Beach', image: '' },
    { city: 'hadera', type: 'archeology', name: 'Tel Shikmona', image: '' },
    { city: 'hadera', type: 'religious', name: 'Breslov Synagogue', image: '' },
    { city: 'hadera', type: 'mall', name: 'Hadera Gates Mall', image: '' },
    { city: 'hadera', type: 'touristic', name: 'Hadera Stream', image: '' },
    { city: 'hadera', type: 'archeology', name: 'Archeaological Park', image: '' },
    { city: 'hadera', type: 'mall', name: 'MIXX Shopping Center', image: '' },
    { city: 'hadera', type: 'mall', name: 'Mall Hapardes Shopping Mall', image: '' },
    { city: 'hadera', type: 'mall', name: 'Scenter Park Hadera', image: '' },
    { city: 'hadera', type: 'mall', name: 'Mitram Kniot Center One', image: '' },
    { city: 'beersheva', type: 'mall', name: 'Azraeli Negev Mall', image: '' },
    { city: 'beersheva', type: 'touristic', name: 'Abraham\'s Well International Visitors Center', image: '' },
    { city: 'beersheva', type: 'archeology', name: 'Tel Beer Sheva National Park', image: '' },
    { city: 'beersheva', type: 'trails', name: 'Ramon Crater', image: '' },
    { city: 'beersheva', type: 'religious', name: 'Ohel Yaakov Synagogue', image: '' },
    { city: 'beersheva', type: 'mall', name: 'Ofer Lev Hadera', image: '' },
    { city: 'beersheva', type: 'touristic', name: 'Negev Museum of Art', image: '' },
    { city: 'beersheva', type: 'archeology', name: 'Abraham\'s Well', image: '' },
    { city: 'beersheva', type: 'trails', name: 'Beer Sheva River Park', image: '' },
    { city: 'beersheva', type: 'religious', name: 'Yeshivat Hanegev', image: '' },
    { city: 'beersheva', type: 'mall', name: 'Grand Canyon Beer Sheva', image: '' },
    { city: 'beersheva', type: 'touristic', name: 'Old City of Beer Sheva', image: '' },
    { city: 'beersheva', type: 'archeology', name: 'Horvat Uza', image: '' },
    { city: 'beersheva', type: 'trails', name: 'Big Crater Geological Park', image: '' },
    { city: 'beersheva', type: 'religious', name: 'Yeshivat Hesder Beer Sheva', image: '' },
    { city: 'beersheva', type: 'mall', name: 'Hanegev Mall', image: '' },
    { city: 'beersheva', type: 'touristic', name: 'Joe Alon Center for Beduim Culture', image: '' },
    { city: 'beersheva', type: 'archeology', name: 'Negev Highlands Trail', image: '' },
    { city: 'beersheva', type: 'trails', name: 'British Military Cemetery', image: '' },
    { city: 'beersheva', type: 'religious', name: 'Ben Gourion Park', image: '' },
    { city: 'ashdod', type: 'mall', name: 'Sea Mall', image: '' },
    { city: 'ashdod', type: 'touristic', name: 'Ashdod Beach', image: '' },
    { city: 'ashdod', type: 'archeology', name: 'Tel Ashdod', image: '' },
    { city: 'ashdod', type: 'trails', name: 'Ashdod Yam Park', image: '' },
    { city: 'ashdod', type: 'religious', name: 'The Big Synagogue of Ashdod', image: '' },
    { city: 'ashdod', type: 'mall', name: 'City Mall', image: '' },
    { city: 'ashdod', type: 'touristic', name: 'Ashdod Art Museum', image: '' },
    { city: 'ashdod', type: 'archeology', name: 'Ashdod Harbor Excavation', image: '' },
    { city: 'ashdod', type: 'trails', name: 'Gan Hagat', image: '' },
    { city: 'ashdod', type: 'religious', name: 'Migdal Ahhod', image: '' },
    { city: 'ashdod', type: 'mall', name: 'MonArt Arts Center', image: '' },
    { city: 'ashdod', type: 'touristic', name: 'Tel Es-Safi / Gath', image: '' },
    { city: 'ashdod', type: 'archeology', name: 'The Eye of the Sun', image: '' },
    { city: 'ashdod', type: 'trails', name: 'Tel Mor', image: '' },
    { city: 'ashdod', type: 'religious', name: 'The Lachish Stream Park', image: '' },
    { city: 'eilat', type: 'mall', name: 'Ice Mall', image: '' },
    { city: 'eilat', type: 'touristic', name: 'Plage', image: '' },
    { city: 'eilat', type: 'archeology', name: 'The Ancient City of Eilat', image: '' },
    { city: 'eilat', type: 'trails', name: 'Timna Park', image: '' },
    { city: 'eilat', type: 'religious', name: 'Kings City', image: '' },
    { city: 'eilat', type: 'mall', name: 'Mall Haim', image: '' },
    { city: 'eilat', type: 'touristic', name: 'Eilat Coral Beach Nature Reserve', image: '' },
    { city: 'eilat', type: 'archeology', name: 'Eilat Mountains', image: '' },
    { city: 'eilat', type: 'trails', name: 'Dolphin Reef', image: '' },
    { city: 'eilat', type: 'religious', name: 'Red Canyon', image: '' },
    { city: 'eilat', type: 'mall', name: 'Eilat City Center', image: '' },
    { city: 'eilat', type: 'touristic', name: 'Eilat Underwater Observatory Marine Park', image: '' },
    { city: 'eilat', type: 'archeology', name: 'Eilat Promenade', image: '' }
];

function getRandomPriceIndicator() {
    const shekelCount = Math.floor(Math.random() * 3) + 1;
    let shekelSymbols = '';
    for (let i = 0; i < shekelCount; i++) {
        shekelSymbols += '<span>₪</span>';
    }
    return shekelSymbols;
}

function searchActivities() {
    const city = document.getElementById('city').value;
    const activityType = document.getElementById('activity-type').value;
    const resultsContainer = document.getElementById('results');
    
    resultsContainer.innerHTML = '';

    activities
        .filter(activity => activity.city === city && activity.type === activityType)
        .forEach(activity => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');

            const img = document.createElement('img');
            img.src = activity.image;
            img.alt = activity.name;

            const activityInfo = document.createElement('div');
            activityInfo.classList.add('activity-info');

            const activityName = document.createElement('p');
            activityName.classList.add('activity-name');
            activityName.textContent = activity.name;

            const priceIndicator = document.createElement('div');
            priceIndicator.classList.add('price-indicator');
            priceIndicator.innerHTML = getRandomPriceIndicator();

            activityInfo.appendChild(activityName);
            activityInfo.appendChild(priceIndicator);
            resultItem.appendChild(img);
            resultItem.appendChild(activityInfo);

            resultsContainer.appendChild(resultItem);
        });
}

document.getElementById('close-image-modal').addEventListener('click', function() {
    document.getElementById('image-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const imageModal = document.getElementById('image-modal');
    if (event.target == imageModal) {
        imageModal.style.display = 'none';
    }
});

document.getElementById('results').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        const enlargedImg = document.getElementById('enlarged-img');
        enlargedImg.src = event.target.src;
        document.getElementById('image-modal').style.display = 'block';
    }
});
