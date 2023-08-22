const Gadgets = (req,res) => {
  const gadgets=[

            {
              name: 'DJI Mavic Air 2',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/51EweoEHyIL._AC_UL400_.jpg',
              price: 89990,
              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
            },
            {
              name: 'DJI Mini 2',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/71+W1oRtd8L._AC_UL400_.jpg',
              price: 44990,
              rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
            },
            {
              name: 'DJI Phantom 4 Pro V2.0',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/41vYWOrXW5L._AC_UL400_.jpg',
              price: 149990,
              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
            },
            {
              name: 'DJI Air 2S',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/71uH1ATOgGL._AC_UL400_.jpg',
              price: 124990,
              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
            },
            {
              name: 'Mustafa Ankit Gift Store Hx750',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/41C1bLTeRRL._AC_UL400_.jpg',
              price: 179990,
              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
            },
            {
              name: 'Skydio 2',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/51rHt2bCf1L._AC_UL400_.jpg',
              price: 239990,
              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
            },
            {
              name: 'CREODEC Premium Foldable',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/718Q+rh2i4L._AC_UL400_.jpg',
              price: 169990,
              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
            },
            {
              name: 'Yuneec Typhoon H Pro',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/619qpn6XjMS._AC_UL400_.jpg',
              price: 129990,
              rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
            },
            {
              name: 'Autel Robotics EVO Lite+',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/71Pr5oXBtvL._AC_UL400_.jpg',
              price: 94990,
              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
            },
            {
              name: 'PowerVision PowerEgg X',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/61wBB8kuk1L._AC_UL400_.jpg',
              price: 109990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
            },
            {
              name: 'Hubsan Zino 2',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/41FhndbQADL._AC_SR160160_.jpg',
              price: 54990,
              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
            },
            {
              name: 'Eachine E520S',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/51CwLzC88OL._AC_UL400_.jpg',
              price: 19990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
            },
            {
              name: 'Holy Stone HS720E',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/51fbGQoa-LL._AC_UL400_.jpg',
              price: 31990,
              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
            },
            {
              name: 'Potensic D88',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/61786NxtcfL._AC_UL400_.jpg',
              price: 20990,
              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
            },
            {
              name: 'JJRC X12 Aurora',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/61D3twXxuXL._AC_UL400_.jpg',
              price: 16990,
              rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
            },
            {
              name: 'DJI FPV Combo',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/51UovrqdZhL._AC_UL400_.jpg',
              price: 149990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
            },
            {
              name: 'Ruko F11 Pro',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/51tjK-94maL._AC_SR160160_.jpg',
              price: 109990,
              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
            },
            {
              name: 'SNAPTAIN SP500',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/51pP8W0BnmL._AC_UL400_.jpg',
              price: 79990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
            },
            {
              name: 'Altair Aerial AA300',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/51FCsBDXDhL._AC_UL400_.jpg',
              price: 72990,
              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
            },
            {
              name: 'DEERC DE25',
              category: 'drone',
              maincategory:'Gadgets',
              img: 'https://m.media-amazon.com/images/I/71VInvu0SQL._AC_UL400_.jpg',
              price: 59990,
              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
            },
                {
                  name: 'Anker PowerCore 26800mAh',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/71GfLIrtFUL._AC_UY218_.jpg',
                  price: 2499,
                  rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                },
                {
                  name: 'RAVPower 20000mAh Solar Power Bank',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/7121OpSKRqL._AC_UY218_.jpg',
                  price: 1999,
                  rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                },
                {
                  name: 'Xiaomi Mi Power Bank 3',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/71lVwl3q-kL._AC_UY218_.jpg',
                  price: 1299,
                  rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                },
                {
                  name: 'AUKEY 20000mAh Power Bank',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/61aOm+odphL._AC_UY218_.jpg',
                  price: 1499,
                  rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                },
                {
                  name: 'Amazon Basics 10000mAh',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/71ntdaCshUL._AC_UY218_.jpg',
                  price: 2199,
                  rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                },
                {
                  name: 'Ambrane 50000mAh Power Bank',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/51G234tF5NL._AC_UY218_.jpg',
                  price: 5499,
                  rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                },
                {
                  name: 'Anker PowerCore Slim 10000mAh',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/7171kGrCGGL._AC_UY218_.jpg',
                  price: 1499,
                  rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                },
                {
                  name: 'Romoss 30000mAh Lithium Polymer Power Bank',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/41BbF9CY7AL._AC_UY218_.jpg',
                  price: 2199,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                },
                {
                  name: 'Pikaasu Portable Laptop Powerbank',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/31Wx0qxTuDL._AC_UY218_.jpg',
                  price: 1999,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                },
                {
                  name: 'FLiX(Beetel) New Launch PowerXtreme ',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/41DteWz-zjL._AC_UY218_.jpg',
                  price: 2499,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                },
                {
                  name: 'URBN 20000 mAh 20W Metal Power Bank',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/717TP1noFxL._AC_UY218_.jpg',
                  price: 3299,
                  rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                },
                {
                  name: 'pTron Newly Launched Dynamo 10000mAh',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/61Vnl9McHPL._AC_UY218_.jpg',
                  price: 1699,
                  rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                },
                {
                  name: 'Xiaomi Mi Wireless Power Bank 10000mAh',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/61YrXCjFaFL._AC_UY218_.jpg',
                  price: 1999,
                  rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                },
                {
                  name: 'Redmi 20000mAh Power Bank',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/612TUnBWPpL._AC_UY218_.jpg',
                  price: 3499,
                  rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                },
                {
                  name: 'Duracell Power Bank 20000 mAh',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/71rIGQrFJ0L._AC_UY218_.jpg',
                  price: 1999,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                },
                {
                  name: 'Tempt - Booster 10000mAh Power Bank ',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/51agVfMXyFL._AC_UY218_.jpg',
                  price: 2299,
                  rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                },
                {
                  name: 'Belkin 10000 mAh Slim Power Bank ',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: ' https://m.media-amazon.com/images/I/31BoSTZ8dAL._AC_UY218_.jpg',
                  price: 1899,
                  rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                },
                {
                  name: 'MiLi Power Nova I 5000mAh',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/31Y0PLFtGSL._AC_SR120120_.jpg',
                  price: 1299,
                  rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                },
                {
                  name: 'Intex 10000 mAh Power Bank',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/power-bank/e/r/n/-original-imagpva4gv4tpr9z.jpeg?q=70',
                  price: 2199,
                  rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                },
                {
                  name: 'Anker PowerCore Lite 10000mAh',
                  category: 'powerbank',
                  maincategory:'Gadgets',
                  img: 'https://m.media-amazon.com/images/I/6142te88vDL._AC_UY218_.jpg',
                  price: 1599,
                  rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                },
                    {
                      name: 'Zebronics Pixaplay 11 Portable LED Projector',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/61Llgr7PJjL._AC_UY218_.jpg',
                      price: 79990,
                      rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                    },
                    {
                      name: 'BenQ HT2050A',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/417QMVQJPtL._AC_UY218_.jpg',
                      price: 69990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                    },
                    {
                      name: 'Optoma HD146X',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/417XAkhRLpL._SY300_SX300_QL70_FMwebp_.jpg',
                      price: 54990,
                      rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                    },
                    {
                      name: 'ViewSonic PX747-4K',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/51UmmB3PwhL._AC_SR180120_QL70_.jpg',
                      price: 89990,
                      rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                    },
                    {
                      name: 'TONZO X1 FULL HD 8K',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/41AIxFuc67L._AC_SR180120_QL70_.jpg',
                      price: 129990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                    {
                      name: 'Anker Nebula Capsule II',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/71IprLV6iaL._AC_UY218_.jpg',
                      price: 32990,
                      rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                    },
                    {
                      name: 'Sony VPL-HW45ES',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/61oO7iKFzgL._AC_UY218_.jpg',
                      price: 189990,
                      rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                    },
                    {
                      name: 'BenQ TK800M',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/61R-HPNirgL._AC_UY218_.jpg',
                      price: 124990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                    {
                      name: 'Optoma UHD50X',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/81JaT2GZvJL._AC_UY218_.jpg',
                      price: 159990,
                      rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                    },
                    {
                      name: 'ViewSonic M1 Mini',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/51Zz7lYxQZL._AC_UY218_.jpg',
                      price: 19990,
                      rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                    },
                    {
                      name: 'LG CineBeam PH550',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/51CJCac75PL._AC_UY218_.jpg',
                      price: 44990,
                      rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                    },
                    {
                      name: 'Anker Nebula Mars II Pro',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/71ux7Fa6O+L._AC_UY218_.jpg',
                      price: 49990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                    {
                      name: 'Epson Pro EX9220',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/81TTF60p+zL._SY355_.jpg',
                      price: 74990,
                      rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                    },
                    {
                      name: 'BenQ TH685',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/61L-LjYeP2L._AC_UY218_.jpg',
                      price: 84990,
                      rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                    },
                    {
                      name: 'Optoma HD28HDR',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/81JaT2GZvJL._AC_UY218_.jpg',
                      price: 64990,
                      rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                    },
                    {
                      name: 'ViewSonic PA503S',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/418nGJhVvRL._SX300_SY300_QL70_FMwebp_.jpg',
                      price: 39990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                    },
                    {
                      name: 'Lumens p-06 Full HD',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/611-AgnpEhL._AC_UY218_.jpg',
                      price: 29990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                    {
                      name: 'Anker Nebula Solar Portable',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/51PmHFE3LXL._AC_UY218_.jpg',
                      price: 29990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                    },
                    {
                      name: 'Epson VS250',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/31OE7VAl9SL._SY300_SX300_QL70_FMwebp_.jpg',
                      price: 49990,
                      rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                    },
                    {
                      name: 'BenQ GS50 4K Support 1080p LED',
                      category: 'projector',
                      maincategory:'Gadgets',
                      img: 'https://m.media-amazon.com/images/I/81WYafNtYEL._SY355_.jpg',
                      price: 54990,
                      rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                    },
                        {
                          name: 'Amazon Echo (4th Gen)',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/61dgl2srHDL._AC_UY218_.jpg',
                          price: 8499,
                          rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                        },
                        {
                          name: 'Google Nest Audio',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/71pCceFeJjL._AC_UY218_.jpg',
                          price: 6999,
                          rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                        },
                        {
                          name: 'Apple HomePod mini',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/91Rh8F1g3kL._AC_UY218_.jpg',
                          price: 9900,
                          rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                        },
                        {
                          name: 'Sonos One (Gen 2)',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/61U9dVIVOyL._AC_UY218_.jpg',
                          price: 24990,
                          rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                        },
                        {
                          name: 'Bose Home Speaker 500',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/811IL7wDDWL._AC_UY218_.jpg',
                          price: 29000,
                          rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                        },
                        {
                          name: 'Harman Kardon Citation 500',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/817Y-OrHG0L._AC_UY218_.jpg',
                          price: 52999,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                        },
                        {
                          name: 'Lenovo Smart Display 10',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/61tvDSnQBrL._AC_UY218_.jpg',
                          price: 14999,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'JBL Link 20',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/919qy1LWULL._AC_UY218_.jpg',
                          price: 12999,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'Sony SRS-XB501G',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/7111qJrHjrL._AC_UY218_.jpg',
                          price: 19990,
                          rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                        },
                        {
                          name: 'UE Blast',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/61FvmV7tV4L._AC_UY218_.jpg',
                          price: 12990,
                          rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                        },
                        {
                          name: 'Amazon Echo Show 8',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/51C+FWhW9xL._AC_UY218_.jpg',
                          price: 8999,
                          rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                        },
                        {
                          name: 'Google Nest Hub',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/61CDl7OygNL._AC_UY218_.jpg',
                          price: 9999,
                          rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                        },
                        {
                          name: 'Apple HomePod',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/81shNmZE1yL._AC_UY218_.jpg',
                          price: 19900,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                        },
                        {
                          name: 'Sonos Move',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/71FbQ4nEZfL._AC_UY218_.jpg',
                          price: 29990,
                          rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                        },
                        {
                          name: 'Bose SoundTouch 20 Series III',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/61mIlosRzsL._AC_UY218_.jpg',
                          price: 34500,
                          rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                        },
                        {
                          name: 'Harman Kardon Allure',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/71ecJTrTpUL._AC_UY218_.jpg',
                          price: 20999,
                          rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                        },
                        {
                          name: 'Lenovo Smart Clock',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/411oSUkxYeL._AC_UY218_.jpg',
                          price: 5499,
                          rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                        },
                        {
                          name: 'JBL Link 10',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/51oYDGieTnL._AC_UY218_.jpg',
                          price: 9999,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'Sony SRS-XB22',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/810Q0+UhiTL._AC_UY218_.jpg',
                          price: 7490,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                        },
                        {
                          name: 'UE Megablast',
                          category: 'smart_speaker',
                          maincategory:'Gadgets',
                          img: 'https://m.media-amazon.com/images/I/81SuShz41dS._AC_UY218_.jpg',
                          price: 18990,
                          rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                        },
                         {
                           name: 'Canon EOS 90D',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/81QKcQmJF7L._AC_UY218_.jpg',
                           price: 89990,
                           rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                         },
                         {
                           name: 'Nikon D850',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/71HJnJrxzEL._AC_UY218_.jpg',
                           price: 124990,
                           rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                         },
                         {
                           name: 'Sony Alpha a6400',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/81xVqY5JJJL._AC_UY218_.jpg',
                           price: 94990,
                           rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                         },
                         {
                           name: 'Fujifilm X-T4',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/71BtxnjY0aL._AC_UY218_.jpg',
                           price: 179990,
                           rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                         },
                         {
                           name: 'Panasonic Lumix GH5',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/61PqHR+O5qL._AC_UY218_.jpg',
                           price: 149990,
                           rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                         },
                         {
                           name: 'Sony Cyber-shot RX100 VII',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/61KPOmkkHvL._AC_UY218_.jpg',
                           price: 109990,
                           rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                         },
                         {
                           name: 'Canon PowerShot G7 X Mark III',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/81ap5aHOZdL._AC_UY218_.jpg',
                           price: 54990,
                           rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                         },
                         {
                           name: 'Nikon Z6',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/61z6uWpSIZS._AC_UY218_.jpg',
                           price: 209990,
                           rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                         },
                         {
                           name: 'Sony Alpha a7 III',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/713xBPyXC-L._AC_UY218_.jpg',
                           price: 129990,
                           rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                         },
                         {
                           name: 'Fujifilm X-T3',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/61YvYnczWiL._AC_UY218_.jpg',
                           price: 124990,
                           rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                         },
                         {
                           name: 'Canon EOS M50 Mark II',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/61zne3JPlQS._AC_UY218_.jpg',
                           price: 59990,
                           rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                         },
                         {
                           name: 'Nikon D7500 DX',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/61ka7JtBghL._AC_UY218_.jpg',
                           price: 49990,
                           rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                         },
                         {
                           name: 'Sony Alpha a6100',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/71ssb0GtgTL._AC_UY218_.jpg',
                           price: 54990,
                           rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                         },
                         {
                           name: 'Fujifilm X-S10',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/81U+yv+cj5L._AC_UY218_.jpg',
                           price: 159990,
                           rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                         },
                         {
                           name: 'Panasonic Lumix GX9',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/81TUnaSLzoL._AC_UY218_.jpg',
                           price: 59990,
                           rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                         },
                         {
                           name: 'Canon EOS Rebel T7i',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/71ZYVJGhPLL._AC_UY218_.jpg',
                           price: 74990,
                           rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                         },
                         {
                           name: 'Nikon Z50',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/91tkHspL3ZL._AC_UY218_.jpg',
                           price: 69990,
                           rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                         },
                         {
                           name: 'Sony Cyber-shot RX10 IV',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/61KPOmkkHvL._AC_UY218_.jpg',
                           price: 114990,
                           rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                         },
                         {
                           name: 'Fujifilm X-E4',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/81-hSS4d17L._AC_UY218_.jpg',
                           price: 74990,
                           rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                         },
                         {
                           name: 'Panasonic Lumix ZS200',
                           category: 'digital_camera',
                           maincategory:'Gadgets',
                           img: 'https://m.media-amazon.com/images/I/81G0LDC-geL._AC_UY218_.jpg',
                           price: 69990,
                           rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                         },
                            {
                              name: 'Anker PowerPort III Nano',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/41XbcQ9hhuL._AC_UY218_.jpg',
                              price: 799,
                              rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                            },
                            {
                              name: 'UNIGEN 30W USB-C Charger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/414R23Clu2L._AC_UY218_.jpg',
                              price: 999,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                            },
                            {
                              name: 'Belkin Boost Charge 18W USB-C Wall Charger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/41i2VYWNKQL._AC_UY218_.jpg',
                              price: 799,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'Samsung 25W USB-C Super Fast Charging Wall Charger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/51UbTU5B8SL._AC_UY218_.jpg',
                              price: 1499,
                              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                            },
                            {
                              name: 'Apple 20W USB-C Power Adapter',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/61vtLhO6fDL._AC_UY218_.jpg',
                              price: 1900,
                              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                            },
                            {
                              name: 'Amazon Basics 35W Wall Charger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/61wFPVRF2TL._AC_UY218_.jpg',
                              price: 2499,
                              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                            },
                            {
                              name: 'Anker PowerPort Atom III Slim',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/71V2G8gRcxL._AC_UY218_.jpg',
                              price: 3299,
                              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                            },
                            {
                              name: 'RAVPower 65W 4-Port Desktop Charger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/51yc2-2pS-L._AC_UY218_.jpg',
                              price: 2299,
                              rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                            },
                            {
                              name: 'Belkin Boost Charge 30W USB-C Wall Charger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/41-7bZ8PVDL._AC_UY218_.jpg',
                              price: 1499,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'CROSSVOLT PD GaN 65W PPS',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/61k0aO7LheL._AC_UY218_.jpg',
                              price: 2199,
                              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                            },
                            {
                              name: 'Mizi 48W USB C Wall Charger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/51nvOzS7H1L._AC_UY218_.jpg',
                              price: 1499,
                              rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                            },
                            {
                              name: 'WISTAR 65W 45W USB C Laptop Charger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/51+hKa8tkjL._AC_UY218_.jpg',
                              price: 2799,
                              rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                            },
                            {
                              name: 'Portronics Adapto 65X 65w',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/41pKEFcS7-L._AC_UY218_.jpg',
                              price: 1999,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'UNIGEN 20W Dual Port USBCharger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/41-OSuId-yL._AC_UY218_.jpg',
                              price: 3299,
                              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                            },
                            {
                              name: 'Oraimo 33W GaN Dual Port Fast Charger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/51VUWupqiyL._AC_UY218_.jpg',
                              price: 2299,
                              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                            },
                            {
                              name: 'ASUS AC65-00 65W USB Type-C Adapter/Charger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/61e-di07gvS._AC_UY218_.jpg',
                              price: 3499,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                            },
                            {
                              name: 'T TECLUSIVE Compact 65W Gan Charger ',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/518SOx6c2mL._AC_UY218_.jpg',
                              price: 6900,
                              rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                            },
                            {
                              name: 'AmazonBasics High Power 65W',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/61ODfXHV7tL._AC_UY218_.jpg',
                              price: 4499,
                              rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                            },
                            {
                              name: 'AndroidBazaar TurboCharge Series',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/51hNdH8eo6S._AC_UY218_.jpg',
                              price: 2999,
                              rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                            },
                            {
                              name: 'StuffHoods 65W Warp Charger',
                              category: 'charger',
                              maincategory:'Gadgets',
                              img: 'https://m.media-amazon.com/images/I/416mfYBnapL._AC_UY218_.jpg',
                              price: 4999,
                              rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                            },         
                          ];
                        };
module.exports={Gadgets}
// const addtocart = async (req, res) => {
//   const { userid } = req.body;
//   const _id = req.params.product_id;

//   const existingCart = await cart.findOne({ userid: userid, "products._id": _id });

//   if (existingCart) {
//       await cart.updateOne(
//           { userid: userid, "products._id": _id },
//           { $inc: { "products.$.quantity": 1 } }
//       );

//       const updatedCart = await cart.findOne({ userid: userid }).populate("products._id").populate("products.productData");
//       return res.send(updatedCart);
      
//   } else {
//       const productData = await product.findById(_id);
//       if (!productData) {
//           return res.status(404).send("Product not found");
//       }

//       const result = await cart.create({
//   userid: userid,
//   products: [{
//       _id: productData._id,
//       quantity: 1,
//       productData: productData.toObject()  // Store the entire productData object
//   }],
// });
//       return res.send(result);
//   }
// }