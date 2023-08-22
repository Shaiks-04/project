// const Accessories = (req, res) => {
//  const accessories=[
//       {
//         name: 'Apple Watch Series 7',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/71YL6rnDToL._AC_UY218_.jpg',
//         price: 24990,
//         rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//       },
//       {
        
//         name: 'Opal and Diamond Necklace',
//         category: 'jewellery',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/51Q6Czf7iLL._AC_UL400_.jpg',
//         price: 8599,
//         rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//       },
//       {
        
//         name: 'Burberry Horseferry Print Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/91dQFfWSuvL._AC_SR180,120_QL70_.jpg',
//         price: 14999,
//         rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
//       },
//       {
        
//         name: 'Samsung Galaxy Watch 4',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/61jOliJK5CL._AC_UY218_.jpg',
//         price: 18990,
//         rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//       },
//       {
        
//         name: 'Fitbit Luxe',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/61PmMzYM4qL._AC_UL400_.jpg',
//         price: 10999,
//         rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//       },
//       {
        
//         name: 'Garmin Venu 2',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/71ummMzf9yL._AC_UY218_.jpg',
//         price: 28990,
//         rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
//       },
//       {
        
//         name: 'Fossil Gen 6',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/31lb-PBx05L._AC_UL400_.jpg',
//         price: 16990,
//         rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//       },
//       {
        
//         name: 'Huawei Watch GT 3',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/61pZcZl1LoL._AC_UY218_.jpg',
//         price: 21990,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Amazfit GTR 3',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/71tEn1ydOVL._AC_UY218_.jpg',
//         price: 14990,
//         rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//       },
//       {
        
//         name: 'Garmin Lily 2',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/71iC8Lgrz4L._AC_UY218_.jpg',
//         price: 19990,
//         rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//       },
//       {
        
//         name: 'Samsung Galaxy Watch Active 4',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/61nBzBREzGL._AC_UY218_.jpg',
//         price: 15990,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Xiaomi Mi Watch Revolve 2',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/51ZHhDmkqLL._AC_UY218_.jpg',
//         price: 12990,
//         rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
//       },
//       {
        
//         name: 'Casio G-Shock DW5600',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/61a3g231V1L._AC_UL400_.jpg',
//         price: 6499,
//         rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//       },
//       {
        
//         name: 'Seiko Prospex Automatic Dive Watch',
//         category: 'watch',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/61wg8PP3zjL._AC_UL400_.jpg',
//         price: 9999,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
      
//           {
            
//             name: 'Timex Weekender Chronograph',
//             category: 'watch',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/81Ctzp1Ls8L._AC_UL400_.jpg',
//             price: 4999,
//             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//           },
//           {
            
//             name: 'Citizen Eco-Drive Titanium Watch',
//             category: 'watch',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/81xR1tI095L._AC_UL400_.jpg',
//             price: 7499,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Tissot Le Locle Automatic Watch',
//             category: 'watch',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/51L2HrELzkL._AC_UL400_.jpg',
//             price: 14990,
//             rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//           },
//           {
            
//             name: 'Movado Museum Classic Watch',
//             category: 'watch',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/61OP9zur9YL._AC_UL400_.jpg',
//             price: 9999,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Longines Master Collection Watch',
//             category: 'watch',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/51+VvrJvrBL._AC_UL400_.jpg',
//             price: 22490,
//             rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
//           },
//           {
            
//             name: 'Bulova Precisionist Watch',
//             category: 'watch',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/711bClbFHdL._AC_UL400_.jpg',
//             price: 8999,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Oris Divers Sixty-Five Watch',
//             category: 'watch',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/91bgHNZkDlL._AC_UL400_.jpg',
//             price: 19990,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Hamilton Khaki Field Mechanical Watch',
//             category: 'watch',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/815tmfSl3DL._AC_UL400_.jpg',
//             price: 99990,
//             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//           },
          
//           {
            
//             name: 'Gold Infinity Bracelet',
//             category: 'jewellery',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/51msO56Q4-L._AC_UL400_.jpg',
//             price: 5499,
//             rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//           },
//           {
            
