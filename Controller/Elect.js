const Electronics = (req, res) => {
  const electronics=[
            {
              name: 'Dell XPS 15',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://m.media-amazon.com/images/I/714TjZtB+hL._AC_UY218_.jpg',
              price: 89990,
              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
            },
            {
              name: 'HP Spectre x360',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://m.media-amazon.com/images/I/61gB8eMivdL._AC_UY218_.jpg',
              price: 79990,
              rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
            },
            {
              name: 'Lenovo ThinkPad X1 Carbon',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://m.media-amazon.com/images/I/51Bxs7x4X3L._AC_UY218_.jpg',
              price: 94990,
              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
            },
            {
              name: 'Asus ROG Zephyrus G14',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://m.media-amazon.com/images/I/71Bfs-CYp2L._AC_UY218_.jpg',
              price: 109990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
            },
            {
              name: 'MacBook Pro M1',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_UY218_.jpg',
              price: 119990,
              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
            },
            {
              name: 'Acer Swift 3',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://m.media-amazon.com/images/I/81eW38mGOWL._AC_UY218_.jpg',
              price: 54990,
              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
            },
            {
              name: 'Microsoft Surface Laptop 4',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://m.media-amazon.com/images/I/61gB8eMivdL._AC_UY218_.jpg',
              price: 96990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
            },
            {
              name: 'LG Gram 16',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/z/s/h/lg-gram-17z90q-g-aj56a2-lg-gram-17z90q-g-aj56a2-thin-and-light-original-imagh89bb46w757z.jpeg?q=70',
              price: 124990,
              rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
            },
            {
              name: 'Razer Blade 15',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://m.media-amazon.com/images/I/61wi86i8CZL._AC_UY218_.jpg',
              price: 139990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
            },
            {
              name: 'MSI GS66 Stealth',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://m.media-amazon.com/images/I/71uFzUMvbOL._AC_UY218_.jpg',
              price: 169990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
            },
            {
              name: 'Lenovo Yoga C940',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://rukminim2.flixcart.com/image/312/312/tablet/g/w/k/lenovo-yt3-850m-original-imaemzaj7nh6pzzf.jpeg?q=70',
              price: 98990,
              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
            },
            {
              name: 'HP Envy x360',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://rukminim2.flixcart.com/image/312/312/khnqqa80/computer/f/j/q/hp-original-imafxmf4quzduemy.jpeg?q=70',
              price: 72990,
              rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
            },
            {
              name: 'Acer Predator Helios 300',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://rukminim2.flixcart.com/image/312/312/l4ei1e80/computer/0/t/0/-original-imagfbayfqxfz5hm.jpeg?q=70',
              price: 109990,
              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
            },
            {
              name: 'Dell Inspiron 14',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/p/f/x/-original-imaghzahmt9zphps.jpeg?q=70',
              price: 59990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
            },
            {
              name: 'Lenovo Legion 5',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://rukminim2.flixcart.com/image/312/312/kk76wsw0/computer/h/j/o/lenovo-original-imafzhsyzryckmew.jpeg?q=70',
              price: 88990,
              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
            },
            {
              name: 'Asus VivoBook S15',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://rukminim2.flixcart.com/image/312/312/j8uiljk0/computer/f/9/h/asus-s510un-bq139t-s510un-thin-and-light-laptop-original-imaeyfp5tpbgbumf.jpeg?q=70',
              price: 63990,
              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
            },
            {
              name: 'MSI Prestige 15',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://m.media-amazon.com/images/I/718AiQQtJBL._AC_UY218_.jpg',
              price: 109990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
            },
            {
              name: 'Huawei MateBook X Pro',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/i/c/thinkbook-14-business-laptop-lenovo-original-imagrdefsyawe4fv.jpeg?q=70',
              price: 129990,
              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
            },
            {
              name: 'Samsung Galaxy Book Flex 2',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://rukminim2.flixcart.com/image/312/312/l37mtu80/computer/o/o/w/np750xee-xb1in-thin-and-light-laptop-samsung-original-imagednvzzu7t23v.jpeg?q=70',
              price: 112990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
            },
            {
              name: 'Sony VAIO Z',
              category: 'laptop',
              maincategory:"Electronics",
              img: 'https://rukminim2.flixcart.com/image/312/312/kt8zb0w0/computer/n/m/v/inspiron-3511-thin-and-light-laptop-dell-original-imag6n5kbmfcgxk6.jpeg?q=70',
              price: 179990,
              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
            },
                {
                  name: 'Sony WF-1000XM4',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/214Ck7MfbRL._SY300_SX300_QL70_FMwebp_.jpg',
                  price: 17990,
                  rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                },
                {
                  name: 'Bose QuietComfort Earbuds',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/51G45qLluWL._AC_UY218_.jpg',
                  price: 19990,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                },
                {
                  name: 'Samsung Galaxy Buds Live',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/61G5JoU9tTL._AC_UY218_.jpg',
                  price: 12990,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                },
                {
                  name: 'Jabra Elite 75t',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/610K5CYx6fL._AC_UY218_.jpg',
                  price: 13990,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                },
                {
                  name: 'Apple AirPods 3',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/615ekapl+pL._AC_UY218_.jpg',
                  price: 14990,
                  rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                },
                {
                  name: 'Google Pixel Buds',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/61rPqsDQ-ZL._AC_UY218_.jpg',
                  price: 15990,
                  rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                },
                {
                  name: 'Anker Soundcore Liberty Air 2 Pro',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/31EUMeQDumL._AC_UY218_.jpg',
                  price: 7990,
                  rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                },
                {
                  name: 'Sennheiser Momentum True Wireless 2',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/81D1ztnaGBL._AC_UY218_.jpg',
                  price: 18990,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                },
                {
                  name: 'OnePlus Buds Pro',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/51jJs-kCh6S._AC_UY218_.jpg',
                  price: 16990,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                },
                {
                  name: 'Skullcandy Indy Evo',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/6119HR9g38L._AC_UY218_.jpg',
                  price: 6990,
                  rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                },
                {
                  name: 'Sony WF-SP800N',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/71+tGw-CD9L._AC_UY218_.jpg',
                  price: 11990,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                },
                {
                  name: 'Beats Studio Buds',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/51bRSWrEc7S._AC_UY218_.jpg',
                  price: 14990,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                },
                {
                  name: 'Panasonic RZ-S500W',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/511j2gJPSkL._AC_UY218_.jpg',
                  price: 8990,
                  rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                },
                {
                  name: 'Sennheiser CX True Wireless',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/61lV0xcVp1S._AC_UY218_.jpg',
                  price: 20990,
                  rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                },
                {
                  name: 'SoundPEATS TrueFree2',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/61YTjEdKlzL._AC_UY218_.jpg',
                  price: 3990,
                  rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                },
                {
                  name: '1MORE Stylish True Wireless',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/615M503MA9L._AC_UY218_.jpg',
                  price: 5990,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                },
                {
                  name: 'Skullcandy Sesh Evo',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/71e5bSW1U9L._AC_UY218_.jpg',
                  price: 4990,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                },
                {
                  name: 'Xiaomi Mi True Wireless Earphones 2 Basic',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/61UpbxB6SmL._AC_UY218_.jpg',
                  price: 2990,
                  rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                },
                {
                  name: 'CrossBeats Neopods 300 TWS ',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/51QuNrHOpQL._AC_UY218_.jpg',
                  price: 2490,
                  rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                },
                {
                  name: 'Mivi DuoPods A850',
                  category: 'earbud',
                  maincategory:"Electronics",
                  img: 'https://m.media-amazon.com/images/I/71MQy4zRwvL._AC_UY218_.jpg',
                  price: 1990,
                  rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                },
                    {
                      name: 'LG OLED CX',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/61NSv0qsydL._AC_UY218_.jpg',
                      price: 149990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                    {
                      name: 'Samsung QN90A QLED',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/91RMUYY13VS._AC_UY218_.jpg',
                      price: 169990,
                      rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                    },
                    {
                      name: 'Sony Bravia A8H OLED',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/819733naKAL._AC_UY218_.jpg',
                      price: 179990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                    {
                      name: 'LG OLED G1',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/81H5mcFf2eL._AC_UY218_.jpg',
                      price: 189990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                    },
                    {
                      name: 'Samsung Q80T QLED',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/81dWRDhhDbL._AC_UY218_.jpg',
                      price: 129990,
                      rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                    },
                    {
                      name: 'Sony X950H',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/819733naKAL._AC_UY218_.jpg',
                      price: 119990,
                      rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                    },
                    {
                      name: 'TCL 6-Series',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/61aiEjFEiFL._AC_UY218_.jpg',
                      price: 79990,
                      rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                    },
                    {
                      name: 'Vizio P-Series Quantum X',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/51cKM7p7SHL._AC_UY218_.jpg',
                      price: 109990,
                      rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                    },
                    {
                      name: 'SkyWall Smart LED TV 32SWELS-PRO',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/71KVP1kQbyL._AC_UY218_.jpg',
                      price: 94990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                    {
                      name: 'Samsung TU8000 Crystal UHD',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/81+JXgPUDLL._AC_UY218_.jpg',
                      price: 54990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                    {
                      name: 'LG NanoCell 85',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/61LWRPDmN+L._AC_UY218_.jpg',
                      price: 67990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                    {
                      name: 'Hisense H8G Quantum',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/81QzYGPkNeL._AC_UY218_.jpg',
                      price: 72990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                    },
                    {
                      name: 'Sony X800H',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/81wxS8abrgL._AC_UY218_.jpg',
                      price: 59990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                    {
                      name: 'Samsung The Frame',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/81xT3no1+6L._AC_SR180,120_QL70_.jpg',
                      price: 84990,
                      rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                    },
                    {
                      name: 'LG UN7300',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/91hh01sNRDL._AC_UY218_.jpg',
                      price: 44990,
                      rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                    },
                    {
                      name: 'Toshiba Fire TV Edition',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/81jfNX79FaL._AC_UY218_.jpg',
                      price: 37990,
                      rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                    },
                    {
                      name: 'Karbon 109 Ultra HD',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/81BYBV13yhL._AC_UY218_.jpg',
                      price: 129990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                    },
                    {
                      name: 'Sansui Q60T QLED',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/71hiv8Tni9L._AC_UY218_.jpg',
                      price: 74990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                    {
                      name: 'Vizio M-Series Quantum',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/61UXeN9SklL._AC_UY218_.jpg',
                      price: 84990,
                      rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                    },
                    {
                      name: 'Sony A8G OLED',
                      category: 'television',
                      maincategory:"Electronics",
                      img: 'https://m.media-amazon.com/images/I/71EFqckgJOL._AC_UY218_.jpg',
                      price: 159990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                        {
                          name: 'Sony Alpha a7 III',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/713xBPyXC-L._AC_UY218_.jpg',
                          price: 129990,
                          rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                        },
                        {
                          name: 'Canon EOS R6',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/417qOfz33wL._AC_UY218_.jpg',
                          price: 239990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                        },
                        {
                          name: 'Nikon Z6 II',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/91rYykQZ7yL._AC_UY218_.jpg',
                          price: 209990,
                          rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                        },
                        {
                          name: 'Fujifilm X-T4',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/611N5mv+dNL._AC_UY218_.jpg',
                          price: 179990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'Sony Alpha ILCE-6600',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/81IlOdmyimL._AC_UY218_.jpg',
                          price: 94990,
                          rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                        },
                        {
                          name: 'Canon EOS RP',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/61awaxugudL._AC_UY218_.jpg',
                          price: 89990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'Nikon Z5',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/51+7Guk8aGL._AC_UY218_.jpg',
                          price: 109990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                        },
                        {
                          name: 'Panasonic Lumix GH5',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/61PqHR+O5qL._AC_UY218_.jpg',
                          price: 149990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'Sony RX100 VII',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/718DfOPtpqL._AC_UY218_.jpg',
                          price: 109990,
                          rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                        },
                        {
                          name: 'Fujifilm X-T4',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/71BtxnjY0aL._AC_UY218_.jpg',
                          price: 184990,
                          rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                        },
                        {
                          name: 'Canon EOS M50 Mark II',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/61Uw1y8QknL._AC_UY218_.jpg',
                          price: 59990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'Nikon D7500',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/613pf1JTs9L._AC_UY218_.jpg',
                          price: 79990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'Sony A6100',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/81lghf1fdzL._AC_UY218_.jpg',
                          price: 54990,
                          rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                        },
                        {
                          name: 'Canon PowerShot G7 X Mark III',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/81ap5aHOZdL._AC_UY218_.jpg',
                          price: 54990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                        },
                        {
                          name: 'Nikon D5600',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/613pf1JTs9L._AC_UY218_.jpg',
                          price: 49990,
                          rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                        },
                        {
                          name: 'Fujifilm X-S10',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/61ztRePYVKL._AC_UY218_.jpg',
                          price: 79990,
                          rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                        },
                        {
                          name: 'Sony RX10 IV',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/813ARt4eJAL._AC_UY218_.jpg',
                          price: 114990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'Canon EOS M6 Mark II',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/51oG29GHwQL._AC_UY218_.jpg',
                          price: 64990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'Nikon Coolpix P1000',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/9196pvn2cvL._AC_UY218_.jpg',
                          price: 89990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'Fujifilm Instax Square SQ6',
                          category: 'camera',
                          maincategory:"Electronics",
                          img: 'https://m.media-amazon.com/images/I/91NklRnLr5L._AC_UY218_.jpg',
                          price: 74990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                            {
                              name: 'Sony WH-1000XM4',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_UY218_.jpg',
                              price: 24990,
                              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                            },
                            {
                              name: 'Bose QuietComfort 35 II',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/51CHPyFpnoL._AC_UY218_.jpg',
                              price: 19990,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'Sennheiser HD 660S',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/81xKwnEO3fL._AC_UY218_.jpg',
                              price: 31990,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'Beats Studio 3',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/61DqKs7xflL._AC_UY218_.jpg',
                              price: 20990,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'JBL Quantum 800',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/712zz31jpaL._AC_UY218_.jpg',
                              price: 16990,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'Infinity - JBL Tranz 710',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/716Il5U5F4L._AC_UY218_.jpg',
                              price: 11990,
                              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                            },
                            {
                              name: 'Beyerdynamic DT 990 Pro',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/71LQ3iaQgJL._AC_UY218_.jpg',
                              price: 14990,
                              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                            },
                            {
                              name: 'AKG K701',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/61N0bdpnjOL._AC_UY218_.jpg',
                              price: 12990,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'Sony WH-1000XM5',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/61vJtKbAssL._AC_UY218_.jpg',
                              price: 16990,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'Boult Audio Anchor',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/715jcYvT9pL._AC_UY218_.jpg',
                              price: 17990,
                              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                            },
                            {
                              name: 'Sennheiser HD 599',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/8182xOzfS2L._AC_UY218_.jpg',
                              price: 14990,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                            },
                            {
                              name: 'Beats Solo Pro',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/61BehGyHzHL._AC_UY218_.jpg',
                              price: 18990,
                              rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                            },
                            {
                              name: 'JBL E55BT',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/41Pm1vqeElL._AC_UY218_.jpg',
                              price: 9990,
                              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                            },
                            {
                              name: 'boAt Rockerz 370 On Ear',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UY218_.jpg',
                              price: 15990,
                              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                            },
                            {
                              name: 'Beyerdynamic DT 770 Pro',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/71jMZrXSs6L._AC_UY218_.jpg',
                              price: 10990,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'AKG K240',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/813iLddOkJL._AC_UY218_.jpg',
                              price: 6990,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'Sony WH-CH700N',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/51rpbVmi9XL._AC_UY218_.jpg',
                              price: 12990,
                              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                            },
                            {
                              name: 'Bose SoundSport Wireless',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/71MU4Yq--ZL._AC_UY218_.jpg',
                              price: 9990,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'Sennheiser HD 280 Pro',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/615Nba6dy4L._AC_UY218_.jpg',
                              price: 7990,
                              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                            },
                            {
                              name:'boAt Rockerz 450 Bluetooth',
                              category: 'headphone',
                              maincategory:"Electronics",
                              img: 'https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY218_.jpg',
                              price: 15990,
                              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                            }
                          
                          ];
                        };

module.exports = { Electronics };

