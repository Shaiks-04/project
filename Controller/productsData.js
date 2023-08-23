const productsData = [
             {
               name: 'Apple Watch Series 7',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71YL6rnDToL._AC_UY218_.jpg',
               price: 24990,
               rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
             },
             {
               
               name: 'Opal and Diamond Necklace',
               category: 'jewellery',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/51Q6Czf7iLL._AC_UL400_.jpg',
               price: 8599,
               rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
             },
             {
               
               name: 'Burberry Horseferry Print Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/91dQFfWSuvL._AC_SR180,120_QL70_.jpg',
               price: 14999,
               rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
             },
             {
               
               name: 'Samsung Galaxy Watch 4',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61jOliJK5CL._AC_UY218_.jpg',
               price: 18990,
               rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
             },
             {
               
               name: 'Fitbit Luxe',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61PmMzYM4qL._AC_UL400_.jpg',
               price: 10999,
               rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
             },
             {
               
               name: 'Garmin Venu 2',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71ummMzf9yL._AC_UY218_.jpg',
               price: 28990,
               rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
             },
             {
               
               name: 'Fossil Gen 6',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/31lb-PBx05L._AC_UL400_.jpg',
               price: 16990,
               rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
             },
             {
               
               name: 'Huawei Watch GT 3',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61pZcZl1LoL._AC_UY218_.jpg',
               price: 21990,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Amazfit GTR 3',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71tEn1ydOVL._AC_UY218_.jpg',
               price: 14990,
               rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
             },
             {
               
               name: 'Garmin Lily 2',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71iC8Lgrz4L._AC_UY218_.jpg',
               price: 19990,
               rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
             },
             {
               
               name: 'Samsung Galaxy Watch Active 4',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61nBzBREzGL._AC_UY218_.jpg',
               price: 15990,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Xiaomi Mi Watch Revolve 2',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/51ZHhDmkqLL._AC_UY218_.jpg',
               price: 12990,
               rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
             },
             {
               
               name: 'Casio G-Shock DW5600',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61a3g231V1L._AC_UL400_.jpg',
               price: 6499,
               rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
             },
             {
               name: 'Seiko Prospex Automatic Dive Watch',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61wg8PP3zjL._AC_UL400_.jpg',
               price: 9999,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               name: 'Timex Weekender Chronograph',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/81Ctzp1Ls8L._AC_UL400_.jpg',
               price: 4999,
               rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
             },
             {
               name: 'Citizen Eco-Drive Titanium Watch',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/81xR1tI095L._AC_UL400_.jpg',
               price: 7499,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               name: 'Tissot Le Locle Automatic Watch',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/51L2HrELzkL._AC_UL400_.jpg',
               price: 14990,
               rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
             },
             {
               name: 'Movado Museum Classic Watch',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61OP9zur9YL._AC_UL400_.jpg',
               price: 9999,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Longines Master Collection Watch',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/51+VvrJvrBL._AC_UL400_.jpg',
               price: 22490,
               rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
             },
             {
               
               name: 'Bulova Precisionist Watch',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/711bClbFHdL._AC_UL400_.jpg',
               price: 8999,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Oris Divers Sixty-Five Watch',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/91bgHNZkDlL._AC_UL400_.jpg',
               price: 19990,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Hamilton Khaki Field Mechanical Watch',
               category: 'watch',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/815tmfSl3DL._AC_UL400_.jpg',
               price: 99990,
               rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
             },
             {
               
               name: 'Gold Infinity Bracelet',
               category: 'jewellery',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/51msO56Q4-L._AC_UL400_.jpg',
               price: 5499,
               rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
             },
             {
               
               name: 'Emerald and Diamond Pendant',
               category: 'jewellery',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/41ezuo+lspL._AC_UL400_.jpg',
               price: 9990,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'GIVA 925 Sterling Silver',
               category: 'jewellery',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71qL3hjyYDL._UY395_.jpg',
               price: 3999,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Pearl Strand Bracelet',
               category: 'jewellery',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/612D63+DR0L._AC_UL400_.jpg',
               price: 7299,
               rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
             },
             {
               
               name: 'Silver Teardrop Earrings',
               category: 'jewellery',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61Yk1cTjJNL._AC_UL400_.jpg',
               price: 2499,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Ruby Heart Pendant',
               category: 'jewellery',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71Cxp2zcKGL._AC_UL400_.jpg',
               price: 6999,
               rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
             },
             {
               
               name: 'Diamond Stud Earrings',
               category: 'jewellery',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/711ruYzQf7L._AC_UL400_.jpg',
               price: 18990,
               rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
             },
             {
               
               name: 'GIVA 925 Sterling Silver Oxidised',
               category: 'jewellery',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71+bjArEkJL._AC_UL400_.jpg',
               price: 23999,
               rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
             },
             {
               
               name: 'Gold Flower Ring',
               category: 'jewellery',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61fURiwRBPL._AC_UL400_.jpg',
               price: 4599,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
        {     
            name: 'Diamond Solitaire Necklace',
            category: 'jewellery',
            maincategory:'Accessories',
            img: 'https://m.media-amazon.com/images/I/61wXs150hSL._AC_UL400_.jpg',
            price: 49999,
            rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
           },
           {
             name: 'Gold Hoop Earrings',
             category: 'jewellery',
             maincategory:'Accessories',
             img: 'https://m.media-amazon.com/images/I/51CxIWWIUhL._AC_UL400_.jpg',
             price: 9990,
             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabrhttps://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
           },
           {
             name: 'Silver Bracelet with Charms',
             category: 'jewellery',
             maincategory:'Accessories',
             img: 'https://m.media-amazon.com/images/I/61FYiZYOwsL._AC_UL400_.jpg',
             price: 2999,
             rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
           },
           {
             name: 'Pearl Drop Earrings',
             category: 'jewellery',
             maincategory:'Accessories',
             img: 'https://m.media-amazon.com/images/I/41wyz7YSA8L._AC_UL400_.jpg',
             price: 6499,
             rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
           },
           {
             name: 'Sapphire and Diamond Ring',
             category: 'jewellery',
             maincategory:'Accessories',
             img: 'https://m.media-amazon.com/images/I/61x8ciJ6NkL._AC_UL400_.jpg',
             price: 17999,
             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
           },
           {
             name: 'Rose Gold Pendant',
             category: 'jewellery',
             maincategory:'Accessories',
             img: 'https://m.media-amazon.com/images/I/51lUp8iYu5L._AC_UL400_.jpg',
             price: 7599,
             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
           },
           {
             name: 'Emerald Stud Earrings',
             category: 'jewellery',
             maincategory:'Accessories',
             img: 'https://m.media-amazon.com/images/I/51tr8UvLHhL._AC_UL400_.jpg',
             price: 12999,
             rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
           },
           {
             name: 'Silver Choker Necklace',
             category: 'jewellery',
             maincategory:'Accessories',
             img: 'https://m.media-amazon.com/images/I/516YLypPHZL._AC_UL400_.jpg',
             price: 3499,
             rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
           },
           {
             
             name: 'Ruby Tennis Bracelet',
             category: 'jewellery',
             maincategory:'Accessories',
             img: 'https://m.media-amazon.com/images/I/81UKy83lP+L._AC_UL400_.jpg',
             price: 14999,
             rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
           },
           {
             name: 'White Gold Wedding Band',
             category: 'jewellery',
             maincategory:'Accessories',
             img: 'https://m.media-amazon.com/images/I/41N0rvpcQ0L._AC_UL400_.jpg',
             price: 8999,
             rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
           },
             {
               name: 'Chanel Quilted Compact Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/A1AAUcTe6mL._AC_SR180,120_QL70_.jpg',
               price: 21490,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Dior Saddle Cardholder',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/91cGeV-Kv6L._AC_SR180,120_QL70_.jpg',
               price: 9990,
               rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
             },
             {
               
               name: 'Fendi Logo Compact Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61kcrXfleJL._AC_UL400_.jpg',
               price: 13490,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Goyard Saint Marc Cardholder',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/81JiQOumAlL._AC_UL400_.jpg',
               price: 11499,
               rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
             },
             {
               
               name: 'Hermes Béarn Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71tZtxBhOJL._AC_UL400_.jpg',
               price: 18990,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Louis Vuitton Multiple Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71LC8M5v7tL._AC_UL400_.jpg',
               price: 10999,
               rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
             },
             {
               
               name: 'Prada Nylon Cardholder',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/81IDkGlbAPL._AC_UL400_.jpg',
               price: 8499,
               rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
             },
             {
               name: 'Saint Laurent Kate Compact Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71tTu7YTM-L._AC_UL400_.jpg',
               price: 14990,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Versace Medusa Head Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71qbxmHGY4L._AC_UL400_.jpg',
               price: 16499,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Balenciaga Logo Cardholder',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/818plymPCFL._AC_UL400_.jpg',
               price: 9499,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Celine Envelope Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/715VapkKahL._AC_UL400_.jpg',
               price: 12990,
               rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
             },
             {
               
               name: 'Givenchy Logo Zip Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/818plymPCFL._AC_UL400_.jpg',
               price: 11999,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Gucci Ophidia Cardholder',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/51ua0upfa-L._AC_UL400_.jpg',
               price: 8990,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Louis Vuitton Clemence Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/51nWct0GVyL._AC_UL400_.jpg',
               price: 17490,
               rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
             },
             {
               
               name: 'Prada Saffiano Compact Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/A15dwKIgiSL._AC_UL400_.jpg',
               price: 15999,
               rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
             },
             {
               
               name: 'Valentino Rockstud Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/21038YdFT5L._AC_UL400_.jpg',
               price: 19990,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Yves Saint Laurent Kate Wallet',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/71sqdJYtziL._AC_UL400_.jpg',
               price: 21499,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'RFID STORITE PU Leather',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/81JB1sFx1JL._AC_UL400_.jpg',
               price: 13490,
               rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
             },
             {
               
               name: 'HAMMONDS FLYCATCHER',
               category: 'wallets',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/81INRgqC3sL._AC_UL400_.jpg',
               price: 9999,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
               {
                 
                 name: 'Ray-Ban Aviator Sunglasses',
               category: 'sunglasses',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/51VNZkGMMTL._AC_SR115,105_QL70_.jpg',
               price: 8999,
               rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
             },
             {
               
               name: 'Oakley Holbrook Sunglasses',
               category: 'sunglasses',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/31QP44NcdaL._AC_SR250,250_QL65_.jpg',
               price: 12499,
               rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
             },
             {
               
               name: 'Maui Jim Polarized Sunglasses',
               category: 'sunglasses',
               maincategory:'Accessories',
               img: 'https://images-eu.ssl-images-amazon.com/images/I/51NVfpwLJIL._AC_UL232_SR232,232_.jpg',
               price: 14990,
               rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
             },
             {
               
               name: 'Prada Cat-Eye Sunglasses',
               category: 'sunglasses',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/51yvx7wZGAL._AC_SR180,120_QL70_.jpg',
               price: 18999,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Gucci Oversized Sunglasses',
               category: 'sunglasses',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61Yv-BbbkgL._AC_UL400_.jpg',
               price: 22990,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Versace Shield Sunglasses',
               category: 'sunglasses',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61lkhcFM7oS._UX522_.jpg',
               price: 24499,
               rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
             },
             {
               
               name: 'Dior Round Sunglasses',
               category: 'sunglasses',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/51TcDh8lUNL._AC_UL400_.jpg',
               price: 26990,
               rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
             },
             {
               
               name: 'Fendi Square Sunglasses',
               category: 'sunglasses',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61VTRSK78jL._UX522_.jpg',
               price: 20999,
               rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
             },
             {
               
               name: 'Carrera Pilot Sunglasses',
               category: 'sunglasses',
               maincategory:'Accessories',
               img: 'https://m.media-amazon.com/images/I/61IFOQlm0qL._AC_UL400_.jpg',
               price: 15499,
               rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
             },
             {
               
               name: 'Tom Ford Rectangular Sunglasses',
               category: 'sunglasses',
               maincategory:'Accessories',
               img: 'https://rukminim2.flixcart.com/image/832/832/kxf0jgw0/sunglass/o/o/5/tom-ford-w-t-bl-medium-sundry-original-imag9uz797g5vzrw.jpeg?q=70',
               price: 19990,
               rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
             },
                 {
                   
                   name: 'Bvlgari Hexagonal Sunglasses',
                   category: 'sunglasses',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/51g71YNHE5L._UX522_.jpg',
                   price: 27499,
                   rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                 },
                 {
                   
                   name: 'Chanel Square Sunglasses',
                   category: 'sunglasses',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/51fkzlUtegL._AC_UL400_.jpg',
                   price: 32990,
                   rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                 },
                 {
                   
                   name: 'Saint Laurent Aviator Sunglasses',
                   category: 'sunglasses',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/71aAxCJJkXL._AC_UL400_.jpg',
                   price: 29999,
                   rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                 },
                 {
                   
                   name: 'Givenchy Round Sunglasses',
                   category: 'sunglasses',
                   maincategory:'Accessories',
                   img: 'https://rukminim2.flixcart.com/image/612/612/jw2f6vk0/sunglass/a/c/m/av034-free-size-elligator-original-imafgu572gmxcymq.jpeg?q=70',
                   price: 25490,
                   rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                 },
                 {
                   
                   name: 'Dolce & Gabbana Butterfly Sunglasses',
                   category: 'sunglasses',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/51QfArTZaiL._UX522_.jpg',
                   price: 21990,
                   rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                 },
                 {
                   
                   name: 'Louis Vuitton Cat-Eye Sunglasses',
                   category: 'sunglasses',
                   maincategory:'Accessories',
                   img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/b/f/w/free-size-candy-kingsunglasses-original-imaggv5hefwr25qg.jpeg?q=70',
                   price: 36499,
                   rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                 },
                 {
                   
                   name: 'Balenciaga Wrap Sunglasses',
                   category: 'sunglasses',
                   maincategory:'Accessories',
                   img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/f/m/z/57-chi00144-c3-royal-son-original-imagsyyvsbzd47fw.jpeg?q=70',
                   price: 30990,
                   rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                 },
                 {
                   
                   name: 'Porsche Design Sport Sunglasses',
                   category: 'sunglasses',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/615UYni2nbS._UX679_.jpg',
                   price: 33499,
                   rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                 },
                 {
                   
                   name: 'Bottega Veneta Square Sunglasses',
                   category: 'sunglasses',
                   maincategory:'Accessories',
                   img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/a/n/5/this-product-is-sold-as-small-by-the-brand-s11-black-red-monk-original-imagmjyyduayhe55.jpeg?q=70',
                   price: 28990,
                   rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                 },
                 {
                   
                   name: 'Versace Medusa Sunglasses',
                   category: 'sunglasses',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/61LUIzNmIDS._AC_UL400_.jpg',
                   price: 24990,
                   rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                 },
                 {
                   
                   name: 'Balenciaga City Bag',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/71Raw8VUk5L._AC_UL400_.jpg',
                   price: 32499,
                   rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                 },
                 {
                   
                   name: 'Versace Medusa Clutch',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/71vfEV8JhoL._AC_UL400_.jpg',
                   price: 29990,
                   rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                 },
                 {
                   
                   name: 'Givenchy Antigona Bag',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/71RCSsz5T5L._AC_UL400_.jpg',
                   price: 38999,
                   rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                 },
                 {
                   
                   name: 'Chloe Drew Crossbody Bag',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/61qyUg5c-DL._AC_UL400_.jpg',
                   price: 25990,
                   rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                 },
                 {
                   
                   name: 'Bottega Veneta Knot Clutch',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/81TKJhsTSEL._AC_UL400_.jpg',
                   price: 20499,
                   rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                 },
                 {
                   
                   name: 'YSL Lou Camera Bag',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/81FUzCey6qL._AC_UL400_.jpg',
                   price: 22990,
                   rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                 },
                 {
                   
                   name: 'Michael Kors Jet Set Tote',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/8160HaKcm2S._AC_UL400_.jpg',
                   price: 16499,
                   rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                 },
                 {
                   
                   name: 'Valentino Rockstud Clutch',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/81B6gkt2dEL._AC_UL400_.jpg',
                   price: 34990,
                   rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                 },
                 {
                   
                   name: 'Louis Vuitton Monogram Tote',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/61XbfU9DgfL._AC_UL400_.jpg',
                   price: 24990,
                   rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                 },
                 {
                   
                   name: 'Chanel Quilted Shoulder Bag',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/61ncHuKpQCL._AC_UL400_.jpg',
                   price: 36499,
                   rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                 },
                 {
                   
                   name: 'Gucci Crossbody Bag',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/617PEh8xkeL._AC_UL400_.jpg',
                   price: 28999,
                   rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                 },
                 {
                   
                   name: 'Prada Nylon Sling Bag',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/81eaQxolQ7L._AC_UL400_.jpg',
                   price: 22990,
                   rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                 },
                 {
                   
                   name: 'Fendi Logo Bucket Bag',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/51pW+v91jML._AC_UL400_.jpg',
                   price: 18499,
                   rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
                 },
                 {
                   
                   name: 'Burberry Checkered Tote',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/71H48Gc5siL._AC_UL400_.jpg',
                   price: 30990,
                   rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                 },
                 {
                   
                   name: 'Dior Book Tote',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/71tJ7RUjESL._AC_UL400_.jpg',
                   price: 42499,
                   rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
                 },
                 {
                   
                   name: 'Saint Laurent Leather Clutch',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/51AijI00ZaL._AC_UL400_.jpg',
                   price: 15990,
                   rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
                 },
                 {
                   
                   name: 'Goyard St. Louis Tote',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/713KoD3UuLL._AC_UL400_.jpg',
                   price: 55999,
                   rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
                 },
                 {
                   
                   name: 'Celine Trio Crossbody Bag',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/81uq97aQ14L._AC_UL400_.jpg',
                   price: 27490,
                   rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
                 },
                 {
                   
                   name: 'Hermes Birkin Bag',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/61GY5sblrfL._AC_UL400_.jpg',
                   price: 75999,
                   rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
                 },
                 {
                   
                   name: 'Jimmy Choo Lockett Bag',
                   category: 'handbags',
                   maincategory:'Accessories',
                   img: 'https://m.media-amazon.com/images/I/713PyK91XHL._AC_UL400_.jpg',
                   price: 28490,
                   rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
       
                 },
                 
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
                                              },
                                            
                                              
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
              }
]                     
module.exports =productsData    