//             name: 'Emerald and Diamond Pendant',
//             category: 'jewellery',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/41ezuo+lspL._AC_UL400_.jpg',
//             price: 9990,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'GIVA 925 Sterling Silver',
//             category: 'jewellery',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/71qL3hjyYDL._UY395_.jpg',
//             price: 3999,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Pearl Strand Bracelet',
//             category: 'jewellery',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/612D63+DR0L._AC_UL400_.jpg',
//             price: 7299,
//             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
//           },
//           {
            
//             name: 'Silver Teardrop Earrings',
//             category: 'jewellery',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/61Yk1cTjJNL._AC_UL400_.jpg',
//             price: 2499,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Ruby Heart Pendant',
//             category: 'jewellery',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/71Cxp2zcKGL._AC_UL400_.jpg',
//             price: 6999,
//             rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
//           },
//           {
            
//             name: 'Diamond Stud Earrings',
//             category: 'jewellery',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/711ruYzQf7L._AC_UL400_.jpg',
//             price: 18990,
//             rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//           },
//           {
            
//             name: 'GIVA 925 Sterling Silver Oxidised',
//             category: 'jewellery',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/71+bjArEkJL._AC_UL400_.jpg',
//             price: 23999,
//             rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//           },
//           {
            
//             name: 'Gold Flower Ring',
//             category: 'jewellery',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/61fURiwRBPL._AC_UL400_.jpg',
//             price: 4599,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Diamond Solitaire Necklace',
//       category: 'jewellery',
//       maincategory:'Accessories',
//       img: 'https://m.media-amazon.com/images/I/61wXs150hSL._AC_UL400_.jpg',
//       price: 49999,
//       rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//     },
//     {
      
//       name: 'Gold Hoop Earrings',
//       category: 'jewellery',
//       maincategory:'Accessories',
//       img: 'https://m.media-amazon.com/images/I/51CxIWWIUhL._AC_UL400_.jpg',
//       price: 9990,
//       rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabrhttps://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//     },
//     {
      
//       name: 'Silver Bracelet with Charms',
//       category: 'jewellery',
//       maincategory:'Accessories',
//       img: 'https://m.media-amazon.com/images/I/61FYiZYOwsL._AC_UL400_.jpg',
//       price: 2999,
//       rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//     },
//     {
      
//       name: 'Pearl Drop Earrings',
//       category: 'jewellery',
//       maincategory:'Accessories',
//       img: 'https://m.media-amazon.com/images/I/41wyz7YSA8L._AC_UL400_.jpg',
//       price: 6499,
//       rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//     },
//     {
      
//       name: 'Sapphire and Diamond Ring',
//       category: 'jewellery',
//       maincategory:'Accessories',
//       img: 'https://m.media-amazon.com/images/I/61x8ciJ6NkL._AC_UL400_.jpg',
//       price: 17999,
//       rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
//     },
//     {
      
//       name: 'Rose Gold Pendant',
//       category: 'jewellery',
//       maincategory:'Accessories',
//       img: 'https://m.media-amazon.com/images/I/51lUp8iYu5L._AC_UL400_.jpg',
//       price: 7599,
//       rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//     },
//     {
      
//       name: 'Emerald Stud Earrings',
//       category: 'jewellery',
//       maincategory:'Accessories',
//       img: 'https://m.media-amazon.com/images/I/51tr8UvLHhL._AC_UL400_.jpg',
//       price: 12999,
//       rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//     },
//     {
      
//       name: 'Silver Choker Necklace',
//       category: 'jewellery',
//       maincategory:'Accessories',
//       img: 'https://m.media-amazon.com/images/I/516YLypPHZL._AC_UL400_.jpg',
//       price: 3499,
//       rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//     },
//     {
      
//       name: 'Ruby Tennis Bracelet',
//       category: 'jewellery',
//       maincategory:'Accessories',
//       img: 'https://m.media-amazon.com/images/I/81UKy83lP+L._AC_UL400_.jpg',
//       price: 14999,
//       rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//     },
//     {
      
