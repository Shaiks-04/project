const Electronics = (req, res) => {
    return res.send([
            {
              id: 1,
              name: 'Dell XPS 15',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹89,990'
            },
            {
              id: 2,
              name: 'HP Spectre x360',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹79,990'
            },
            {
              id: 3,
              name: 'Lenovo ThinkPad X1 Carbon',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹94,990'
            },
            {
              id: 4,
              name: 'Asus ROG Zephyrus G14',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹1,09,990'
            },
            {
              id: 5,
              name: 'MacBook Pro M1',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹1,19,990'
            },
            {
              id: 6,
              name: 'Acer Swift 3',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹54,990'
            },
            {
              id: 7,
              name: 'Microsoft Surface Laptop 4',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹96,990'
            },
            {
              id: 8,
              name: 'LG Gram 17',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹1,24,990'
            },
            {
              id: 9,
              name: 'Razer Blade 15',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹1,39,990'
            },
            {
              id: 10,
              name: 'MSI GS66 Stealth',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹1,69,990'
            },
            {
              id: 11,
              name: 'Lenovo Yoga C940',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹98,990'
            },
            {
              id: 12,
              name: 'HP Envy x360',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹72,990'
            },
            {
              id: 13,
              name: 'Acer Predator Helios 300',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹1,09,990'
            },
            {
              id: 14,
              name: 'Dell Inspiron 14',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹59,990'
            },
            {
              id: 15,
              name: 'Lenovo Legion 5',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹88,990'
            },
            {
              id: 16,
              name: 'Asus VivoBook S15',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹63,990'
            },
            {
              id: 17,
              name: 'MSI Prestige 15',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹1,09,990'
            },
            {
              id: 18,
              name: 'Huawei MateBook X Pro',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹1,29,990'
            },
            {
              id: 19,
              name: 'Samsung Galaxy Book Flex 2',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹1,12,990'
            },
            {
              id: 20,
              name: 'Sony VAIO Z',
              category: 'laptop',
              img: 'link_to_image_here',
              price: '₹1,79,990'
            },
                {
                  id: 21,
                  name: 'Sony WF-1000XM4',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹17,990'
                },
                {
                  id: 22,
                  name: 'Bose QuietComfort Earbuds',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹19,990'
                },
                {
                  id: 23,
                  name: 'Samsung Galaxy Buds Live',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹12,990'
                },
                {
                  id: 24,
                  name: 'Jabra Elite 75t',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹13,990'
                },
                {
                  id: 25,
                  name: 'Apple AirPods 3',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹14,990'
                },
                {
                  id: 26,
                  name: 'Google Pixel Buds',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹15,990'
                },
                {
                  id: 27,
                  name: 'Anker Soundcore Liberty Air 2 Pro',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹7,990'
                },
                {
                  id: 28,
                  name: 'Sennheiser Momentum True Wireless 2',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹18,990'
                },
                {
                  id: 29,
                  name: 'OnePlus Buds Pro',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹16,990'
                },
                {
                  id: 30,
                  name: 'Skullcandy Indy Evo',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹6,990'
                },
                {
                  id: 31,
                  name: 'Sony WF-SP800N',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹11,990'
                },
                {
                  id: 32,
                  name: 'Beats Studio Buds',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹14,990'
                },
                {
                  id: 33,
                  name: 'Panasonic RZ-S500W',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹8,990'
                },
                {
                  id: 34,
                  name: 'RHA TrueConnect 2',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹10,990'
                },
                {
                  id: 35,
                  name: 'SoundPEATS TrueFree2',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹3,990'
                },
                {
                  id: 36,
                  name: '1MORE Stylish True Wireless',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹5,990'
                },
                {
                  id: 37,
                  name: 'Skullcandy Sesh Evo',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹4,990'
                },
                {
                  id: 38,
                  name: 'Xiaomi Mi True Wireless Earphones 2 Basic',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹2,990'
                },
                {
                  id: 39,
                  name: 'Tronsmart Onyx Ace',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹2,490'
                },
                {
                  id: 40,
                  name: 'TaoTronics SoundLiberty 53',
                  category: 'earbud',
                  img: 'link_to_image_here',
                  price: '₹1,990'
                },
                    {
                      id: 41,
                      name: 'LG OLED CX',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹1,49,990'
                    },
                    {
                      id: 42,
                      name: 'Samsung QN90A QLED',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹1,69,990'
                    },
                    {
                      id: 43,
                      name: 'Sony Bravia A8H OLED',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹1,79,990'
                    },
                    {
                      id: 44,
                      name: 'LG OLED G1',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹1,89,990'
                    },
                    {
                      id: 45,
                      name: 'Samsung Q80T QLED',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹1,29,990'
                    },
                    {
                      id: 46,
                      name: 'Sony X950H',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹1,19,990'
                    },
                    {
                      id: 47,
                      name: 'TCL 6-Series',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹79,990'
                    },
                    {
                      id: 48,
                      name: 'Vizio P-Series Quantum X',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹1,09,990'
                    },
                    {
                      id: 49,
                      name: 'Sony X900H',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹94,990'
                    },
                    {
                      id: 50,
                      name: 'Samsung TU8000 Crystal UHD',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹54,990'
                    },
                    {
                      id: 51,
                      name: 'LG NanoCell 85',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹67,990'
                    },
                    {
                      id: 52,
                      name: 'Hisense H8G Quantum',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹72,990'
                    },
                    {
                      id: 53,
                      name: 'Sony X800H',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹59,990'
                    },
                    {
                      id: 54,
                      name: 'Samsung The Frame',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹84,990'
                    },
                    {
                      id: 55,
                      name: 'LG UN7300',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹44,990'
                    },
                    {
                      id: 56,
                      name: 'Toshiba Fire TV Edition',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹37,990'
                    },
                    {
                      id: 57,
                      name: 'Sony X950G',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹1,29,990'
                    },
                    {
                      id: 58,
                      name: 'Samsung Q60T QLED',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹74,990'
                    },
                    {
                      id: 59,
                      name: 'Vizio M-Series Quantum',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹84,990'
                    },
                    {
                      id: 60,
                      name: 'Sony A8G OLED',
                      category: 'television',
                      img: 'link_to_image_here',
                      price: '₹1,59,990'
                    },
                        {
                          id: 61,
                          name: 'Sony Alpha a7 III',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹1,29,990'
                        },
                        {
                          id: 62,
                          name: 'Canon EOS R6',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹2,39,990'
                        },
                        {
                          id: 63,
                          name: 'Nikon Z6 II',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹2,09,990'
                        },
                        {
                          id: 64,
                          name: 'Fujifilm X-T4',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹1,79,990'
                        },
                        {
                          id: 65,
                          name: 'Sony A6400',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹94,990'
                        },
                        {
                          id: 66,
                          name: 'Canon EOS RP',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹89,990'
                        },
                        {
                          id: 67,
                          name: 'Nikon Z5',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹1,09,990'
                        },
                        {
                          id: 68,
                          name: 'Panasonic Lumix GH5',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹1,49,990'
                        },
                        {
                          id: 69,
                          name: 'Sony RX100 VII',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹1,09,990'
                        },
                        {
                          id: 70,
                          name: 'Fujifilm X-T3',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹1,24,990'
                        },
                        {
                          id: 71,
                          name: 'Canon EOS M50 Mark II',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹59,990'
                        },
                        {
                          id: 72,
                          name: 'Nikon D7500',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹79,990'
                        },
                        {
                          id: 73,
                          name: 'Sony A6100',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹54,990'
                        },
                        {
                          id: 74,
                          name: 'Canon PowerShot G7 X Mark III',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹54,990'
                        },
                        {
                          id: 75,
                          name: 'Nikon D5600',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹49,990'
                        },
                        {
                          id: 76,
                          name: 'Fujifilm X100V',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹79,990'
                        },
                        {
                          id: 77,
                          name: 'Sony RX10 IV',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹1,14,990'
                        },
                        {
                          id: 78,
                          name: 'Canon EOS M6 Mark II',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹64,990'
                        },
                        {
                          id: 79,
                          name: 'Nikon Coolpix P1000',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹89,990'
                        },
                        {
                          id: 80,
                          name: 'Fujifilm X-E4',
                          category: 'camera',
                          img: 'link_to_image_here',
                          price: '₹74,990'
                        },
                            {
                              id: 81,
                              name: 'Sony WH-1000XM4',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹24,990'
                            },
                            {
                              id: 82,
                              name: 'Bose QuietComfort 35 II',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹19,990'
                            },
                            {
                              id: 83,
                              name: 'Sennheiser HD 660S',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹31,990'
                            },
                            {
                              id: 84,
                              name: 'Beats Studio 3',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹20,990'
                            },
                            {
                              id: 85,
                              name: 'JBL Quantum 800',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹16,990'
                            },
                            {
                              id: 86,
                              name: 'Audio-Technica ATH-M50x',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹11,990'
                            },
                            {
                              id: 87,
                              name: 'Beyerdynamic DT 990 Pro',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹14,990'
                            },
                            {
                              id: 88,
                              name: 'AKG K701',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹12,990'
                            },
                            {
                              id: 89,
                              name: 'Sony WH-XB900N',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹16,990'
                            },
                            {
                              id: 90,
                              name: 'Bose SoundLink Around-Ear II',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹17,990'
                            },
                            {
                              id: 91,
                              name: 'Sennheiser HD 599',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹14,990'
                            },
                            {
                              id: 92,
                              name: 'Beats Solo Pro',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹18,990'
                            },
                            {
                              id: 93,
                              name: 'JBL E55BT',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹9,990'
                            },
                            {
                              id: 94,
                              name: 'Audio-Technica ATH-MSR7',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹15,990'
                            },
                            {
                              id: 95,
                              name: 'Beyerdynamic DT 770 Pro',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹10,990'
                            },
                            {
                              id: 96,
                              name: 'AKG K240',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹6,990'
                            },
                            {
                              id: 97,
                              name: 'Sony WH-CH700N',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹12,990'
                            },
                            {
                              id: 98,
                              name: 'Bose SoundSport Wireless',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹9,990'
                            },
                            {
                              id: 99,
                              name: 'Sennheiser HD 280 Pro',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹7,990'
                            },
                            {
                              id: 100,
                              name: 'Beats Powerbeats Pro',
                              category: 'headphone',
                              img: 'link_to_image_here',
                              price: '₹15,990'
                            }
                          
]);
};

module.exports = { Electronics };