const activities = [
    { city: 'telaviv', type: 'mall', name: 'Dizengoff Center Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dizengoff_Center_Interior.jpg' },
    { city: 'telaviv', type: 'touristic', name: 'Shuk HaCarmel', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Carmel_Market%2C_2019_%2807%29.jpg' },
    { city: 'telaviv', type: 'archeology', name: 'Eretz Israel Museum', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Eretz_Israel_Museum2.jpg' },
    { city: 'telaviv', type: 'trails', name: 'Yarkon Park', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Hayarkon-TelAviv.jpg' },
    { city: 'telaviv', type: 'religious', name: 'Great Synagogue of TLV', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/99486_the_great_synagogue_in_tel_aviv_PikiWiki_Israel.jpg' },
    { city: 'telaviv', type: 'mall', name: 'TLV Mall', image: 'https://media.timeout.com/images/103696377/1372/772/image.webp' },
    { city: 'telaviv', type: 'touristic', name: 'Florentin', image: 'https://www.roadcalls.fr/wp-content/uploads/2019/05/quartier-florentine-tel-aviv.jpg' },
    { city: 'telaviv', type: 'archeology', name: 'Tel Grisa / Napoleon Hill', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Napoleon_Hill%2C_Ramat_Gan.JPG' },
    { city: 'telaviv', type: 'mall', name: 'Azraeli Mall', image: 'https://thumbs.dreamstime.com/b/azrieli-mall-tel-aviv-israel-middle-east-263390786.jpg' },
    { city: 'telaviv', type: 'touristic', name: 'Jaffa', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Jaffa_Clock_Tower%2C_2019_%2803%29.jpg' },
    { city: 'telaviv', type: 'archeology', name: 'Tel Qasile', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Qassila_078.jpg' },
    { city: 'telaviv', type: 'mall', name: 'Ramat Aviv Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Ramat_Aviv_Mall_-_Tel_Aviv%2C_Israel_-_panoramio.jpg' },
    { city: 'telaviv', type: 'touristic', name: 'Tayelet', image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/GLAM_TLV_2018_040610.jpg' },
    { city: 'telaviv', type: 'archeology', name: 'The Egyptian Gate in Yaffa', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Jaffa_Tour_14.jpg' },
    { city: 'telaviv', type: 'trails', name: 'Charles Clore Park', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Charles_Clore_Park_in_Tel_Aviv.JPG' },
    { city: 'telaviv', type: 'mall', name: 'Weizmann City Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/PikiWiki_Israel_12018_weizman_center_tel_aviv.jpg' },
    { city: 'telaviv', type: 'touristic', name: 'Neve Tsedek', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Neve_Tzedek_Sculptures_-_Tel_Aviv_%284025114659%29.jpg' },
    { city: 'telaviv', type: 'archeology', name: 'Sheva Tahanot', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Sieben_muellen_063.jpg' },
    { city: 'telaviv', type: 'mall', name: 'City Garden', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/PikiWiki_Israel_12095_city_garden_mall_in_tel_aviv.jpg' },
    { city: 'telaviv', type: 'touristic', name: 'Habima Square', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Charles_Bronfman_%D0%90uditorium_at_Habima_Square_%281%29.jpg' },
    { city: 'telaviv', type: 'trails', name: 'Mechachem Begin Park', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/PikiWiki_Israel_13985_Park_Menachem_Begin_in_Tel_Aviv.JPG' },
    { city: 'telaviv', type: 'mall', name: 'Ayalon Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Ayalon_Mall_2.jpg' },
    { city: 'telaviv', type: 'touristic', name: 'Yitshak Rabin Center', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Yitzhak_Rabin_Center-_Rooftop_Terrace.jpg' },
    { city: 'telaviv', type: 'touristic', name: 'TLV Museum of Art', image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/TlvDSC05250.JPG' },
    { city: 'telaviv', type: 'trails', name: 'North Dog Beach - Tel Baruch', image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Telbaruch3414.JPG' },
    { city: 'jerusalem', type: 'mall', name: 'Malcha Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/PikiWiki_Israel_2759_Jerusalem_Malcha_mall_%D7%A7%D7%A0%D7%99%D7%95%D7%9F_%D7%9E%D7%9C%D7%97%D7%94_%D7%91%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D.jpg' },
    { city: 'jerusalem', type: 'touristic', name: 'Old City', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Jerusalem%2C_The_Old_city%2C_City_walls_%2826%29.jpg' },
    { city: 'jerusalem', type: 'archeology', name: 'City of David', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/City_of_David_20170421_100538701.jpg' },
    { city: 'jerusalem', type: 'trails', name: 'Jerusalem Trail', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Jerusalem_March_2014_%2815365772748%29.jpg' },
    { city: 'jerusalem', type: 'religious', name: 'Great synagogue', image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/88835_the_great_synagogue_PikiWiki_Israel.jpg' },
    { city: 'jerusalem', type: 'mall', name: 'Hadar Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/%D7%A7%D7%A0%D7%99%D7%95%D7%9F_%D7%94%D7%93%D7%A8_%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D.jpg' },
    { city: 'jerusalem', type: 'touristic', name: 'Baka Promenade', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/BakaaBoardwalk03_ST_12.JPG' },
    { city: 'jerusalem', type: 'archeology', name: 'Western Wall tunnels', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Western_Wall_at_night_%2820063%29.jpg' },
    { city: 'jerusalem', type: 'trails', name: 'Jerusalem Hills Trail', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/JerusalemMountainsB.jpg' },
    { city: 'jerusalem', type: 'religious', name: 'Kotel', image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Jerusalem_Old_City_Western_Wall_%28Wailing_Wall%2C_Kotel%2C_or_Buraq_Wall%29_%2829306071598%29.jpg' },
    { city: 'jerusalem', type: 'mall', name: 'Central Bus Station', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Jerusalem-Central-bus-station.jpg' },
    { city: 'jerusalem', type: 'touristic', name: 'Mamilla', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/PikiWiki_Israel_12671_mamilla_pedestrian_jerusalem.jpg' },
    { city: 'jerusalem', type: 'trails', name: 'Ein Lavan Trail', image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Ein_Lavan_oct2020-1.jpg' },
    { city: 'jerusalem', type: 'religious', name: 'Temple Mount', image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/16-04-04-Felsendom-Tempelberg-Jerusalem-RalfR-WAT_6559-6565.jpg' },
    { city: 'jerusalem', type: 'mall', name: 'Center 1 Shopping Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Jerusalem_Pisgat_Zeev_Center_Mall_and_Light_Rail_station.jpg' },
    { city: 'jerusalem', type: 'touristic', name: 'Mea Shearim', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Mea_Shearim_StreetsA.jpg' },
    { city: 'jerusalem', type: 'trails', name: 'Sataf Nature Reserve', image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Ein_Sataf_P1010451.JPG' },
    { city: 'jerusalem', type: 'religious', name: 'Hurva Synagogue', image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Hurva_Synagogue_07112018.jpg' },
    { city: 'jerusalem', type: 'touristic', name: 'Mont Scopus', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/In_Jerusalem_27.jpg' },
    { city: 'jerusalem', type: 'archeology', name: 'The Tower of David Museum', image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Tower_of_David_Yard.jpg' },
    { city: 'jerusalem', type: 'trails', name: 'Ein Prat', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Palestine%2C_Wadi_Qelt%2C_%28Landscape_22%29.jpg' },
    { city: 'haifa', type: 'religious', name: 'Bahai Shrine', image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bahai_Shrine_-_Haifa_%282245818821%29.jpg' },
    { city: 'haifa', type: 'mall', name: 'Grand Canyon Haifa', image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Grand_Canyon_Haifa_%2817%29.JPG' },
    { city: 'haifa', type: 'touristic', name: 'Louis Promenade', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Louis_Promenade_Haifa.jpg' },
    { city: 'haifa', type: 'trails', name: 'Hiking the Carmel', image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Wadi_Lotem_trail_looking_up.jpg' },
    { city: 'haifa', type: 'religious', name: 'Stella Maris Monastery', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/97477_stella_maris_monastery_PikiWiki_Israel.jpg' },
    { city: 'haifa', type: 'touristic', name: 'German Colony', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/German_Colony_%288115431902%29.jpg' },
    { city: 'haifa', type: 'archeology', name: 'City Ruins of Tel Dor', image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Nahsholim-Tel-Dor-2956.jpg' },
    { city: 'haifa', type: 'religious', name: 'Elijahs Cave', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Elijah%27s_cave_1.JPG' },
    { city: 'haifa', type: 'touristic', name: 'Bat Galim', image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Bat_Galim_neighborhood_and_Haifa_Bay.jpg' },
    { city: 'haifa', type: 'trails', name: 'Nesher Park', image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Nesher%2C_Park_Nesher%2C_Wadi_Katia_079.JPG' },
    { city: 'haifa', type: 'mall', name: 'Lev HaMifratz Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lev_Hamifratz-Citymall.JPG' },
    { city: 'haifa', type: 'archeology', name: 'Mount Carmel Caves', image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Cave_on_Giv%27at_Ha-Izim%2C_Haifa_%28DSC0401%29.jpg' },
    { city: 'haifa', type: 'religious', name: 'The Great Synagogue', image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/PikiWiki_Israel_82357_the_great_synagogue_in_haifa.jpg' },
    { city: 'haifa', type: 'mall', name: 'Azrieli Mall Haifa', image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Haifa_9568.JPG' },
    { city: 'haifa', type: 'touristic', name: 'The German Colony', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/German_Colony_%288115431902%29.jpg' },
    { city: 'haifa', type: 'archeology', name: 'Roman Road in Haifa', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Trekking_the_Old_Roman_Road.jpg' },
    { city: 'haifa', type: 'trails', name: 'Haifas Beach', image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Dado_beach_1.jpg' },
    { city: 'haifa', type: 'touristic', name: 'Haifa Educational Zoo', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Israel_Batch_2_%28318%29.JPG' },
    { city: 'haifa', type: 'archeology', name: 'Carmel Mountain', image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/View_of_Medditeranean_Sea_from_Carmel_mountains..JPG' },
    { city: 'haifa', type: 'trails', name: 'The Ramchal Synagogue', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Acco_Ramhal_Synagogue_IMG_0284.JPG' },
    { city: 'haifa', type: 'mall', name: 'Cinema Mall Haifa', image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Lev_HaMifratz.jpg' },
    { city: 'haifa', type: 'touristic', name: 'Haifa Cable Car', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Haifa_cable_car.jpg' },
    { city: 'haifa', type: 'trails', name: 'Nesher Park', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Nesher%2C_Park_Nesher%2C_Wadi_Katia_076.JPG' },
    { city: 'haifa', type: 'mall', name: 'Castra Center', image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Castra_Mall.JPG' },
    { city: 'haifa', type: 'touristic', name: 'Stella Maris Light', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Stella_Maris_Lighthouse.jpg' },
    { city: 'akko', type: 'mall', name: 'Azraeli Akko', image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/PikiWiki_Israel_28178_Azrieli_mall_in_Acre.JPG' },
    { city: 'akko', type: 'touristic', name: 'Citadel', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/The_Citadel%2C_Akko_%282221388779%29.jpg' },
    { city: 'akko', type: 'archeology', name: 'Crusader Citadel', image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Akko-Citadel.jpg' },
    { city: 'akko', type: 'trails', name: 'Akko Promenade', image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Akko_-5_%283279476186%29.jpg' },
    { city: 'akko', type: 'mall', name: 'Akko Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Akko%2C_September_2015_%28574%29.jpg' },
    { city: 'akko', type: 'touristic', name: 'Old City of Akko', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Akko_%2830155416320%29.jpg' },
    { city: 'akko', type: 'archeology', name: 'Templar Tunnel', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Templars_Tunnel_-_Crusader_Structure_-_Akko_%28Acre%29_-_Israel_%285693889442%29.jpg' },
    { city: 'akko', type: 'religious', name: 'Or Torah Synagogue', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/PikiWiki_Israel_28234_Mosaic_in_Or_Torah_synagogue.JPG' },
    { city: 'akko', type: 'mall', name: 'Akko Port', image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Port_of_Akko_%28670097%29.jpg' },
    { city: 'akko', type: 'touristic', name: 'Market Akko Port', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/PikiWiki_Israel_14857_OLD_AKKO.jpg' },
    { city: 'akko', type: 'archeology', name: 'Akkos Old City', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Old_City_of_Akko_%282221388073%29.jpg' },
    { city: 'akko', type: 'religious', name: 'The Ramchal Synagogue', image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/91571_the_synagogue_named_after_the_ramchal_PikiWiki_Israel.jpg' },
    { city: 'akko', type: 'religious', name: 'The Ramchal Tomb', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/91874_ramhal_tombstone_in_kefar_yassif_cemetery_PikiWiki_Israel.jpg' },
    { city: 'hadera', type: 'mall', name: 'Ofer Lev Hadera', image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Hadera_mall.JPG' },
    { city: 'hadera', type: 'touristic', name: 'Hadera River Park', image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/PikiWiki_Israel_45311_Hadera_River_park.JPG' },
    { city: 'hadera', type: 'trails', name: 'Nahal Hadera Park', image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/92154_nahal_hadera_park_PikiWiki_Israel.jpg' },
    { city: 'hadera', type: 'religious', name: 'Ohel Yaakov Synagogue', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Ohel_Yaakov_sinagogue_Zichron_Yaacov_from_north_east.jpg' },
    { city: 'hadera', type: 'mall', name: 'Mall Hahof Village', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Village_Mall_Hadera_5.jpg' },
    { city: 'hadera', type: 'touristic', name: 'Hadera Beach', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Hadera_beach_2017.jpg' },
    { city: 'hadera', type: 'archeology', name: 'Tel Shikmona', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tel_Shikmona_excavations_September_2011_%2811%29.JPG' },
    { city: 'hadera', type: 'touristic', name: 'Hadera Stream', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Hadera_East_Train_Station_-_Bridge_over_Hadera_stream_West_view.jpg' },
    { city: 'hadera', type: 'archeology', name: 'Archeaological Park', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Eco_park_Hadera.jpg' },
    { city: 'beersheva', type: 'touristic', name: 'Abraham Well International Visitors Center', image: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Beer-Shava-Avrahams-Well-443.jpg' },
    { city: 'beersheva', type: 'archeology', name: 'Tel Beer Sheva National Park', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Tel-Sheva-300.jpg' },
    { city: 'beersheva', type: 'trails', name: 'Ramon Crater', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Israel-2013-Aerial_00-Negev-Makhtesh_Ramon.jpg' },
    { city: 'beersheva', type: 'touristic', name: 'Negev Museum of Art', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Beersheba%2C_Negev_Art_Museum_01.jpg' },
    { city: 'beersheva', type: 'archeology', name: 'Abraham Well', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/PikiWiki_Israel_53921_abraham_well.jpg' },
    { city: 'beersheva', type: 'trails', name: 'Beer Sheva River Park', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/PikiWiki_Israel_4462_Park_River_Beer_-_Sheva.JPG' },
    { city: 'beersheva', type: 'religious', name: 'Yeshivat Hanegev', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/%D7%94%D7%91%D7%A0%D7%99%D7%99%D7%9F_%D7%94%D7%9E%D7%A8%D7%9B%D7%96%D7%99_%D7%A9%D7%9C_%D7%99%D7%A9%D7%99%D7%91%D7%AA_%D7%94%D7%A0%D7%92%D7%91.jpg' },
    { city: 'beersheva', type: 'mall', name: 'Grand Canyon Beer Sheva', image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/PikiWiki_Israel_57421_grand_mall_of_beersheba.jpg' },
    { city: 'beersheva', type: 'touristic', name: 'Old City of Beer Sheva', image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/30221-Beer-Sheva_%2829028984886%29.jpg' },
    { city: 'beersheva', type: 'archeology', name: 'Horvat Uza', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/PikiWiki_Israel_9098_Hirbat_Uzza.JPG' },
    { city: 'beersheva', type: 'mall', name: 'Hanegev Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Beersheba%2C_Negev_Mall_01.jpg' },
    { city: 'beersheva', type: 'trails', name: 'British Military Cemetery', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Beer-Sheva-British-Cemetery-737.jpg' },
    { city: 'ashdod', type: 'touristic', name: 'Ashdod Beach', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Lido_Beach%2C_Ashdod%2C_November_2023.jpg' },
    { city: 'ashdod', type: 'archeology', name: 'Tel Ashdod', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/%D7%A9%D7%93%D7%A8%D7%95%D7%AA_%D7%AA%D7%9C_%D7%97%D7%99_%D7%91%D7%90%D7%A9%D7%93%D7%95%D7%93%2C_%D7%90%D7%A4%D7%A8%D7%99%D7%9C_2024_01.jpg' },
    { city: 'ashdod', type: 'trails', name: 'Ashdod Yam Park', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/%D7%94%D7%90%D7%92%D7%9D_%D7%94%D7%9E%D7%9C%D7%90%D7%9B%D7%95%D7%AA%D7%99_%D7%91%D7%A4%D7%90%D7%A8%D7%A7_%D7%90%D7%A9%D7%93%D7%95%D7%93-%D7%99%D7%9D%2C_%D7%A4%D7%91%D7%A8%D7%95%D7%90%D7%A8_2024_02.jpg' },
    { city: 'ashdod', type: 'religious', name: 'The Big Synagogue of Ashdod', image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Karaim_sinagog_Ashdod.jpg' },
    { city: 'ashdod', type: 'touristic', name: 'Ashdod Art Museum', image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/%D7%9E%D7%95%D7%96%D7%99%D7%90%D7%95%D7%9F_%D7%90%D7%A9%D7%93%D7%95%D7%93_%D7%9C%D7%90%D7%9E%D7%A0%D7%95%D7%AA%2C_%D7%93%D7%A6%D7%9E%D7%91%D7%A8_2023_07.jpg' },
    { city: 'ashdod', type: 'mall', name: 'MonArt Arts Center', image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Museum_%5E_Arts_Center%2C_Ashdod_-_panoramio_%281%29.jpg' },
    { city: 'ashdod', type: 'archeology', name: 'The Eye of the Sun', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/%D7%9B%D7%99%D7%9B%D7%A8_%D7%A2%D7%99%D7%9F_%D7%94%D7%A9%D7%9E%D7%A9_%28%D7%94%D7%99%D7%95%D7%91%D7%9C%29_%D7%91%D7%90%D7%A9%D7%93%D7%95%D7%93%2C_%D7%93%D7%A6%D7%9E%D7%91%D7%A8_2023_08.jpg' },
    { city: 'eilat', type: 'mall', name: 'Ice Mall', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Eilat_Ice_Mall_2.jpg' },
    { city: 'eilat', type: 'touristic', name: 'beach', image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Eilat_IMG_2097.JPG' },
    { city: 'eilat', type: 'trails', name: 'Timna Park', image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Timna_park_22.jpg' },
    { city: 'eilat', type: 'religious', name: 'Kings City', image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/PikiWiki_Israel_41817_Kings_City_in_Eilat.JPG' },
    { city: 'eilat', type: 'touristic', name: 'Eilat Coral Beach Nature Reserve', image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Corals_in_Eilat_coral_reef_nature_reserve_2.jpg' },
    { city: 'eilat', type: 'archeology', name: 'Eilat Mountains', image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Eilat_Mountains_4.jpg' },
    { city: 'eilat', type: 'trails', name: 'Dolphin Reef', image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/DOLPHIN_REEF_EILAT%2C_ISRAEL-_It_is_on_the_shores_of_the_Red_Sea_in_the_southernmost_corner_of_Israel_offers_natural_views%2C_secluded_beach_and_opportunity_to_meet_dolphins_in_their_natural_habitat._%2818%29.jpg' },
    { city: 'eilat', type: 'religious', name: 'Red Canyon', image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Red-Canyon-200910-4959.jpg' },
    { city: 'eilat', type: 'mall', name: 'Eilat City Center', image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/PikiWiki_Israel_41792_Eilat_lagoon.JPG' },
    { city: 'eilat', type: 'touristic', name: 'Eilat Underwater Observatory Marine Park', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/PikiWiki_Israel_8126_underwater_observatory_in_eilat.jpg' },
    { city: 'eilat', type: 'archeology', name: 'Eilat Promenade', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Eilat_Promenade_08.JPG' }
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