//       name: 'White Gold Wedding Band',
//       category: 'jewellery',
//       maincategory:'Accessories',
//       img: 'https://m.media-amazon.com/images/I/41N0rvpcQ0L._AC_UL400_.jpg',
//       price: 8999,
//       rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
//     },
    
//       {
        
//         name: 'Chanel Quilted Compact Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/A1AAUcTe6mL._AC_SR180,120_QL70_.jpg',
//         price: 21490,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Dior Saddle Cardholder',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/91cGeV-Kv6L._AC_SR180,120_QL70_.jpg',
//         price: 9990,
//         rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//       },
//       {
        
//         name: 'Fendi Logo Compact Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/61kcrXfleJL._AC_UL400_.jpg',
//         price: 13490,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Goyard Saint Marc Cardholder',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/81JiQOumAlL._AC_UL400_.jpg',
//         price: 11499,
//         rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//       },
//       {
        
//         name: 'Hermes Béarn Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/71tZtxBhOJL._AC_UL400_.jpg',
//         price: 18990,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Louis Vuitton Multiple Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/71LC8M5v7tL._AC_UL400_.jpg',
//         price: 10999,
//         rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//       },
//       {
        
//         name: 'Prada Nylon Cardholder',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/81IDkGlbAPL._AC_UL400_.jpg',
//         price: 8499,
//         rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//       },
//       {
        
//         name: 'Saint Laurent Kate Compact Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/71tTu7YTM-L._AC_UL400_.jpg',
//         price: 14990,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Versace Medusa Head Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/71qbxmHGY4L._AC_UL400_.jpg',
//         price: 16499,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Balenciaga Logo Cardholder',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/818plymPCFL._AC_UL400_.jpg',
//         price: 9499,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Celine Envelope Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/715VapkKahL._AC_UL400_.jpg',
//         price: 12990,
//         rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
//       },
//       {
        
//         name: 'Givenchy Logo Zip Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/818plymPCFL._AC_UL400_.jpg',
//         price: 11999,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Gucci Ophidia Cardholder',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/51ua0upfa-L._AC_UL400_.jpg',
//         price: 8990,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Louis Vuitton Clemence Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/51nWct0GVyL._AC_UL400_.jpg',
//         price: 17490,
//         rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//       },
//       {
        
//         name: 'Prada Saffiano Compact Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/A15dwKIgiSL._AC_UL400_.jpg',
//         price: 15999,
//         rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//       },
//       {
        
//         name: 'Valentino Rockstud Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/21038YdFT5L._AC_UL400_.jpg',
//         price: 19990,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Yves Saint Laurent Kate Wallet',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/71sqdJYtziL._AC_UL400_.jpg',
//         price: 21499,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'RFID STORITE PU Leather',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/81JB1sFx1JL._AC_UL400_.jpg',
//         price: 13490,
//         rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//       },
//       {
        
//         name: 'HAMMONDS FLYCATCHER',
//         category: 'wallets',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/81INRgqC3sL._AC_UL400_.jpg',
//         price: 9999,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//         {
          
//           name: 'Ray-Ban Aviator Sunglasses',
//         category: 'sunglasses',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/51VNZkGMMTL._AC_SR115,105_QL70_.jpg',
//         price: 8999,
//         rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
//       },
//       {
        
//         name: 'Oakley Holbrook Sunglasses',
//         category: 'sunglasses',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/31QP44NcdaL._AC_SR250,250_QL65_.jpg',
//         price: 12499,
//         rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//       },
//       {
        
//         name: 'Maui Jim Polarized Sunglasses',
//         category: 'sunglasses',
//         maincategory:'Accessories',
//         img: 'https://images-eu.ssl-images-amazon.com/images/I/51NVfpwLJIL._AC_UL232_SR232,232_.jpg',
//         price: 14990,
//         rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
//       },
//       {
        
//         name: 'Prada Cat-Eye Sunglasses',
//         category: 'sunglasses',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/51yvx7wZGAL._AC_SR180,120_QL70_.jpg',
//         price: 18999,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Gucci Oversized Sunglasses',
//         category: 'sunglasses',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/61Yv-BbbkgL._AC_UL400_.jpg',
//         price: 22990,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Versace Shield Sunglasses',
//         category: 'sunglasses',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/61lkhcFM7oS._UX522_.jpg',
//         price: 24499,
//         rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//       },
//       {
        
//         name: 'Dior Round Sunglasses',
//         category: 'sunglasses',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/51TcDh8lUNL._AC_UL400_.jpg',
//         price: 26990,
//         rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//       },
//       {
        
//         name: 'Fendi Square Sunglasses',
//         category: 'sunglasses',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/61VTRSK78jL._UX522_.jpg',
//         price: 20999,
//         rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//       },
//       {
        
//         name: 'Carrera Pilot Sunglasses',
//         category: 'sunglasses',
//         maincategory:'Accessories',
//         img: 'https://m.media-amazon.com/images/I/61IFOQlm0qL._AC_UL400_.jpg',
//         price: 15499,
//         rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//       },
//       {
        
//         name: 'Tom Ford Rectangular Sunglasses',
//         category: 'sunglasses',
//         maincategory:'Accessories',
//         img: 'https://rukminim2.flixcart.com/image/832/832/kxf0jgw0/sunglass/o/o/5/tom-ford-w-t-bl-medium-sundry-original-imag9uz797g5vzrw.jpeg?q=70',
//         price: 19990,
//         rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
//       },
//           {
            
//             name: 'Bvlgari Hexagonal Sunglasses',
//             category: 'sunglasses',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/51g71YNHE5L._UX522_.jpg',
//             price: 27499,
//             rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//           },
//           {
            
//             name: 'Chanel Square Sunglasses',
//             category: 'sunglasses',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/51fkzlUtegL._AC_UL400_.jpg',
//             price: 32990,
//             rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//           },
//           {
            
//             name: 'Saint Laurent Aviator Sunglasses',
//             category: 'sunglasses',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/71aAxCJJkXL._AC_UL400_.jpg',
//             price: 29999,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Givenchy Round Sunglasses',
//             category: 'sunglasses',
//             maincategory:'Accessories',
//             img: 'https://rukminim2.flixcart.com/image/612/612/jw2f6vk0/sunglass/a/c/m/av034-free-size-elligator-original-imafgu572gmxcymq.jpeg?q=70',
//             price: 25490,
//             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//           },
//           {
            
//             name: 'Dolce & Gabbana Butterfly Sunglasses',
//             category: 'sunglasses',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/51QfArTZaiL._UX522_.jpg',
//             price: 21990,
//             rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//           },
//           {
            
//             name: 'Louis Vuitton Cat-Eye Sunglasses',
//             category: 'sunglasses',
//             maincategory:'Accessories',
//             img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/b/f/w/free-size-candy-kingsunglasses-original-imaggv5hefwr25qg.jpeg?q=70',
//             price: 36499,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Balenciaga Wrap Sunglasses',
//             category: 'sunglasses',
//             maincategory:'Accessories',
//             img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/f/m/z/57-chi00144-c3-royal-son-original-imagsyyvsbzd47fw.jpeg?q=70',
//             price: 30990,
//             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
//           },
//           {
            
//             name: 'Porsche Design Sport Sunglasses',
//             category: 'sunglasses',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/615UYni2nbS._UX679_.jpg',
//             price: 33499,
//             rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//           },
//           {
            
//             name: 'Bottega Veneta Square Sunglasses',
//             category: 'sunglasses',
//             maincategory:'Accessories',
//             img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/a/n/5/this-product-is-sold-as-small-by-the-brand-s11-black-red-monk-original-imagmjyyduayhe55.jpeg?q=70',
//             price: 28990,
//             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//           },
//           {
            
//             name: 'Versace Medusa Sunglasses',
//             category: 'sunglasses',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/61LUIzNmIDS._AC_UL400_.jpg',
//             price: 24990,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Balenciaga City Bag',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/71Raw8VUk5L._AC_UL400_.jpg',
//             price: 32499,
//             rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//           },
//           {
            
//             name: 'Versace Medusa Clutch',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/71vfEV8JhoL._AC_UL400_.jpg',
//             price: 29990,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Givenchy Antigona Bag',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/71RCSsz5T5L._AC_UL400_.jpg',
//             price: 38999,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Chloe Drew Crossbody Bag',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/61qyUg5c-DL._AC_UL400_.jpg',
//             price: 25990,
//             rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
//           },
//           {
            
//             name: 'Bottega Veneta Knot Clutch',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/81TKJhsTSEL._AC_UL400_.jpg',
//             price: 20499,
//             rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//           },
//           {
            
//             name: 'YSL Lou Camera Bag',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/81FUzCey6qL._AC_UL400_.jpg',
//             price: 22990,
//             rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//           },
//           {
            
//             name: 'Michael Kors Jet Set Tote',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/8160HaKcm2S._AC_UL400_.jpg',
//             price: 16499,
//             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
//           },
//           {
            
//             name: 'Valentino Rockstud Clutch',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/81B6gkt2dEL._AC_UL400_.jpg',
//             price: 34990,
//             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//           },
//           {
            
//             name: 'Louis Vuitton Monogram Tote',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/61XbfU9DgfL._AC_UL400_.jpg',
//             price: 24990,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Chanel Quilted Shoulder Bag',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/61ncHuKpQCL._AC_UL400_.jpg',
//             price: 36499,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Gucci Crossbody Bag',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/617PEh8xkeL._AC_UL400_.jpg',
//             price: 28999,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Prada Nylon Sling Bag',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/81eaQxolQ7L._AC_UL400_.jpg',
//             price: 22990,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Fendi Logo Bucket Bag',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/51pW+v91jML._AC_UL400_.jpg',
//             price: 18499,
//             rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"
//           },
//           {
            
//             name: 'Burberry Checkered Tote',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/71H48Gc5siL._AC_UL400_.jpg',
//             price: 30990,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Dior Book Tote',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/71tJ7RUjESL._AC_UL400_.jpg',
//             price: 42499,
//             rating:"https://t3.gstatic.com/images?q=tbn:ANd9GcS1uJJOVbFBv-ODkakL27Zp1OmkPzSqT5fUn4ATUmEUVsHHKrSw"
//           },
//           {
            
//             name: 'Saint Laurent Leather Clutch',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/51AijI00ZaL._AC_UL400_.jpg',
//             price: 15990,
//             rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UPsZyCi5t5ysss9aAva17kPZnSmZuv6DU8qZ-Ju936115hnC"
//           },
//           {
            
//             name: 'Goyard St. Louis Tote',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/713KoD3UuLL._AC_UL400_.jpg',
//             price: 55999,
//             rating:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiaZ6oi7V_fnjgkw_gzroebSNkcmYv5xLLpc_lyjB1PhR4SS6F"
//           },
//           {
            
//             name: 'Celine Trio Crossbody Bag',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/81uq97aQ14L._AC_UL400_.jpg',
//             price: 27490,
//             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5JtPBw2g1t5cEpk3auv0cnfi8LKvnD8DBHLaKdqXTUeZJGM4I"
//           },
//           {
            
//             name: 'Hermes Birkin Bag',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/61GY5sblrfL._AC_UL400_.jpg',
//             price: 75999,
//             rating:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtHcGGkqPsLvoDUtTJ_bZyROXvyOlOXs02bggBV8VVUdraZabr"
//           },
//           {
            
//             name: 'Jimmy Choo Lockett Bag',
//             category: 'handbags',
//             maincategory:'Accessories',
//             img: 'https://m.media-amazon.com/images/I/713PyK91XHL._AC_UL400_.jpg',
//             price: 28490,
//             rating:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIuy9b3sXy7dNvwg2_gQklStCTQyUBWWloCAIWV5vrZoEYLkul"

//           }
//         ];

//       };
  
//   module.exports = { Accessories };
  