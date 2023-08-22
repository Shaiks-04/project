const Phone=(req,res)=>{
     const phone=[
        {
            name:'Vivo y17',
            category:'vivo',
            maincategory:'phone',
            img:'https://i.gadgets360cdn.com/products/large/1556105245_635_vivoy17_db.jpg?downsize=*:360',
            price:14990,
            rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
        },
        {
            name:'Redmi Note 9 pro max',
            category:'redmi',
            maincategory:'phone',
            img:'https://mobilegoo.shop/cdn/shop/products/Untitleddesign_1.jpg?v=1674641063&width=493',
            price:15490,
            rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
        },
        {
            name:'Samsung Galaxy S22 Ultra 5G',
            category:'samsung',
            maincategory:'phone',
            img:'https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UF8941000_QL80_.jpg',
            price:84500,
            rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
        },
        {
            name:'Realme narzo N55',
            category:'realme',
            maincategory:'phone',
            img:'https://specifications-pro.com/wp-content/uploads/2023/04/Realme-Narzo-N55.jpg',
            price:10999,
            rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
        },
        {
            name:'Oppo Reno6 5G',
            category:'oppo',
            maincategory:'phone',
            img:'https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6-pro-5g-oversea/navigation/Homepage-header2-artic-blue-427-x-600.png',
            price:12500,
            rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
        },
        {
            name:'realme Narzo 10',
            category:'realme',
            maincategory:'phone',
            img:'https://static.toiimg.com/thumb/resizemode-4msid-75694520imgsize-500width-800/75694520.jpg',
            price:11699,
            rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
        },
        {
            name:'Samsung Galaxy F23 5G',
            category:'samsung',
            maincategory:'phone',
            img:'https://www.jiomart.com/images/product/original/493666100/samsung-galaxy-f-series-f23-5g-128-gb-6-gb-ram-forest-green-mobile-phone-digital-o493666100-p600342532-0-202304101514.jpeg?im=Resize=(420420)',
            price:15499,
            rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
        },
        {
            name:'realme 9 pro plus',
            category:'realme',
            maincategory:'phone',
            img:'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/182273_2020_4.jpg',
            price:14999,
            rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
        },
        {
            name:'realme naxzo 60 pro',
            category:'realme',
            maincategory:'phone',
            img:'https://i.gadgets360cdn.com/products/large/realme-narzo-60-pro-5g-realme-db-650x800-1688653651.jpg?downsize=*:360',
            price:25655,
            rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
        },
        {
            name:'OnePlus Nord CE',
            category:'oneplus',
            maincategory:'phone',
            img:'https://skinsy.in/wp-content/uploads/2022/05/Oneplus-Nord-CE-2-Skins-wraps-covers.webp',
            price:17999,
            rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
        },
        {
            name:'Redmi Note 9 pro ',
            category:'redmi',
            maincategory:'phone',
            img:'https://m.media-amazon.com/images/I/41s5TUvUDZL._SX300_SY300_QL70_FMwebp_.jpg',
            price:13599,
            rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
        },
        {
            name:'IQOO Z7',
            category:'iqoo',
            maincategory:'phone',
            img:'https://img5.gadgetsnow.com/gd/images/products/additional/large/G425795_View_1/mobiles/smartphones/iqoo-z7-128-gb-norway-blue-8-gb-ram-.jpg',
            price:23999,
            rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
        },
        {
            name: 'Xiaomi Mi 11X',
            category: 'redmi',
            maincategory:'phone',
            img: 'https://m.media-amazon.com/images/I/71VQXjN6R7S._AC_UY218_.jpg',
            price: 21999,
            rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
          },
          {
            name: 'Sony Xperia 5 III',
            category: 'sony',
            maincategory:'phone',
            img: 'https://m.media-amazon.com/images/I/617KtR8kZ2L._AC_UY218_.jpg',
            price: 64990,
            rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
          },
          {
            name: 'Google Pixel 6',
            category: 'google',
            maincategory:'phone',
            img: 'https://m.media-amazon.com/images/I/514pgzf2c2L._AC_UY218_.jpg',
            price: 54999,
            rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
          },
          {
            name: 'LG Lava Blaze 5G',
            category: 'Lg',
            maincategory:'phone',
            img: 'https://m.media-amazon.com/images/I/51CxCrd5-sL._AC_UY218_.jpg',
            price: 47990,
            rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
          },
          {
            name: 'Motorola Edge 20 Pro',
            category: 'Motorola',
            maincategory:'phone',
            img: 'https://m.media-amazon.com/images/I/318qFNFKA2L._AC_UY218_.jpg',
            price: 34999,
            rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
          },
          {
            name: 'Asus ROG Phone 5',
            category: 'Asus',
            maincategory:'phone',
            img: 'https://m.media-amazon.com/images/I/31bI5ggiTtL._AC_UY218_.jpg',
            price: 49999,
            rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
          },
          {
            name: 'Nokia X30',
            category: 'Nokia',
            maincategory:'phone',
            img: 'https://m.media-amazon.com/images/I/71+vkafKIJL._AC_UY218_.jpg',
            price: 28999,
            rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
          },
          {
            name: 'Huawei P50 Pro',
            category: 'Huawei',
            maincategory:'phone',
            img: 'https://m.media-amazon.com/images/I/614J46acAyL._AC_UY218_.jpg',
            price: 68999,
            rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
          },
    {
    name: 'Vivo V21',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/611aJf3sSGS._AC_UY218_.jpg',
    price: 24990,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Vivo Y22 5G',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61ODIFuCgAL._AC_UY218_.jpg',
    price: 20999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Vivo X70 Pro',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/21q4I7ziVqL._AC_UY218_.jpg',
    price: 39990,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Vivo V23',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31VkQxGf8DL._AC_UY218_.jpg',
    price: 27990,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Vivo Y53s',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/6194MriUodL._AC_UY218_.jpg',
    price: 16990,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Vivo X60 Pro',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71VFu0-JSSL._AC_UY218_.jpg',
    price: 35990,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Vivo V21e 5G',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61Ma0i1UdRL._AC_UY218_.jpg',
    price: 19990,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Vivo Y33s',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/51rmwUjXxTL._AC_UY218_.jpg',
    price: 15990,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'Vivo V20SE',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/51OVWLG2R-L._AC_UY218_.jpg',
    price: 31990,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Vivo Y53L',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71PvXYdN8hL._AC_UY218_.jpg',
    price: 12990,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'Vivo X50 Pro',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61vZzTcY7OL._AC_UY218_.jpg',
    price: 45990,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Vivo Y21',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31eb61mO-EL._AC_UY218_.jpg',
    price: 11990,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Vivo V20 Pro',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71N6npRR-AL._AC_UY218_.jpg',
    price: 29990,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Vivo Y73',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/51l5ieI4Z4L._AC_UY218_.jpg',
    price: 18990,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Vivo S7t',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/51LiyLLMwAL._AC_UY218_.jpg',
    price: 26990,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Vivo Y12i',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/515eatf8nyL._AC_UY218_.jpg',
    price: 10990,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Vivo V23 Pro',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/41aiTvsy6PL._AC_UY218_.jpg',
    price: 37990,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Vivo V15 Pro',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61WFEAE5aKL._AC_UY218_.jpg',
    price: 25990,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Vivo Y30',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61J79fezUgL._AC_UY218_.jpg',
    price: 14990,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Vivo S1 Prime',
    category: 'vivo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71UXuTWgXkL._AC_UY218_.jpg',
    price: 23990,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Realme 9 Pro+',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31wkiKRthrL._AC_UY218_.jpg',
    price: 17999,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'Realme Narzo N55',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81ogvU1j6qL._AC_UY218_.jpg',
    price: 10499,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Realme GT Neo 2',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31Iv0RjiF2L._AC_UY218_.jpg',
    price: 25999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Realme 7i',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/21ap4cDngYL._AC_UY218_.jpg',
    price: 14999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Realme 9i',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31BuzUkMnjL._AC_UY218_.jpg',
    price: 11999,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'Realme X9 Pro',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31WKYaeEYRS._AC_UY218_.jpg',
    price: 23999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Realme C30',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61bd15QsMYL._AC_UY218_.jpg',
    price: 8999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Realme 6s',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31xT0VGLwoL._AC_UY218_.jpg',
    price: 12499,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Realme 9',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31OBF-hUS0L._AC_UY218_.jpg',
    price: 18499,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Realme 10',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/51WDCoio+4L._AC_UY218_.jpg',
    price: 15999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Realme 6i',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/41oHiJqLP-L._AC_UY218_.jpg',
    price: 13999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Realme C25s',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31C3sk2hfrS._AC_UY218_.jpg',
    price: 9999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Realme X7 Pro',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31WKYaeEYRS._AC_UY218_.jpg',
    price: 21999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Realme 5i',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61u33eHXSZL._AC_UY218_.jpg',
    price: 11499,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'Realme 8s',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/41Up3ykx+fL._AC_UY218_.jpg',
    price: 16499,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Realme 7 Pro',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/7189p4qBPqS._AC_UY218_.jpg',
    price: 19999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Realme X5 Pro',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31wmNF1MokL._AC_UY218_.jpg',
    price: 22999,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'Realme 11 pro',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81eoabezOsL._AC_UY218_.jpg',
    price: 14999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Realme 6',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31xT0VGLwoL._AC_UY218_.jpg',
    price: 15499,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Realme GT Neo',
    category: 'realme',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61mF3NIR9VL._AC_UY218_.jpg',
    price: 24999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
    {
    name: 'Oppo Reno 7',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/51I5+cQ8G9L._AC_UY218_.jpg',
    price: 24999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Oppo A16',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/611vXWaSctL._AC_UY218_.jpg',
    price: 9999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Oppo F23 Pro',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81t-iyg0JfL._AC_UY218_.jpg',
    price: 19999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Oppo A54',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/51Zu9x1KUNS._AC_UY218_.jpg',
    price: 13999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Oppo K9',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/714cFMW8okL._AC_UY218_.jpg',
    price: 17999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Oppo Reno 6',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31764EhC7gL._AC_UY218_.jpg',
    price: 22999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Oppo A78',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81LrmorQeQL._AC_UY218_.jpg',
    price: 16999,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'Oppo F21 Pro',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/713rb0-Y0oL._AC_UY218_.jpg',
    price: 18499,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Oppo Find N2 Flip',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81ww2RdmvzL._AC_UY218_.jpg',
    price: 74999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Oppo A78',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81LrmorQeQL._AC_UY218_.jpg',
    price: 15999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Oppo A54',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/51Zu9x1KUNS._AC_UY218_.jpg',
    price: 12999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Oppo Reno 8 pro',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/21CptSVVE8L._AC_UY218_.jpg',
    price: 21499,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Oppo F19 Pro',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/51IJnNYPIjS._AC_UY218_.jpg',
    price: 20999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Oppo A78',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/8104evx11QL._AC_UY218_.jpg',
    price: 10499,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Oppo K11',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/714cFMW8okL._AC_UY218_.jpg',
    price: 14999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Oppo F17',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/51TZuecnfcL._AC_UY218_.jpg',
    price: 17999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Oppo A5',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71cowNbvkoL._AC_UY218_.jpg',
    price: 11499,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Oppo A17k',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81FcpnlhQNL._AC_UY218_.jpg',
    price: 16999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Oppo Reno 4',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61sVDp32aSL._AC_UY218_.jpg',
    price: 19999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Oppo A9',
    category: 'oppo',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71GBKrZpdVL._AC_UY218_.jpg',
    price: 14499,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'Samsung Galaxy S22 Ultra',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71J8tz0UeJL._AC_UY218_.jpg',
    price: 89999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Samsung Galaxy A52s 5G',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/91WFF6Rsn0L._AC_UY218_.jpg',
    price: 27999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Samsung Galaxy Z Fold 4',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/714QNdK8BWL._AC_UY218_.jpg',
    price: 134999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Samsung Galaxy F62',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61XeTpsk5oS._AC_UY218_.jpg',
    price: 24999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Samsung Galaxy S21 FE',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/8131pwAojZL._AC_UY218_.jpg',
    price: 44999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Samsung Galaxy A32',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81EtFZ6GA1L._AC_UY218_.jpg',
    price: 20999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Samsung Galaxy S23 ultra',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61imYpK33qL._AC_UY218_.jpg',
    price: 136999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Samsung Galaxy F42 5G',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71pX5typJIL._AC_UY218_.jpg',
    price: 23499,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Samsung Galaxy S22',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71HUnJvHsbL._AC_UY218_.jpg',
    price: 79999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Samsung Galaxy M34',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UY218_.jpg',
    price: 21999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Samsung Galaxy A22',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81qVJQ1qqlS._AC_UY218_.jpg',
    price: 18999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Samsung Galaxy Z Flip 3',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71f2I8cltBL._AC_UY218_.jpg',
    price: 114999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Samsung Galaxy M52',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71mGNOMrCyL._AC_UY218_.jpg',
    price: 26999,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'Samsung Galaxy S21 Plus',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/91SG7i7VqaL._AC_UY218_.jpg',
    price: 62999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Samsung Galaxy A73',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/91-oOBzRDxL._AC_UY218_.jpg',
    price: 33999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Samsung Galaxy S22 Plus',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71WdFQHjDwL._AC_UY218_.jpg',
    price: 74999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Samsung Galaxy M32',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71F4jU7MRUS._AC_UY218_.jpg',
    price: 16999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Samsung Galaxy S20 FE',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/812yohjGZ2L._AC_UY218_.jpg',
    price: 42999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Samsung Galaxy Z Fold 3',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71zDl128yGL._AC_UY218_.jpg',
    price: 124999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Samsung Galaxy A14',
    category: 'samsung',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81QW4IDVidL._AC_UY218_.jpg',
    price: 13999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'iPhone 14 Pro Max',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/610pghkO81L._AC_UY218_.jpg',
    price: 119999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'iPhone 13 Pro',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg',
    price: 109999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'iPhone SE (2023)',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61TOWf11+jL._AC_UY218_.jpg',
    price: 54999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'iPhone 14 Mini',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/716fAVud8PL._AC_UY218_.jpg',
    price: 74999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'iPhone 13',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg',
    price: 89999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'iPhone 13 Mini',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61nPiOOv9BL._AC_UY218_.jpg',
    price: 74999,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'iPhone 14 Pro',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61lKQWyMdDL._AC_UY218_.jpg',
    price: 109999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'iPhone 12 Pro Max',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY218_.jpg',
    price: 119999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'iPhone 14',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61YSNhAb00L._AC_UY218_.jpg',
    price: 99999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'iPhone 13 Pro Max',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg',
    price: 119999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'iPhone 14 Pro Mini',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY218_.jpg',
    price: 94999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'iPhone 13 Pro Mini',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY218_.jpg',
    price: 94999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'iPhone 14 Plus',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UY218_.jpg',
    price: 104999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'iPhone 12',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg',
    price: 74999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'iPhone 14 Pro Plus',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61nzPMNY8zL._AC_UY218_.jpg',
    price: 129999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'iPhone 13 Plus',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg',
    price: 99999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'iPhone 14 Pro Max Mini',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61nzPMNY8zL._AC_UY218_.jpg',
    price: 124999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'iPhone 13 Pro Plus',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg',
    price: 124999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'iPhone 14 SE',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71emcsxsRPL._AC_UY218_.jpg',
    price: 64999,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'iPhone 13 Mini Plus',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61KeIxmldLL._AC_UY218_.jpg',
    price: 84999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'iPhone 14 Pro Max Plus',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61nzPMNY8zL._AC_UY218_.jpg',
    price: 134999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'iPhone 13 Pro Plus Mini',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg',
    price: 129999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'iPhone 14 SE Plus',
    category: 'iphone',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/716fAVud8PL._AC_UY218_.jpg',
    price: 84999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Redmi Note 11 Pro',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71p1lN88RoL._AC_UY218_.jpg',
    price: 16999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Redmi 10',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31QnVF2gn5L._AC_UY218_.jpg',
    price: 10999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Redmi K50i',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/715rSRKUlLL._AC_UY218_.jpg',
    price: 19999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Redmi Note 10S',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81B0HJigO-L._AC_UY218_.jpg',
    price: 14999,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Redmi 9T',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61W1LoulxmL._AC_UY218_.jpg',
    price: 11499,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Redmi 9 power',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71hEzQGO5qL._AC_UY218_.jpg',
    price: 24999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Redmi Note 11',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71yTvU9VgdL._AC_UY218_.jpg',
    price: 14499,
    rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
  },
  {
    name: 'Redmi 9A',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY218_.jpg',
    price: 7999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Redmi 11T ',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/7155Pasn1aL._AC_UY218_.jpg',
    price: 21999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  
  {
    name: 'Redmi 8',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61K6JcPwbQL._AC_UY218_.jpg',
    price: 8999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
  {
    name: 'Redmi Note 10S',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61MykcLL8oS._AC_UY218_.jpg',
    price: 20999,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
  },
  {
    name: 'Redmi Note 8',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/31vDfVGl9IL._AC_UY218_.jpg',
    price: 11999,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Redmi 12C',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/81itQPVn-GL._AC_UY218_.jpg',
    price: 8499,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Redmi Note 12 Pro+',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61mwjGY1EQL._AC_UY218_.jpg',
    price: 27999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
  },
  {
    name: 'Redmi Note 7',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/41o-cD7W2XL._AC_UY218_.jpg',
    price: 10499,
    rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
  },
  {
    name: 'Redmi Note 10',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/610MchWXxdS._AC_UY218_.jpg',
    price: 13999,
    rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
  },
  {
    name: 'Redmi 7',
    category: 'redmi',
    maincategory:'phone',
    img: 'https://m.media-amazon.com/images/I/61XQ4wLdamL._AC_UY218_.jpg',
    price: 8999,
    rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
  },
];


};

module.exports={Phone}
// https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw
// https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul
// https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F
// https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr
// https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC