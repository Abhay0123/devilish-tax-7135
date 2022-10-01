import {Box,Image,SimpleGrid,Button,Text} from "@chakra-ui/react";

 const womensData=[ {
    "category": "Womens",
    "title": "KALINI",
    "subtitle": "Women Yoke Design Kurta Set",
    "discounted_price": "887",
    "strike_price": "3699",
    "discount": "(76% OFF)",
    "images": [
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.1",
    "rating_count": "1.9k"
  },
  {
    "category": "Womens",
    "title": "Khushal K",
    "subtitle": "Women Kurta Set With Dupatta",
    "discounted_price": "1529",
    "strike_price": "5099",
    "discount": "(70% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.4",
    "rating_count": "5.9k"
  },
  {
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Kurta with Palazzos & Dupatta",
    "discounted_price": "1329",
    "strike_price": "3799",
    "discount": "(65% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14399812/2021/6/11/61ac3eaa-c553-4230-9458-28aa7bd088301623391467623-Anouk-Women-Kurta-Sets-961623391466905-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14399812/2021/6/11/61ac3eaa-c553-4230-9458-28aa7bd088301623391467623-Anouk-Women-Kurta-Sets-961623391466905-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/14399812/2021/6/11/61ac3eaa-c553-4230-9458-28aa7bd088301623391467623-Anouk-Women-Kurta-Sets-961623391466905-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14399812/2021/6/11/61ac3eaa-c553-4230-9458-28aa7bd088301623391467623-Anouk-Women-Kurta-Sets-961623391466905-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/14399812/2021/6/11/61ac3eaa-c553-4230-9458-28aa7bd088301623391467623-Anouk-Women-Kurta-Sets-961623391466905-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/14399812/2021/6/11/61ac3eaa-c553-4230-9458-28aa7bd088301623391467623-Anouk-Women-Kurta-Sets-961623391466905-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/14399812/2021/6/11/61ac3eaa-c553-4230-9458-28aa7bd088301623391467623-Anouk-Women-Kurta-Sets-961623391466905-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14399812/2021/6/11/61ac3eaa-c553-4230-9458-28aa7bd088301623391467623-Anouk-Women-Kurta-Sets-961623391466905-11.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    "rating": "4.2",
    "rating_count": "1.7k"
  },
  {
    "category": "Womens",
    "title": "Indo Era",
    "subtitle": "Zari Embroidered Kurta set",
    "discounted_price": "1399",
    "strike_price": "6999",
    "discount": "(80% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13962282/2021/7/5/26f8c8a9-e900-4510-9fb0-ac42f029442c1625483017312-Indo-Era-Beigh-Embroidered-Straight-Kurta-Palazzo-With-Dupat-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13962282/2021/7/5/26f8c8a9-e900-4510-9fb0-ac42f029442c1625483017312-Indo-Era-Beigh-Embroidered-Straight-Kurta-Palazzo-With-Dupat-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13962282/2021/7/5/26f8c8a9-e900-4510-9fb0-ac42f029442c1625483017312-Indo-Era-Beigh-Embroidered-Straight-Kurta-Palazzo-With-Dupat-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13962282/2021/7/5/26f8c8a9-e900-4510-9fb0-ac42f029442c1625483017312-Indo-Era-Beigh-Embroidered-Straight-Kurta-Palazzo-With-Dupat-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13962282/2021/7/5/26f8c8a9-e900-4510-9fb0-ac42f029442c1625483017312-Indo-Era-Beigh-Embroidered-Straight-Kurta-Palazzo-With-Dupat-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13962282/2021/7/5/26f8c8a9-e900-4510-9fb0-ac42f029442c1625483017312-Indo-Era-Beigh-Embroidered-Straight-Kurta-Palazzo-With-Dupat-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13962282/2021/7/5/26f8c8a9-e900-4510-9fb0-ac42f029442c1625483017312-Indo-Era-Beigh-Embroidered-Straight-Kurta-Palazzo-With-Dupat-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13962282/2021/7/5/26f8c8a9-e900-4510-9fb0-ac42f029442c1625483017312-Indo-Era-Beigh-Embroidered-Straight-Kurta-Palazzo-With-Dupat-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.3",
    "rating_count": "3.4k"
  },
  {
    "category": "Womens",
    "title": "KALINI",
    "subtitle": "Women Kurta with Palazzos With Dupatta",
    "discounted_price": "799",
    "strike_price": "3635",
    "discount": "(78% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18815868/2022/6/22/59d0e321-c48a-409a-9626-596b088187d21655880734773KALINIWomenBlueStraightKurtawithPalazzoDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18815868/2022/6/22/59d0e321-c48a-409a-9626-596b088187d21655880734773KALINIWomenBlueStraightKurtawithPalazzoDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18815868/2022/6/22/59d0e321-c48a-409a-9626-596b088187d21655880734773KALINIWomenBlueStraightKurtawithPalazzoDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18815868/2022/6/22/59d0e321-c48a-409a-9626-596b088187d21655880734773KALINIWomenBlueStraightKurtawithPalazzoDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18815868/2022/6/22/59d0e321-c48a-409a-9626-596b088187d21655880734773KALINIWomenBlueStraightKurtawithPalazzoDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18815868/2022/6/22/59d0e321-c48a-409a-9626-596b088187d21655880734773KALINIWomenBlueStraightKurtawithPalazzoDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18815868/2022/6/22/59d0e321-c48a-409a-9626-596b088187d21655880734773KALINIWomenBlueStraightKurtawithPalazzoDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18815868/2022/6/22/59d0e321-c48a-409a-9626-596b088187d21655880734773KALINIWomenBlueStraightKurtawithPalazzoDupatta7.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
    "rating": "4.2",
    "rating_count": "865"
  },
  {
    "category": "Womens",
    "title": "Khushal K",
    "subtitle": "Women Yoke Design Kurta with Palazzos With Dupatta",
    "discounted_price": "1529",
    "strike_price": "5099",
    "discount": "(70% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18483950/2022/6/7/23c59537-fcac-40b1-8e64-4818e8a3e21d1654577763968-Khushal-K-Women-Pink-Ethnic-Motifs-Beads-and-Stones-Kurta-wi-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18483950/2022/6/7/23c59537-fcac-40b1-8e64-4818e8a3e21d1654577763968-Khushal-K-Women-Pink-Ethnic-Motifs-Beads-and-Stones-Kurta-wi-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18483950/2022/6/7/23c59537-fcac-40b1-8e64-4818e8a3e21d1654577763968-Khushal-K-Women-Pink-Ethnic-Motifs-Beads-and-Stones-Kurta-wi-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18483950/2022/6/7/23c59537-fcac-40b1-8e64-4818e8a3e21d1654577763968-Khushal-K-Women-Pink-Ethnic-Motifs-Beads-and-Stones-Kurta-wi-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18483950/2022/6/7/23c59537-fcac-40b1-8e64-4818e8a3e21d1654577763968-Khushal-K-Women-Pink-Ethnic-Motifs-Beads-and-Stones-Kurta-wi-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18483950/2022/6/7/23c59537-fcac-40b1-8e64-4818e8a3e21d1654577763968-Khushal-K-Women-Pink-Ethnic-Motifs-Beads-and-Stones-Kurta-wi-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18483950/2022/6/7/23c59537-fcac-40b1-8e64-4818e8a3e21d1654577763968-Khushal-K-Women-Pink-Ethnic-Motifs-Beads-and-Stones-Kurta-wi-11.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18483950/2022/6/7/23c59537-fcac-40b1-8e64-4818e8a3e21d1654577763968-Khushal-K-Women-Pink-Ethnic-Motifs-Beads-and-Stones-Kurta-wi-11.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.4",
    "rating_count": "1.3k"
  },
  {
    "category": "Womens",
    "title": "Anubhutee",
    "subtitle": "Women Embroidered Kurta with Trousers With Dupatta",
    "discounted_price": "1469",
    "strike_price": "4899",
    "discount": "(70% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.1",
    "rating_count": "2.6k"
  },
  {
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Yoke Design Kurta with Trousers & Dupatta",
    "discounted_price": "979",
    "strike_price": "2799",
    "discount": "(65% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    "rating": "4.3",
    "rating_count": "7.7k"
  },
  {
    "category": "Womens",
    "title": "KALINI",
    "subtitle": "Women Printed Kurta with Trousers",
    "discounted_price": "767",
    "strike_price": "3199",
    "discount": "(76% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18709124/2022/6/11/4fc5a841-d80c-4e7b-9a7b-4e17134b4c401654948355691KALINIWomenBlueStraightPrintedKurtawithTrouser7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18709124/2022/6/11/4fc5a841-d80c-4e7b-9a7b-4e17134b4c401654948355691KALINIWomenBlueStraightPrintedKurtawithTrouser7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18709124/2022/6/11/4fc5a841-d80c-4e7b-9a7b-4e17134b4c401654948355691KALINIWomenBlueStraightPrintedKurtawithTrouser7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18709124/2022/6/11/4fc5a841-d80c-4e7b-9a7b-4e17134b4c401654948355691KALINIWomenBlueStraightPrintedKurtawithTrouser7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18709124/2022/6/11/4fc5a841-d80c-4e7b-9a7b-4e17134b4c401654948355691KALINIWomenBlueStraightPrintedKurtawithTrouser7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18709124/2022/6/11/4fc5a841-d80c-4e7b-9a7b-4e17134b4c401654948355691KALINIWomenBlueStraightPrintedKurtawithTrouser7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18709124/2022/6/11/4fc5a841-d80c-4e7b-9a7b-4e17134b4c401654948355691KALINIWomenBlueStraightPrintedKurtawithTrouser7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18709124/2022/6/11/4fc5a841-d80c-4e7b-9a7b-4e17134b4c401654948355691KALINIWomenBlueStraightPrintedKurtawithTrouser7.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
    "rating": "4",
    "rating_count": "229"
  },
  {
    "category": "Womens",
    "title": "FASHOR",
    "subtitle": "Women Geometric Striped Georgette Kurta",
    "discounted_price": "1350",
    "strike_price": "3399",
    "discount": "(Rs. 2049 OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19420734/2022/8/6/3f280561-c679-4360-85df-caad0895f0481659793175287Kurtas1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19420734/2022/8/6/3f280561-c679-4360-85df-caad0895f0481659793175287Kurtas1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/19420734/2022/8/6/3f280561-c679-4360-85df-caad0895f0481659793175287Kurtas1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/19420734/2022/8/6/3f280561-c679-4360-85df-caad0895f0481659793175287Kurtas1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/19420734/2022/8/6/3f280561-c679-4360-85df-caad0895f0481659793175287Kurtas1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/19420734/2022/8/6/3f280561-c679-4360-85df-caad0895f0481659793175287Kurtas1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/19420734/2022/8/6/3f280561-c679-4360-85df-caad0895f0481659793175287Kurtas1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19420734/2022/8/6/3f280561-c679-4360-85df-caad0895f0481659793175287Kurtas1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": null,
    "rating_count": null
  },
  {
    "category": "Womens",
    "title": "Ahalyaa",
    "subtitle": "Women Printed Kurta with Palazzos With Dupatta",
    "discounted_price": "1560",
    "strike_price": "6000",
    "discount": "(74% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "3.6",
    "rating_count": "2.4k"
  },
  {
    "category": "Womens",
    "title": "KALINI",
    "subtitle": "Women Printed Kurta with Trousers With Dupatta",
    "discounted_price": "874",
    "strike_price": "3499",
    "discount": "(75% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4",
    "rating_count": "1.1k"
  },
  {
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Printed Kurta with Palazzos",
    "discounted_price": "879",
    "strike_price": "2199",
    "discount": "(60% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    "rating": "4.3",
    "rating_count": "8k"
  },
  {
    "category": "Womens",
    "title": "Nayo",
    "subtitle": "Women Kurta With Trouser",
    "discounted_price": "1368",
    "strike_price": "3699",
    "discount": "(63% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL", "3XL"],
    "rating": "4.1",
    "rating_count": "5.3k"
  },
  {
    "category": "Womens",
    "title": "Varanga",
    "subtitle": "Chanderi Yoke Design Kurta Set",
    "discounted_price": "1499",
    "strike_price": "5999",
    "discount": "(Rs. 4500 OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.3",
    "rating_count": "4.8k"
  },
  {
    "category": "Womens",
    "title": "H&M",
    "subtitle": "Wide twill trousers",
    "discounted_price": null,
    "strike_price": "1299",
    "discount": null,
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/19/d1d3660c-c2c0-4c1e-a600-9eb92510aead1613709805384-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/19/d1d3660c-c2c0-4c1e-a600-9eb92510aead1613709805384-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/19/d1d3660c-c2c0-4c1e-a600-9eb92510aead1613709805384-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/19/d1d3660c-c2c0-4c1e-a600-9eb92510aead1613709805384-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/19/d1d3660c-c2c0-4c1e-a600-9eb92510aead1613709805384-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/19/d1d3660c-c2c0-4c1e-a600-9eb92510aead1613709805384-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/19/d1d3660c-c2c0-4c1e-a600-9eb92510aead1613709805384-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/19/d1d3660c-c2c0-4c1e-a600-9eb92510aead1613709805384-1.jpg"
    ],
    "size": ["23", "25", "27", "28", "30", "31", "33", "34"],
    "rating": "4.4",
    "rating_count": "2k"
  },
  {
    "category": "Womens",
    "title": "KALINI",
    "subtitle": "Women Yoke Design Kurta with Palazzos With Dupatta",
    "discounted_price": "887",
    "strike_price": "3699",
    "discount": "(76% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16836356/2022/3/24/f41645f5-e62e-452c-ade0-f132d5de30e51648119245986-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16836356/2022/3/24/f41645f5-e62e-452c-ade0-f132d5de30e51648119245986-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/16836356/2022/3/24/f41645f5-e62e-452c-ade0-f132d5de30e51648119245986-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16836356/2022/3/24/f41645f5-e62e-452c-ade0-f132d5de30e51648119245986-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/16836356/2022/3/24/f41645f5-e62e-452c-ade0-f132d5de30e51648119245986-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/16836356/2022/3/24/f41645f5-e62e-452c-ade0-f132d5de30e51648119245986-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/16836356/2022/3/24/f41645f5-e62e-452c-ade0-f132d5de30e51648119245986-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16836356/2022/3/24/f41645f5-e62e-452c-ade0-f132d5de30e51648119245986-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.2",
    "rating_count": "3.6k"
  },
  {
    "category": "Womens",
    "title": "Khushal K",
    "subtitle": "Women Pure Cotton Kurta Set",
    "discounted_price": "1589",
    "strike_price": "5299",
    "discount": "(70% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.3",
    "rating_count": "2.2k"
  },
  {
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Embroidered Kurta with Palazzos",
    "discounted_price": "999",
    "strike_price": "2499",
    "discount": "(60% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13791608/2022/2/14/09516263-6380-4df1-a7f6-647fc2ff1a511644842630055-Anouk-Women-Pink-Embroidered-Kurta-with-Palazzos-77516448426-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13791608/2022/2/14/09516263-6380-4df1-a7f6-647fc2ff1a511644842630055-Anouk-Women-Pink-Embroidered-Kurta-with-Palazzos-77516448426-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13791608/2022/2/14/09516263-6380-4df1-a7f6-647fc2ff1a511644842630055-Anouk-Women-Pink-Embroidered-Kurta-with-Palazzos-77516448426-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13791608/2022/2/14/09516263-6380-4df1-a7f6-647fc2ff1a511644842630055-Anouk-Women-Pink-Embroidered-Kurta-with-Palazzos-77516448426-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13791608/2022/2/14/09516263-6380-4df1-a7f6-647fc2ff1a511644842630055-Anouk-Women-Pink-Embroidered-Kurta-with-Palazzos-77516448426-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13791608/2022/2/14/09516263-6380-4df1-a7f6-647fc2ff1a511644842630055-Anouk-Women-Pink-Embroidered-Kurta-with-Palazzos-77516448426-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13791608/2022/2/14/09516263-6380-4df1-a7f6-647fc2ff1a511644842630055-Anouk-Women-Pink-Embroidered-Kurta-with-Palazzos-77516448426-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13791608/2022/2/14/09516263-6380-4df1-a7f6-647fc2ff1a511644842630055-Anouk-Women-Pink-Embroidered-Kurta-with-Palazzos-77516448426-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    "rating": "4.4",
    "rating_count": "12.2k"
  },
  {
    "category": "Womens",
    "title": "Varanga",
    "subtitle": "Embroidered Kurta with Trousers & Dupatta",
    "discounted_price": "1199",
    "strike_price": "3999",
    "discount": "(Rs. 2800 OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13647608/2021/3/2/dd82eca7-3453-4fec-ae49-0f0b13d7f5591614669872253-Varanga-Women-Kurta-Sets-8471614669870339-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13647608/2021/3/2/dd82eca7-3453-4fec-ae49-0f0b13d7f5591614669872253-Varanga-Women-Kurta-Sets-8471614669870339-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13647608/2021/3/2/dd82eca7-3453-4fec-ae49-0f0b13d7f5591614669872253-Varanga-Women-Kurta-Sets-8471614669870339-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13647608/2021/3/2/dd82eca7-3453-4fec-ae49-0f0b13d7f5591614669872253-Varanga-Women-Kurta-Sets-8471614669870339-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13647608/2021/3/2/dd82eca7-3453-4fec-ae49-0f0b13d7f5591614669872253-Varanga-Women-Kurta-Sets-8471614669870339-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13647608/2021/3/2/dd82eca7-3453-4fec-ae49-0f0b13d7f5591614669872253-Varanga-Women-Kurta-Sets-8471614669870339-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13647608/2021/3/2/dd82eca7-3453-4fec-ae49-0f0b13d7f5591614669872253-Varanga-Women-Kurta-Sets-8471614669870339-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13647608/2021/3/2/dd82eca7-3453-4fec-ae49-0f0b13d7f5591614669872253-Varanga-Women-Kurta-Sets-8471614669870339-1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.1",
    "rating_count": "4.1k"
  },
  {
    "category": "Womens",
    "title": "KALINI",
    "subtitle": "Women Printed Kurta with Trousers With Dupatta",
    "discounted_price": "872",
    "strike_price": "3635",
    "discount": "(76% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18119958/2022/5/2/7989345f-3f73-4aa1-b802-4343ddee58da1651485521793KALINIWomenBlueEmbroideredPanelledKurtiwithTrousersWithDupat7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18119958/2022/5/2/7989345f-3f73-4aa1-b802-4343ddee58da1651485521793KALINIWomenBlueEmbroideredPanelledKurtiwithTrousersWithDupat7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18119958/2022/5/2/7989345f-3f73-4aa1-b802-4343ddee58da1651485521793KALINIWomenBlueEmbroideredPanelledKurtiwithTrousersWithDupat7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18119958/2022/5/2/7989345f-3f73-4aa1-b802-4343ddee58da1651485521793KALINIWomenBlueEmbroideredPanelledKurtiwithTrousersWithDupat7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18119958/2022/5/2/7989345f-3f73-4aa1-b802-4343ddee58da1651485521793KALINIWomenBlueEmbroideredPanelledKurtiwithTrousersWithDupat7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18119958/2022/5/2/7989345f-3f73-4aa1-b802-4343ddee58da1651485521793KALINIWomenBlueEmbroideredPanelledKurtiwithTrousersWithDupat7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18119958/2022/5/2/7989345f-3f73-4aa1-b802-4343ddee58da1651485521793KALINIWomenBlueEmbroideredPanelledKurtiwithTrousersWithDupat7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18119958/2022/5/2/7989345f-3f73-4aa1-b802-4343ddee58da1651485521793KALINIWomenBlueEmbroideredPanelledKurtiwithTrousersWithDupat7.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "3.9",
    "rating_count": "527"
  },
  {
    "category": "Womens",
    "title": "AHIKA",
    "subtitle": "Printed Straight Kurta",
    "discounted_price": "513",
    "strike_price": "1350",
    "discount": "(62% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    "rating": "4",
    "rating_count": "23.2k"
  },
  {
    "category": "Womens",
    "title": "Roadster",
    "subtitle": "Women Mid-Rise Skinny Jeans",
    "discounted_price": "919",
    "strike_price": "2299",
    "discount": "(60% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/4451395/2022/4/18/1d44d592-3a6e-46d3-a451-34fa1331afda1650284880812RoadsterWomenBlackSkinnyFitMid-RiseCleanLookStretchableJeans1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4451395/2022/4/18/1d44d592-3a6e-46d3-a451-34fa1331afda1650284880812RoadsterWomenBlackSkinnyFitMid-RiseCleanLookStretchableJeans1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/4451395/2022/4/18/1d44d592-3a6e-46d3-a451-34fa1331afda1650284880812RoadsterWomenBlackSkinnyFitMid-RiseCleanLookStretchableJeans1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/4451395/2022/4/18/1d44d592-3a6e-46d3-a451-34fa1331afda1650284880812RoadsterWomenBlackSkinnyFitMid-RiseCleanLookStretchableJeans1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/4451395/2022/4/18/1d44d592-3a6e-46d3-a451-34fa1331afda1650284880812RoadsterWomenBlackSkinnyFitMid-RiseCleanLookStretchableJeans1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/4451395/2022/4/18/1d44d592-3a6e-46d3-a451-34fa1331afda1650284880812RoadsterWomenBlackSkinnyFitMid-RiseCleanLookStretchableJeans1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/4451395/2022/4/18/1d44d592-3a6e-46d3-a451-34fa1331afda1650284880812RoadsterWomenBlackSkinnyFitMid-RiseCleanLookStretchableJeans1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/4451395/2022/4/18/1d44d592-3a6e-46d3-a451-34fa1331afda1650284880812RoadsterWomenBlackSkinnyFitMid-RiseCleanLookStretchableJeans1.jpg"
    ],
    "size": ["26", "28", "30", "32", "34", "36"],
    "rating": "4",
    "rating_count": "13.6k"
  },
  {
    "category": "Womens",
    "title": "Varanga",
    "subtitle": "Women Printed Cotton Kurta",
    "discounted_price": "749",
    "strike_price": "2799",
    "discount": "(Rs. 2050 OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.3",
    "rating_count": "6.2k"
  },
  {
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Printed Straight Kurta",
    "discounted_price": "629",
    "strike_price": "1799",
    "discount": "(65% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    "rating": "3.9",
    "rating_count": "20.4k"
  },
  {
    "category": "Womens",
    "title": "JAIPURI BUNAAI",
    "subtitle": "Women Kurta with Trousers With Dupatta",
    "discounted_price": "999",
    "strike_price": "3999",
    "discount": "(75% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18737708/2022/6/15/bdf107bf-7812-4330-bdee-c845c07127781655274467481KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18737708/2022/6/15/bdf107bf-7812-4330-bdee-c845c07127781655274467481KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18737708/2022/6/15/bdf107bf-7812-4330-bdee-c845c07127781655274467481KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18737708/2022/6/15/bdf107bf-7812-4330-bdee-c845c07127781655274467481KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18737708/2022/6/15/bdf107bf-7812-4330-bdee-c845c07127781655274467481KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18737708/2022/6/15/bdf107bf-7812-4330-bdee-c845c07127781655274467481KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18737708/2022/6/15/bdf107bf-7812-4330-bdee-c845c07127781655274467481KurtaSets1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18737708/2022/6/15/bdf107bf-7812-4330-bdee-c845c07127781655274467481KurtaSets1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.3",
    "rating_count": "604"
  },
  {
    "category": "Womens",
    "title": "Indo Era",
    "subtitle": "Women Yoke Design Kurta with Palazzos With Dupatta",
    "discounted_price": "1199",
    "strike_price": "3999",
    "discount": "(70% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16712782/2022/4/14/2afbbc41-329f-4850-8aee-00dccdf641851649922896889-Indo-Era-Solid-Wine-Straight-Kurta-Palazzo-With-Dupatta-Set--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16712782/2022/4/14/2afbbc41-329f-4850-8aee-00dccdf641851649922896889-Indo-Era-Solid-Wine-Straight-Kurta-Palazzo-With-Dupatta-Set--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/16712782/2022/4/14/2afbbc41-329f-4850-8aee-00dccdf641851649922896889-Indo-Era-Solid-Wine-Straight-Kurta-Palazzo-With-Dupatta-Set--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16712782/2022/4/14/2afbbc41-329f-4850-8aee-00dccdf641851649922896889-Indo-Era-Solid-Wine-Straight-Kurta-Palazzo-With-Dupatta-Set--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/16712782/2022/4/14/2afbbc41-329f-4850-8aee-00dccdf641851649922896889-Indo-Era-Solid-Wine-Straight-Kurta-Palazzo-With-Dupatta-Set--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/16712782/2022/4/14/2afbbc41-329f-4850-8aee-00dccdf641851649922896889-Indo-Era-Solid-Wine-Straight-Kurta-Palazzo-With-Dupatta-Set--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/16712782/2022/4/14/2afbbc41-329f-4850-8aee-00dccdf641851649922896889-Indo-Era-Solid-Wine-Straight-Kurta-Palazzo-With-Dupatta-Set--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16712782/2022/4/14/2afbbc41-329f-4850-8aee-00dccdf641851649922896889-Indo-Era-Solid-Wine-Straight-Kurta-Palazzo-With-Dupatta-Set--1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.4",
    "rating_count": "900"
  },
  {
    "category": "Womens",
    "title": "KASSUALLY",
    "subtitle": "Women Trousers",
    "discounted_price": "671",
    "strike_price": "1599",
    "discount": "(58% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/11/f3b7eb35-ea09-4bd6-b0e7-9de4157b14bd1602370012077-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/11/f3b7eb35-ea09-4bd6-b0e7-9de4157b14bd1602370012077-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/11/f3b7eb35-ea09-4bd6-b0e7-9de4157b14bd1602370012077-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/11/f3b7eb35-ea09-4bd6-b0e7-9de4157b14bd1602370012077-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/11/f3b7eb35-ea09-4bd6-b0e7-9de4157b14bd1602370012077-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/11/f3b7eb35-ea09-4bd6-b0e7-9de4157b14bd1602370012077-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/11/f3b7eb35-ea09-4bd6-b0e7-9de4157b14bd1602370012077-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/11/f3b7eb35-ea09-4bd6-b0e7-9de4157b14bd1602370012077-1.jpg"
    ],
    "size": ["26", "28", "30", "32", "34", "36"],
    "rating": "4",
    "rating_count": "3.8k"
  },
  {
    "category": "Womens",
    "title": "InWeave",
    "subtitle": "Women Kurta with Palazzos With Dupatta",
    "discounted_price": "1592",
    "strike_price": "5899",
    "discount": "(73% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16524740/2021/12/29/17ab2ac8-2e60-422d-9d20-2527415932361640754214931-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16524740/2021/12/29/17ab2ac8-2e60-422d-9d20-2527415932361640754214931-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/16524740/2021/12/29/17ab2ac8-2e60-422d-9d20-2527415932361640754214931-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16524740/2021/12/29/17ab2ac8-2e60-422d-9d20-2527415932361640754214931-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/16524740/2021/12/29/17ab2ac8-2e60-422d-9d20-2527415932361640754214931-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/16524740/2021/12/29/17ab2ac8-2e60-422d-9d20-2527415932361640754214931-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/16524740/2021/12/29/17ab2ac8-2e60-422d-9d20-2527415932361640754214931-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16524740/2021/12/29/17ab2ac8-2e60-422d-9d20-2527415932361640754214931-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-2.jpg"
    ],
    "size": ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.2",
    "rating_count": "1.8k"
  },
  {
    "category": "Womens",
    "title": "Mitera",
    "subtitle": "Woven Design Bandhani Saree",
    "discounted_price": "1112",
    "strike_price": "5299",
    "discount": "(79% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15195736/2022/4/5/4dc201e5-ec81-458a-af30-c6e99a37691a1649158065149-Mitera-Red--Gold-Toned-Woven-Design-Bandhani-Saree-146164915-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15195736/2022/4/5/4dc201e5-ec81-458a-af30-c6e99a37691a1649158065149-Mitera-Red--Gold-Toned-Woven-Design-Bandhani-Saree-146164915-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/15195736/2022/4/5/4dc201e5-ec81-458a-af30-c6e99a37691a1649158065149-Mitera-Red--Gold-Toned-Woven-Design-Bandhani-Saree-146164915-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15195736/2022/4/5/4dc201e5-ec81-458a-af30-c6e99a37691a1649158065149-Mitera-Red--Gold-Toned-Woven-Design-Bandhani-Saree-146164915-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/15195736/2022/4/5/4dc201e5-ec81-458a-af30-c6e99a37691a1649158065149-Mitera-Red--Gold-Toned-Woven-Design-Bandhani-Saree-146164915-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/15195736/2022/4/5/4dc201e5-ec81-458a-af30-c6e99a37691a1649158065149-Mitera-Red--Gold-Toned-Woven-Design-Bandhani-Saree-146164915-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/15195736/2022/4/5/4dc201e5-ec81-458a-af30-c6e99a37691a1649158065149-Mitera-Red--Gold-Toned-Woven-Design-Bandhani-Saree-146164915-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15195736/2022/4/5/4dc201e5-ec81-458a-af30-c6e99a37691a1649158065149-Mitera-Red--Gold-Toned-Woven-Design-Bandhani-Saree-146164915-1.jpg"
    ],
    "size": ["Onesize"],
    "rating": "4",
    "rating_count": "1.9k"
  },
  {
    "category": "Womens",
    "title": "Antheaa",
    "subtitle": "Floral Print Fit & Flare Dress",
    "discounted_price": "983",
    "strike_price": "2459",
    "discount": "(60% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.3",
    "rating_count": "8.2k"
  },
  {
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Women Floral Embellished Kurta",
    "discounted_price": "594",
    "strike_price": "1699",
    "discount": "(65% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13789724/2021/4/8/cb5ba728-59f2-4bad-a54b-a3208259e0f31617876454403-Anouk-Women-Kurtas-7251617876453423-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13789724/2021/4/8/cb5ba728-59f2-4bad-a54b-a3208259e0f31617876454403-Anouk-Women-Kurtas-7251617876453423-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13789724/2021/4/8/cb5ba728-59f2-4bad-a54b-a3208259e0f31617876454403-Anouk-Women-Kurtas-7251617876453423-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13789724/2021/4/8/cb5ba728-59f2-4bad-a54b-a3208259e0f31617876454403-Anouk-Women-Kurtas-7251617876453423-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13789724/2021/4/8/cb5ba728-59f2-4bad-a54b-a3208259e0f31617876454403-Anouk-Women-Kurtas-7251617876453423-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13789724/2021/4/8/cb5ba728-59f2-4bad-a54b-a3208259e0f31617876454403-Anouk-Women-Kurtas-7251617876453423-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13789724/2021/4/8/cb5ba728-59f2-4bad-a54b-a3208259e0f31617876454403-Anouk-Women-Kurtas-7251617876453423-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13789724/2021/4/8/cb5ba728-59f2-4bad-a54b-a3208259e0f31617876454403-Anouk-Women-Kurtas-7251617876453423-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    "rating": "4.3",
    "rating_count": "1.7k"
  },
  {
    "category": "Womens",
    "title": "Berrylush",
    "subtitle": "Floral Ruched Dress",
    "discounted_price": "896",
    "strike_price": "2299",
    "discount": "(61% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15583258/2021/10/12/1d13b8e6-2c23-4b9c-a45a-508f368f049e1634036755097-Berrylush-Women-Red-Ditsy-Floral-Tie-Shoulder-Ruched-Dress-5-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15583258/2021/10/12/1d13b8e6-2c23-4b9c-a45a-508f368f049e1634036755097-Berrylush-Women-Red-Ditsy-Floral-Tie-Shoulder-Ruched-Dress-5-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/15583258/2021/10/12/1d13b8e6-2c23-4b9c-a45a-508f368f049e1634036755097-Berrylush-Women-Red-Ditsy-Floral-Tie-Shoulder-Ruched-Dress-5-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15583258/2021/10/12/1d13b8e6-2c23-4b9c-a45a-508f368f049e1634036755097-Berrylush-Women-Red-Ditsy-Floral-Tie-Shoulder-Ruched-Dress-5-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/15583258/2021/10/12/1d13b8e6-2c23-4b9c-a45a-508f368f049e1634036755097-Berrylush-Women-Red-Ditsy-Floral-Tie-Shoulder-Ruched-Dress-5-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/15583258/2021/10/12/1d13b8e6-2c23-4b9c-a45a-508f368f049e1634036755097-Berrylush-Women-Red-Ditsy-Floral-Tie-Shoulder-Ruched-Dress-5-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/15583258/2021/10/12/1d13b8e6-2c23-4b9c-a45a-508f368f049e1634036755097-Berrylush-Women-Red-Ditsy-Floral-Tie-Shoulder-Ruched-Dress-5-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15583258/2021/10/12/1d13b8e6-2c23-4b9c-a45a-508f368f049e1634036755097-Berrylush-Women-Red-Ditsy-Floral-Tie-Shoulder-Ruched-Dress-5-1.jpg"
    ],
    "size": ["S", "M", "L", "XL"],
    "rating": "4.2",
    "rating_count": "761"
  },
  {
    "category": "Womens",
    "title": "Indo Era",
    "subtitle": "Women Yoke Design Kurta with Palazzos With Dupatta",
    "discounted_price": "1791",
    "strike_price": "6399",
    "discount": "(72% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15508982/2021/9/29/de692647-2943-4d0e-a70c-b9469a15a79e1632905308754IndoEraWhiteEmbroideredStraightKurtaWithPalazzoWithDupattaSe1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15508982/2021/9/29/de692647-2943-4d0e-a70c-b9469a15a79e1632905308754IndoEraWhiteEmbroideredStraightKurtaWithPalazzoWithDupattaSe1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/15508982/2021/9/29/de692647-2943-4d0e-a70c-b9469a15a79e1632905308754IndoEraWhiteEmbroideredStraightKurtaWithPalazzoWithDupattaSe1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15508982/2021/9/29/de692647-2943-4d0e-a70c-b9469a15a79e1632905308754IndoEraWhiteEmbroideredStraightKurtaWithPalazzoWithDupattaSe1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/15508982/2021/9/29/de692647-2943-4d0e-a70c-b9469a15a79e1632905308754IndoEraWhiteEmbroideredStraightKurtaWithPalazzoWithDupattaSe1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/15508982/2021/9/29/de692647-2943-4d0e-a70c-b9469a15a79e1632905308754IndoEraWhiteEmbroideredStraightKurtaWithPalazzoWithDupattaSe1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/15508982/2021/9/29/de692647-2943-4d0e-a70c-b9469a15a79e1632905308754IndoEraWhiteEmbroideredStraightKurtaWithPalazzoWithDupattaSe1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15508982/2021/9/29/de692647-2943-4d0e-a70c-b9469a15a79e1632905308754IndoEraWhiteEmbroideredStraightKurtaWithPalazzoWithDupattaSe1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.1",
    "rating_count": "810"
  },
  {
    "category": "Womens",
    "title": "KALINI",
    "subtitle": "Women Kurta Set With Dupatta",
    "discounted_price": "887",
    "strike_price": "3699",
    "discount": "(76% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17062988/2022/2/5/f864acf1-f5b1-423e-9e43-137b0f588ebf1644056622967KALINIWomenMaroonEmbroideredPleatedKurtawithSharara1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17062988/2022/2/5/f864acf1-f5b1-423e-9e43-137b0f588ebf1644056622967KALINIWomenMaroonEmbroideredPleatedKurtawithSharara1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/17062988/2022/2/5/f864acf1-f5b1-423e-9e43-137b0f588ebf1644056622967KALINIWomenMaroonEmbroideredPleatedKurtawithSharara1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/17062988/2022/2/5/f864acf1-f5b1-423e-9e43-137b0f588ebf1644056622967KALINIWomenMaroonEmbroideredPleatedKurtawithSharara1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/17062988/2022/2/5/f864acf1-f5b1-423e-9e43-137b0f588ebf1644056622967KALINIWomenMaroonEmbroideredPleatedKurtawithSharara1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/17062988/2022/2/5/f864acf1-f5b1-423e-9e43-137b0f588ebf1644056622967KALINIWomenMaroonEmbroideredPleatedKurtawithSharara1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/17062988/2022/2/5/f864acf1-f5b1-423e-9e43-137b0f588ebf1644056622967KALINIWomenMaroonEmbroideredPleatedKurtawithSharara1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17062988/2022/2/5/f864acf1-f5b1-423e-9e43-137b0f588ebf1644056622967KALINIWomenMaroonEmbroideredPleatedKurtawithSharara1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.1",
    "rating_count": "2.5k"
  },
  {
    "category": "Womens",
    "title": "Chemistry",
    "subtitle": "Women Solid Parka",
    "discounted_price": "2999",
    "strike_price": "5999",
    "discount": "(50% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5709433/2018/9/6/f8edfec2-d665-4dec-8bd0-1c549d9b2c051536228338868-Chemistry-Women-Brown-Solid-Parka-7841536228337271-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5709433/2018/9/6/f8edfec2-d665-4dec-8bd0-1c549d9b2c051536228338868-Chemistry-Women-Brown-Solid-Parka-7841536228337271-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/5709433/2018/9/6/f8edfec2-d665-4dec-8bd0-1c549d9b2c051536228338868-Chemistry-Women-Brown-Solid-Parka-7841536228337271-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/5709433/2018/9/6/f8edfec2-d665-4dec-8bd0-1c549d9b2c051536228338868-Chemistry-Women-Brown-Solid-Parka-7841536228337271-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/5709433/2018/9/6/f8edfec2-d665-4dec-8bd0-1c549d9b2c051536228338868-Chemistry-Women-Brown-Solid-Parka-7841536228337271-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/5709433/2018/9/6/f8edfec2-d665-4dec-8bd0-1c549d9b2c051536228338868-Chemistry-Women-Brown-Solid-Parka-7841536228337271-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/5709433/2018/9/6/f8edfec2-d665-4dec-8bd0-1c549d9b2c051536228338868-Chemistry-Women-Brown-Solid-Parka-7841536228337271-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/5709433/2018/9/6/f8edfec2-d665-4dec-8bd0-1c549d9b2c051536228338868-Chemistry-Women-Brown-Solid-Parka-7841536228337271-1.jpg"
    ],
    "size": ["S", "M", "L", "XL"],
    "rating": "4.4",
    "rating_count": "453"
  },
  {
    "category": "Womens",
    "title": "SASSAFRAS",
    "subtitle": "Women Relaxed Fit Jeans",
    "discounted_price": "739",
    "strike_price": "1999",
    "discount": "(63% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13000352/2022/4/21/c083046e-9f2e-46bc-aedc-9ac56533d1001650517608723SASSAFRASWomenBluePureCottonRelaxedFitHigh-RiseCleanLookCrop1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13000352/2022/4/21/c083046e-9f2e-46bc-aedc-9ac56533d1001650517608723SASSAFRASWomenBluePureCottonRelaxedFitHigh-RiseCleanLookCrop1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13000352/2022/4/21/c083046e-9f2e-46bc-aedc-9ac56533d1001650517608723SASSAFRASWomenBluePureCottonRelaxedFitHigh-RiseCleanLookCrop1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13000352/2022/4/21/c083046e-9f2e-46bc-aedc-9ac56533d1001650517608723SASSAFRASWomenBluePureCottonRelaxedFitHigh-RiseCleanLookCrop1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13000352/2022/4/21/c083046e-9f2e-46bc-aedc-9ac56533d1001650517608723SASSAFRASWomenBluePureCottonRelaxedFitHigh-RiseCleanLookCrop1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13000352/2022/4/21/c083046e-9f2e-46bc-aedc-9ac56533d1001650517608723SASSAFRASWomenBluePureCottonRelaxedFitHigh-RiseCleanLookCrop1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13000352/2022/4/21/c083046e-9f2e-46bc-aedc-9ac56533d1001650517608723SASSAFRASWomenBluePureCottonRelaxedFitHigh-RiseCleanLookCrop1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13000352/2022/4/21/c083046e-9f2e-46bc-aedc-9ac56533d1001650517608723SASSAFRASWomenBluePureCottonRelaxedFitHigh-RiseCleanLookCrop1.jpg"
    ],
    "size": ["26", "28", "30", "32", "34", "36"],
    "rating": "4.2",
    "rating_count": "6.9k"
  },
  {
    "category": "Womens",
    "title": "Varanga",
    "subtitle": "Women Floral Printed Kurta",
    "discounted_price": "749",
    "strike_price": "2799",
    "discount": "(Rs. 2050 OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15241816/2021/8/24/d57adb8b-e792-477a-8801-6ea570cd88ef1629800170287VarangaWomenYellowFloralPrintedKeyholeNeckThreadWorkKurta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15241816/2021/8/24/d57adb8b-e792-477a-8801-6ea570cd88ef1629800170287VarangaWomenYellowFloralPrintedKeyholeNeckThreadWorkKurta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/15241816/2021/8/24/d57adb8b-e792-477a-8801-6ea570cd88ef1629800170287VarangaWomenYellowFloralPrintedKeyholeNeckThreadWorkKurta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15241816/2021/8/24/d57adb8b-e792-477a-8801-6ea570cd88ef1629800170287VarangaWomenYellowFloralPrintedKeyholeNeckThreadWorkKurta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/15241816/2021/8/24/d57adb8b-e792-477a-8801-6ea570cd88ef1629800170287VarangaWomenYellowFloralPrintedKeyholeNeckThreadWorkKurta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/15241816/2021/8/24/d57adb8b-e792-477a-8801-6ea570cd88ef1629800170287VarangaWomenYellowFloralPrintedKeyholeNeckThreadWorkKurta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/15241816/2021/8/24/d57adb8b-e792-477a-8801-6ea570cd88ef1629800170287VarangaWomenYellowFloralPrintedKeyholeNeckThreadWorkKurta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15241816/2021/8/24/d57adb8b-e792-477a-8801-6ea570cd88ef1629800170287VarangaWomenYellowFloralPrintedKeyholeNeckThreadWorkKurta1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.1",
    "rating_count": "2.4k"
  },
  {
    "category": "Womens",
    "title": "KALINI",
    "subtitle": "Women Printed Kurta with Trousers With Dupatta",
    "discounted_price": "813",
    "strike_price": "3699",
    "discount": "(78% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18512246/2022/5/31/89099cf1-d6ec-464e-81e9-62f9a117bbe41653966070108KALINIWomenBurgundyEthnicMotifsPrintedLayeredKurtawithTrouse1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18512246/2022/5/31/89099cf1-d6ec-464e-81e9-62f9a117bbe41653966070108KALINIWomenBurgundyEthnicMotifsPrintedLayeredKurtawithTrouse1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18512246/2022/5/31/89099cf1-d6ec-464e-81e9-62f9a117bbe41653966070108KALINIWomenBurgundyEthnicMotifsPrintedLayeredKurtawithTrouse1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18512246/2022/5/31/89099cf1-d6ec-464e-81e9-62f9a117bbe41653966070108KALINIWomenBurgundyEthnicMotifsPrintedLayeredKurtawithTrouse1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18512246/2022/5/31/89099cf1-d6ec-464e-81e9-62f9a117bbe41653966070108KALINIWomenBurgundyEthnicMotifsPrintedLayeredKurtawithTrouse1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18512246/2022/5/31/89099cf1-d6ec-464e-81e9-62f9a117bbe41653966070108KALINIWomenBurgundyEthnicMotifsPrintedLayeredKurtawithTrouse1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18512246/2022/5/31/89099cf1-d6ec-464e-81e9-62f9a117bbe41653966070108KALINIWomenBurgundyEthnicMotifsPrintedLayeredKurtawithTrouse1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18512246/2022/5/31/89099cf1-d6ec-464e-81e9-62f9a117bbe41653966070108KALINIWomenBurgundyEthnicMotifsPrintedLayeredKurtawithTrouse1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4",
    "rating_count": "194"
  },
  {
    "category": "Womens",
    "title": "Yufta",
    "subtitle": "Women Printed Kurta with Palazzos With Dupatta",
    "discounted_price": "1451",
    "strike_price": "3299",
    "discount": "(56% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11569354/2021/10/25/96e2815f-51eb-48ac-aa20-f64943f861851635163117668-Yufta-Women-Mauve-Ethnic-Motifs-Printed-Regular-Kurta-with-P-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11569354/2021/10/25/96e2815f-51eb-48ac-aa20-f64943f861851635163117668-Yufta-Women-Mauve-Ethnic-Motifs-Printed-Regular-Kurta-with-P-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/11569354/2021/10/25/96e2815f-51eb-48ac-aa20-f64943f861851635163117668-Yufta-Women-Mauve-Ethnic-Motifs-Printed-Regular-Kurta-with-P-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11569354/2021/10/25/96e2815f-51eb-48ac-aa20-f64943f861851635163117668-Yufta-Women-Mauve-Ethnic-Motifs-Printed-Regular-Kurta-with-P-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/11569354/2021/10/25/96e2815f-51eb-48ac-aa20-f64943f861851635163117668-Yufta-Women-Mauve-Ethnic-Motifs-Printed-Regular-Kurta-with-P-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/11569354/2021/10/25/96e2815f-51eb-48ac-aa20-f64943f861851635163117668-Yufta-Women-Mauve-Ethnic-Motifs-Printed-Regular-Kurta-with-P-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/11569354/2021/10/25/96e2815f-51eb-48ac-aa20-f64943f861851635163117668-Yufta-Women-Mauve-Ethnic-Motifs-Printed-Regular-Kurta-with-P-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11569354/2021/10/25/96e2815f-51eb-48ac-aa20-f64943f861851635163117668-Yufta-Women-Mauve-Ethnic-Motifs-Printed-Regular-Kurta-with-P-1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.4",
    "rating_count": "544"
  },
  {
    "category": "Womens",
    "title": "SASSAFRAS",
    "subtitle": "Women Regular Wide Track Pants",
    "discounted_price": "614",
    "strike_price": "1499",
    "discount": "(59% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12222102/2020/8/13/d47d5955-064d-4d81-a88f-52524d2f299a1597298540090-SASSAFRAS-Women-Black-Regular-Fit-Solid-Wide-Leg-Track-Pants-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12222102/2020/8/13/d47d5955-064d-4d81-a88f-52524d2f299a1597298540090-SASSAFRAS-Women-Black-Regular-Fit-Solid-Wide-Leg-Track-Pants-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/12222102/2020/8/13/d47d5955-064d-4d81-a88f-52524d2f299a1597298540090-SASSAFRAS-Women-Black-Regular-Fit-Solid-Wide-Leg-Track-Pants-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12222102/2020/8/13/d47d5955-064d-4d81-a88f-52524d2f299a1597298540090-SASSAFRAS-Women-Black-Regular-Fit-Solid-Wide-Leg-Track-Pants-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/12222102/2020/8/13/d47d5955-064d-4d81-a88f-52524d2f299a1597298540090-SASSAFRAS-Women-Black-Regular-Fit-Solid-Wide-Leg-Track-Pants-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/12222102/2020/8/13/d47d5955-064d-4d81-a88f-52524d2f299a1597298540090-SASSAFRAS-Women-Black-Regular-Fit-Solid-Wide-Leg-Track-Pants-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/12222102/2020/8/13/d47d5955-064d-4d81-a88f-52524d2f299a1597298540090-SASSAFRAS-Women-Black-Regular-Fit-Solid-Wide-Leg-Track-Pants-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12222102/2020/8/13/d47d5955-064d-4d81-a88f-52524d2f299a1597298540090-SASSAFRAS-Women-Black-Regular-Fit-Solid-Wide-Leg-Track-Pants-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.4",
    "rating_count": "17.8k"
  },
  {
    "category": "Womens",
    "title": "Varanga",
    "subtitle": "Calm Blue and Beige Ethnic Motifs Print Kurta",
    "discounted_price": "749",
    "strike_price": "2999",
    "discount": "(Rs. 2250 OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13769458/2021/7/8/86b11f07-7040-4dce-ad9f-1780e9ac26691625713714184-Varanga-sea-green-gota-patti-embroidery-yoke-digital-printed-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13769458/2021/7/8/86b11f07-7040-4dce-ad9f-1780e9ac26691625713714184-Varanga-sea-green-gota-patti-embroidery-yoke-digital-printed-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13769458/2021/7/8/86b11f07-7040-4dce-ad9f-1780e9ac26691625713714184-Varanga-sea-green-gota-patti-embroidery-yoke-digital-printed-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13769458/2021/7/8/86b11f07-7040-4dce-ad9f-1780e9ac26691625713714184-Varanga-sea-green-gota-patti-embroidery-yoke-digital-printed-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13769458/2021/7/8/86b11f07-7040-4dce-ad9f-1780e9ac26691625713714184-Varanga-sea-green-gota-patti-embroidery-yoke-digital-printed-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13769458/2021/7/8/86b11f07-7040-4dce-ad9f-1780e9ac26691625713714184-Varanga-sea-green-gota-patti-embroidery-yoke-digital-printed-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13769458/2021/7/8/86b11f07-7040-4dce-ad9f-1780e9ac26691625713714184-Varanga-sea-green-gota-patti-embroidery-yoke-digital-printed-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13769458/2021/7/8/86b11f07-7040-4dce-ad9f-1780e9ac26691625713714184-Varanga-sea-green-gota-patti-embroidery-yoke-digital-printed-1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.2",
    "rating_count": "2.6k"
  },
  {
    "category": "Womens",
    "title": "Roadster",
    "subtitle": "Pure Cotton T-shirt",
    "discounted_price": "179",
    "strike_price": "599",
    "discount": "(70% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2312468/2018/2/21/11519195992929-Roadster-Women-Maroon-Solid-Round-Neck-T-shirt-7951519195992737-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2312468/2018/2/21/11519195992929-Roadster-Women-Maroon-Solid-Round-Neck-T-shirt-7951519195992737-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2312468/2018/2/21/11519195992929-Roadster-Women-Maroon-Solid-Round-Neck-T-shirt-7951519195992737-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2312468/2018/2/21/11519195992929-Roadster-Women-Maroon-Solid-Round-Neck-T-shirt-7951519195992737-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2312468/2018/2/21/11519195992929-Roadster-Women-Maroon-Solid-Round-Neck-T-shirt-7951519195992737-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2312468/2018/2/21/11519195992929-Roadster-Women-Maroon-Solid-Round-Neck-T-shirt-7951519195992737-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2312468/2018/2/21/11519195992929-Roadster-Women-Maroon-Solid-Round-Neck-T-shirt-7951519195992737-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2312468/2018/2/21/11519195992929-Roadster-Women-Maroon-Solid-Round-Neck-T-shirt-7951519195992737-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL"],
    "rating": "4.2",
    "rating_count": "10.7k"
  },
  {
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Women Printed Kurta with Palazzos",
    "discounted_price": "874",
    "strike_price": "2499",
    "discount": "(65% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10778756/2019/12/2/4bcc29de-ae61-47d3-b571-e87e7fd5fd2f1575270952654-Anouk-Women-Kurta-Sets-2661575270950446-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10778756/2019/12/2/4bcc29de-ae61-47d3-b571-e87e7fd5fd2f1575270952654-Anouk-Women-Kurta-Sets-2661575270950446-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/10778756/2019/12/2/4bcc29de-ae61-47d3-b571-e87e7fd5fd2f1575270952654-Anouk-Women-Kurta-Sets-2661575270950446-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10778756/2019/12/2/4bcc29de-ae61-47d3-b571-e87e7fd5fd2f1575270952654-Anouk-Women-Kurta-Sets-2661575270950446-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/10778756/2019/12/2/4bcc29de-ae61-47d3-b571-e87e7fd5fd2f1575270952654-Anouk-Women-Kurta-Sets-2661575270950446-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/10778756/2019/12/2/4bcc29de-ae61-47d3-b571-e87e7fd5fd2f1575270952654-Anouk-Women-Kurta-Sets-2661575270950446-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/10778756/2019/12/2/4bcc29de-ae61-47d3-b571-e87e7fd5fd2f1575270952654-Anouk-Women-Kurta-Sets-2661575270950446-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10778756/2019/12/2/4bcc29de-ae61-47d3-b571-e87e7fd5fd2f1575270952654-Anouk-Women-Kurta-Sets-2661575270950446-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    "rating": "4.2",
    "rating_count": "2.5k"
  },
  {
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Ready to Wear Lehenga Blouse With Dupatta",
    "discounted_price": "1749",
    "strike_price": "4999",
    "discount": "(65% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14122726/2021/9/16/5eabd17b-d5b0-47dc-8fae-79425bfccc901631792111643-Anouk-Women-Lehenga-Choli-2541631792110834-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14122726/2021/9/16/5eabd17b-d5b0-47dc-8fae-79425bfccc901631792111643-Anouk-Women-Lehenga-Choli-2541631792110834-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/14122726/2021/9/16/5eabd17b-d5b0-47dc-8fae-79425bfccc901631792111643-Anouk-Women-Lehenga-Choli-2541631792110834-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14122726/2021/9/16/5eabd17b-d5b0-47dc-8fae-79425bfccc901631792111643-Anouk-Women-Lehenga-Choli-2541631792110834-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/14122726/2021/9/16/5eabd17b-d5b0-47dc-8fae-79425bfccc901631792111643-Anouk-Women-Lehenga-Choli-2541631792110834-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/14122726/2021/9/16/5eabd17b-d5b0-47dc-8fae-79425bfccc901631792111643-Anouk-Women-Lehenga-Choli-2541631792110834-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/14122726/2021/9/16/5eabd17b-d5b0-47dc-8fae-79425bfccc901631792111643-Anouk-Women-Lehenga-Choli-2541631792110834-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14122726/2021/9/16/5eabd17b-d5b0-47dc-8fae-79425bfccc901631792111643-Anouk-Women-Lehenga-Choli-2541631792110834-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.3",
    "rating_count": "120"
  },
  {
    "category": "Womens",
    "title": "Roadster",
    "subtitle": "Washed Denim Trucker Jacket",
    "discounted_price": "799",
    "strike_price": "1599",
    "discount": "(50% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12279416/2020/10/23/81c941d5-3bd0-48fa-835a-632353235fc51603434085601-Roadster-Women-Jackets-4691603434083309-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12279416/2020/10/23/81c941d5-3bd0-48fa-835a-632353235fc51603434085601-Roadster-Women-Jackets-4691603434083309-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/12279416/2020/10/23/81c941d5-3bd0-48fa-835a-632353235fc51603434085601-Roadster-Women-Jackets-4691603434083309-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12279416/2020/10/23/81c941d5-3bd0-48fa-835a-632353235fc51603434085601-Roadster-Women-Jackets-4691603434083309-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/12279416/2020/10/23/81c941d5-3bd0-48fa-835a-632353235fc51603434085601-Roadster-Women-Jackets-4691603434083309-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/12279416/2020/10/23/81c941d5-3bd0-48fa-835a-632353235fc51603434085601-Roadster-Women-Jackets-4691603434083309-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/12279416/2020/10/23/81c941d5-3bd0-48fa-835a-632353235fc51603434085601-Roadster-Women-Jackets-4691603434083309-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12279416/2020/10/23/81c941d5-3bd0-48fa-835a-632353235fc51603434085601-Roadster-Women-Jackets-4691603434083309-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.5",
    "rating_count": "1k"
  },
  {
    "category": "Womens",
    "title": "MOKSHA DESIGNS",
    "subtitle": "Kanjeevaram Pure Silk Saree",
    "discounted_price": null,
    "strike_price": "7890",
    "discount": null,
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19921960/2022/9/11/00c34337-178c-4104-8394-43f14c7dcd8d1662888709110Sarees1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19921960/2022/9/11/00c34337-178c-4104-8394-43f14c7dcd8d1662888709110Sarees1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/19921960/2022/9/11/00c34337-178c-4104-8394-43f14c7dcd8d1662888709110Sarees1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/19921960/2022/9/11/00c34337-178c-4104-8394-43f14c7dcd8d1662888709110Sarees1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/19921960/2022/9/11/00c34337-178c-4104-8394-43f14c7dcd8d1662888709110Sarees1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/19921960/2022/9/11/00c34337-178c-4104-8394-43f14c7dcd8d1662888709110Sarees1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/19921960/2022/9/11/00c34337-178c-4104-8394-43f14c7dcd8d1662888709110Sarees1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19921960/2022/9/11/00c34337-178c-4104-8394-43f14c7dcd8d1662888709110Sarees1.jpg"
    ],
    "size": ["Onesize"],
    "rating": null,
    "rating_count": null
  },
  {
    "category": "Womens",
    "title": "Khushal K",
    "subtitle": "Women Yoke Design Kurta Set",
    "discounted_price": "1424",
    "strike_price": "4749",
    "discount": "(70% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13391080/2022/2/21/3ad1838d-d29e-4945-9eca-64930f0939411645460975084KhushalKWomenWhiteWovenDesignKurtawithChuridarDupatta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13391080/2022/2/21/3ad1838d-d29e-4945-9eca-64930f0939411645460975084KhushalKWomenWhiteWovenDesignKurtawithChuridarDupatta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13391080/2022/2/21/3ad1838d-d29e-4945-9eca-64930f0939411645460975084KhushalKWomenWhiteWovenDesignKurtawithChuridarDupatta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13391080/2022/2/21/3ad1838d-d29e-4945-9eca-64930f0939411645460975084KhushalKWomenWhiteWovenDesignKurtawithChuridarDupatta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13391080/2022/2/21/3ad1838d-d29e-4945-9eca-64930f0939411645460975084KhushalKWomenWhiteWovenDesignKurtawithChuridarDupatta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13391080/2022/2/21/3ad1838d-d29e-4945-9eca-64930f0939411645460975084KhushalKWomenWhiteWovenDesignKurtawithChuridarDupatta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13391080/2022/2/21/3ad1838d-d29e-4945-9eca-64930f0939411645460975084KhushalKWomenWhiteWovenDesignKurtawithChuridarDupatta1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13391080/2022/2/21/3ad1838d-d29e-4945-9eca-64930f0939411645460975084KhushalKWomenWhiteWovenDesignKurtawithChuridarDupatta1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.4",
    "rating_count": "3.9k"
  },
  {
    "category": "Womens",
    "title": "DOLCE CRUDO",
    "subtitle": "Women Skinny Fit Jeans",
    "discounted_price": "959",
    "strike_price": "2399",
    "discount": "(60% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/7/bdd09925-e2b7-431a-ba49-8fcc9b688ff51573148802565-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/7/bdd09925-e2b7-431a-ba49-8fcc9b688ff51573148802565-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/7/bdd09925-e2b7-431a-ba49-8fcc9b688ff51573148802565-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/7/bdd09925-e2b7-431a-ba49-8fcc9b688ff51573148802565-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/7/bdd09925-e2b7-431a-ba49-8fcc9b688ff51573148802565-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/7/bdd09925-e2b7-431a-ba49-8fcc9b688ff51573148802565-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/7/bdd09925-e2b7-431a-ba49-8fcc9b688ff51573148802565-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/7/bdd09925-e2b7-431a-ba49-8fcc9b688ff51573148802565-1.jpg"
    ],
    "size": ["26", "28", "30", "32", "34"],
    "rating": "4.1",
    "rating_count": "3.4k"
  },
  {
    "category": "Womens",
    "title": "Varanga",
    "subtitle": "Women Ethnic Motifs Printed Kurta",
    "discounted_price": "699",
    "strike_price": "3299",
    "discount": "(Rs. 2600 OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.2",
    "rating_count": "2.4k"
  },
  {
    "category": "Womens",
    "title": "Varanga",
    "subtitle": "Women Ethnic Motifs Printed Kurta",
    "discounted_price": "699",
    "strike_price": "3299",
    "discount": "(Rs. 2600 OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
      "./w2_files/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.2",
    "rating_count": "2.4k"
  },
  {
    "category": "Womens",
    "title": "Libas",
    "subtitle": "Kurta with Sharara & Dupatta",
    "discounted_price": "1799",
    "strike_price": "4999",
    "discount": "(64% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17671322/2022/6/1/6971d853-ddc3-49a9-945b-58a98fac97dc1654096191264-Libas-Women-Orange-Ethnic-Motifs-Printed-Mirror-Work-Kurta-w-15.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17671322/2022/6/1/6971d853-ddc3-49a9-945b-58a98fac97dc1654096191264-Libas-Women-Orange-Ethnic-Motifs-Printed-Mirror-Work-Kurta-w-15.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/17671322/2022/6/1/6971d853-ddc3-49a9-945b-58a98fac97dc1654096191264-Libas-Women-Orange-Ethnic-Motifs-Printed-Mirror-Work-Kurta-w-15.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/17671322/2022/6/1/6971d853-ddc3-49a9-945b-58a98fac97dc1654096191264-Libas-Women-Orange-Ethnic-Motifs-Printed-Mirror-Work-Kurta-w-15.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/17671322/2022/6/1/6971d853-ddc3-49a9-945b-58a98fac97dc1654096191264-Libas-Women-Orange-Ethnic-Motifs-Printed-Mirror-Work-Kurta-w-15.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/17671322/2022/6/1/6971d853-ddc3-49a9-945b-58a98fac97dc1654096191264-Libas-Women-Orange-Ethnic-Motifs-Printed-Mirror-Work-Kurta-w-15.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/17671322/2022/6/1/6971d853-ddc3-49a9-945b-58a98fac97dc1654096191264-Libas-Women-Orange-Ethnic-Motifs-Printed-Mirror-Work-Kurta-w-15.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17671322/2022/6/1/6971d853-ddc3-49a9-945b-58a98fac97dc1654096191264-Libas-Women-Orange-Ethnic-Motifs-Printed-Mirror-Work-Kurta-w-15.jpg",
      "./w2_files/6971d853-ddc3-49a9-945b-58a98fac97dc1654096191264-Libas-Women-Orange-Ethnic-Motifs-Printed-Mirror-Work-Kurta-w-15.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.5",
    "rating_count": "244"
  },
  {
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Women Embroidered Kurta with Trousers",
    "discounted_price": "1154",
    "strike_price": "3299",
    "discount": "(65% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13237918/2021/6/5/8e7018f5-054a-4051-9775-2288e11690d21622889962790-Anouk-Women-Kurta-Sets-1041622889962281-5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13237918/2021/6/5/8e7018f5-054a-4051-9775-2288e11690d21622889962790-Anouk-Women-Kurta-Sets-1041622889962281-5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/13237918/2021/6/5/8e7018f5-054a-4051-9775-2288e11690d21622889962790-Anouk-Women-Kurta-Sets-1041622889962281-5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/13237918/2021/6/5/8e7018f5-054a-4051-9775-2288e11690d21622889962790-Anouk-Women-Kurta-Sets-1041622889962281-5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/13237918/2021/6/5/8e7018f5-054a-4051-9775-2288e11690d21622889962790-Anouk-Women-Kurta-Sets-1041622889962281-5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/13237918/2021/6/5/8e7018f5-054a-4051-9775-2288e11690d21622889962790-Anouk-Women-Kurta-Sets-1041622889962281-5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/13237918/2021/6/5/8e7018f5-054a-4051-9775-2288e11690d21622889962790-Anouk-Women-Kurta-Sets-1041622889962281-5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13237918/2021/6/5/8e7018f5-054a-4051-9775-2288e11690d21622889962790-Anouk-Women-Kurta-Sets-1041622889962281-5.jpg",
      "./w2_files/8e7018f5-054a-4051-9775-2288e11690d21622889962790-Anouk-Women-Kurta-Sets-1041622889962281-5.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.2",
    "rating_count": "767"
  },
  {
    "category": "Womens",
    "title": "Libas",
    "subtitle": "Floral Cotton Kurta Set",
    "discounted_price": "899",
    "strike_price": "2499",
    "discount": "(64% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10356859/2019/8/8/b783aef9-c902-462e-af73-de159bfd011c1565256752191-Libas-Women-Kurta-Sets-2081565256750830-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10356859/2019/8/8/b783aef9-c902-462e-af73-de159bfd011c1565256752191-Libas-Women-Kurta-Sets-2081565256750830-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/10356859/2019/8/8/b783aef9-c902-462e-af73-de159bfd011c1565256752191-Libas-Women-Kurta-Sets-2081565256750830-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10356859/2019/8/8/b783aef9-c902-462e-af73-de159bfd011c1565256752191-Libas-Women-Kurta-Sets-2081565256750830-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/10356859/2019/8/8/b783aef9-c902-462e-af73-de159bfd011c1565256752191-Libas-Women-Kurta-Sets-2081565256750830-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/10356859/2019/8/8/b783aef9-c902-462e-af73-de159bfd011c1565256752191-Libas-Women-Kurta-Sets-2081565256750830-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/10356859/2019/8/8/b783aef9-c902-462e-af73-de159bfd011c1565256752191-Libas-Women-Kurta-Sets-2081565256750830-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10356859/2019/8/8/b783aef9-c902-462e-af73-de159bfd011c1565256752191-Libas-Women-Kurta-Sets-2081565256750830-1.jpg",
      "./w2_files/b783aef9-c902-462e-af73-de159bfd011c1565256752191-Libas-Women-Kurta-Sets-2081565256750830-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    "rating": "4",
    "rating_count": "13.4k"
  },
  {
    "category": "Womens",
    "title": "Tokyo Talkies",
    "subtitle": "Women Printed Sweatshirt",
    "discounted_price": "284",
    "strike_price": "1499",
    "discount": "(81% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10955012/2020/11/18/0b1d61ff-ccff-44ad-b8ee-e9925f04e2f51605695923643TokyoTalkiesWomenBlackGold-TonedPrintedCamouflageSequinnedSw1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10955012/2020/11/18/0b1d61ff-ccff-44ad-b8ee-e9925f04e2f51605695923643TokyoTalkiesWomenBlackGold-TonedPrintedCamouflageSequinnedSw1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/10955012/2020/11/18/0b1d61ff-ccff-44ad-b8ee-e9925f04e2f51605695923643TokyoTalkiesWomenBlackGold-TonedPrintedCamouflageSequinnedSw1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10955012/2020/11/18/0b1d61ff-ccff-44ad-b8ee-e9925f04e2f51605695923643TokyoTalkiesWomenBlackGold-TonedPrintedCamouflageSequinnedSw1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/10955012/2020/11/18/0b1d61ff-ccff-44ad-b8ee-e9925f04e2f51605695923643TokyoTalkiesWomenBlackGold-TonedPrintedCamouflageSequinnedSw1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/10955012/2020/11/18/0b1d61ff-ccff-44ad-b8ee-e9925f04e2f51605695923643TokyoTalkiesWomenBlackGold-TonedPrintedCamouflageSequinnedSw1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/10955012/2020/11/18/0b1d61ff-ccff-44ad-b8ee-e9925f04e2f51605695923643TokyoTalkiesWomenBlackGold-TonedPrintedCamouflageSequinnedSw1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10955012/2020/11/18/0b1d61ff-ccff-44ad-b8ee-e9925f04e2f51605695923643TokyoTalkiesWomenBlackGold-TonedPrintedCamouflageSequinnedSw1.jpg",
      "./w2_files/0b1d61ff-ccff-44ad-b8ee-e9925f04e2f51605695923643TokyoTalkiesWomenBlackGold-TonedPrintedCamouflageSequinnedSw1.jpg"
    ],
    "size": ["S", "M", "L", "XL"],
    "rating": "4.4",
    "rating_count": "672"
  },
  {
    "category": "Womens",
    "title": "ADDYVERO",
    "subtitle": "Women High-Rise Trousers",
    "discounted_price": "543",
    "strike_price": "1699",
    "discount": "(68% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19040144/2022/8/17/fe31ed52-9eda-4123-a704-dc39e0bad6011660707701748ADDYVEROWomenBlackHigh-RiseEasyWashTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19040144/2022/8/17/fe31ed52-9eda-4123-a704-dc39e0bad6011660707701748ADDYVEROWomenBlackHigh-RiseEasyWashTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/19040144/2022/8/17/fe31ed52-9eda-4123-a704-dc39e0bad6011660707701748ADDYVEROWomenBlackHigh-RiseEasyWashTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/19040144/2022/8/17/fe31ed52-9eda-4123-a704-dc39e0bad6011660707701748ADDYVEROWomenBlackHigh-RiseEasyWashTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/19040144/2022/8/17/fe31ed52-9eda-4123-a704-dc39e0bad6011660707701748ADDYVEROWomenBlackHigh-RiseEasyWashTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/19040144/2022/8/17/fe31ed52-9eda-4123-a704-dc39e0bad6011660707701748ADDYVEROWomenBlackHigh-RiseEasyWashTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/19040144/2022/8/17/fe31ed52-9eda-4123-a704-dc39e0bad6011660707701748ADDYVEROWomenBlackHigh-RiseEasyWashTrousers1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19040144/2022/8/17/fe31ed52-9eda-4123-a704-dc39e0bad6011660707701748ADDYVEROWomenBlackHigh-RiseEasyWashTrousers1.jpg",
      "./w2_files/fe31ed52-9eda-4123-a704-dc39e0bad6011660707701748ADDYVEROWomenBlackHigh-RiseEasyWashTrousers1.jpg"
    ],
    "size": ["28", "30", "32", "34", "36"],
    "rating": "4.3",
    "rating_count": "650"
  },
  {
    "category": "Womens",
    "title": "Indo Era",
    "subtitle": "Floral Screen Print Kurta Set",
    "discounted_price": "1249",
    "strike_price": "4999",
    "discount": "(75% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11459658/2020/2/15/9b7f8d3f-e48f-4618-8eac-32cee1a0d4111581757541745-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11459658/2020/2/15/9b7f8d3f-e48f-4618-8eac-32cee1a0d4111581757541745-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/11459658/2020/2/15/9b7f8d3f-e48f-4618-8eac-32cee1a0d4111581757541745-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11459658/2020/2/15/9b7f8d3f-e48f-4618-8eac-32cee1a0d4111581757541745-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/11459658/2020/2/15/9b7f8d3f-e48f-4618-8eac-32cee1a0d4111581757541745-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/11459658/2020/2/15/9b7f8d3f-e48f-4618-8eac-32cee1a0d4111581757541745-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/11459658/2020/2/15/9b7f8d3f-e48f-4618-8eac-32cee1a0d4111581757541745-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11459658/2020/2/15/9b7f8d3f-e48f-4618-8eac-32cee1a0d4111581757541745-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-1.jpg",
      "./w2_files/9b7f8d3f-e48f-4618-8eac-32cee1a0d4111581757541745-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.2",
    "rating_count": "7.4k"
  },
  {
    "category": "Womens",
    "title": "heemara",
    "subtitle": "Women Embroidered Kurta with Trousers With Dupatta",
    "discounted_price": "1399",
    "strike_price": "6999",
    "discount": "(80% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18302706/2022/5/17/33c3b553-8139-434c-9eec-9b1a79e937311652783126428heemaraWomenPeach-ColouredEthnicMotifsEmbroideredKurtawithTr1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18302706/2022/5/17/33c3b553-8139-434c-9eec-9b1a79e937311652783126428heemaraWomenPeach-ColouredEthnicMotifsEmbroideredKurtawithTr1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/18302706/2022/5/17/33c3b553-8139-434c-9eec-9b1a79e937311652783126428heemaraWomenPeach-ColouredEthnicMotifsEmbroideredKurtawithTr1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18302706/2022/5/17/33c3b553-8139-434c-9eec-9b1a79e937311652783126428heemaraWomenPeach-ColouredEthnicMotifsEmbroideredKurtawithTr1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/18302706/2022/5/17/33c3b553-8139-434c-9eec-9b1a79e937311652783126428heemaraWomenPeach-ColouredEthnicMotifsEmbroideredKurtawithTr1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/18302706/2022/5/17/33c3b553-8139-434c-9eec-9b1a79e937311652783126428heemaraWomenPeach-ColouredEthnicMotifsEmbroideredKurtawithTr1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/18302706/2022/5/17/33c3b553-8139-434c-9eec-9b1a79e937311652783126428heemaraWomenPeach-ColouredEthnicMotifsEmbroideredKurtawithTr1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18302706/2022/5/17/33c3b553-8139-434c-9eec-9b1a79e937311652783126428heemaraWomenPeach-ColouredEthnicMotifsEmbroideredKurtawithTr1.jpg",
      "./w2_files/33c3b553-8139-434c-9eec-9b1a79e937311652783126428heemaraWomenPeach-ColouredEthnicMotifsEmbroideredKurtawithTr1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL", "3XL"],
    "rating": "3.7",
    "rating_count": "539"
  },
  {
    "category": "Womens",
    "title": "Anouk",
    "subtitle": "Women Embroidered Kurta with Trousers With Dupatta",
    "discounted_price": "1559",
    "strike_price": "3899",
    "discount": "(60% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15150620/2021/9/8/b1bd0687-7533-428d-8258-d29c793fc4541631092430795-Anouk-Women-Kurta-Sets-941631092429795-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15150620/2021/9/8/b1bd0687-7533-428d-8258-d29c793fc4541631092430795-Anouk-Women-Kurta-Sets-941631092429795-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/15150620/2021/9/8/b1bd0687-7533-428d-8258-d29c793fc4541631092430795-Anouk-Women-Kurta-Sets-941631092429795-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15150620/2021/9/8/b1bd0687-7533-428d-8258-d29c793fc4541631092430795-Anouk-Women-Kurta-Sets-941631092429795-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/15150620/2021/9/8/b1bd0687-7533-428d-8258-d29c793fc4541631092430795-Anouk-Women-Kurta-Sets-941631092429795-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/15150620/2021/9/8/b1bd0687-7533-428d-8258-d29c793fc4541631092430795-Anouk-Women-Kurta-Sets-941631092429795-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/15150620/2021/9/8/b1bd0687-7533-428d-8258-d29c793fc4541631092430795-Anouk-Women-Kurta-Sets-941631092429795-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15150620/2021/9/8/b1bd0687-7533-428d-8258-d29c793fc4541631092430795-Anouk-Women-Kurta-Sets-941631092429795-1.jpg",
      "./w2_files/b1bd0687-7533-428d-8258-d29c793fc4541631092430795-Anouk-Women-Kurta-Sets-941631092429795-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    "rating": "4.1",
    "rating_count": "515"
  },
  {
    "category": "Womens",
    "title": "Libas",
    "subtitle": "Cotton Printed Kurta Set",
    "discounted_price": "1349",
    "strike_price": "2999",
    "discount": "(55% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16857684/2022/2/1/d7e8761b-6032-4fa6-9aa6-83f253e982911643693009626-Libas-Women-Kurta-Sets-8531643693008464-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16857684/2022/2/1/d7e8761b-6032-4fa6-9aa6-83f253e982911643693009626-Libas-Women-Kurta-Sets-8531643693008464-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/16857684/2022/2/1/d7e8761b-6032-4fa6-9aa6-83f253e982911643693009626-Libas-Women-Kurta-Sets-8531643693008464-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16857684/2022/2/1/d7e8761b-6032-4fa6-9aa6-83f253e982911643693009626-Libas-Women-Kurta-Sets-8531643693008464-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/16857684/2022/2/1/d7e8761b-6032-4fa6-9aa6-83f253e982911643693009626-Libas-Women-Kurta-Sets-8531643693008464-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/16857684/2022/2/1/d7e8761b-6032-4fa6-9aa6-83f253e982911643693009626-Libas-Women-Kurta-Sets-8531643693008464-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/16857684/2022/2/1/d7e8761b-6032-4fa6-9aa6-83f253e982911643693009626-Libas-Women-Kurta-Sets-8531643693008464-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16857684/2022/2/1/d7e8761b-6032-4fa6-9aa6-83f253e982911643693009626-Libas-Women-Kurta-Sets-8531643693008464-1.jpg",
      "./w2_files/d7e8761b-6032-4fa6-9aa6-83f253e982911643693009626-Libas-Women-Kurta-Sets-8531643693008464-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL", "XXL"],
    "rating": "4.4",
    "rating_count": "454"
  },
  {
    "category": "Womens",
    "title": "Varanga",
    "subtitle": "Women Printed Kurta",
    "discounted_price": "703",
    "strike_price": "2199",
    "discount": "(68% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14025916/2021/6/16/71e61247-d9d9-4c7f-9db7-a332eb84541f1623827034043-Varanga-Blue-And-White-Striped-Straight--Kurta-With-V-Shape--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14025916/2021/6/16/71e61247-d9d9-4c7f-9db7-a332eb84541f1623827034043-Varanga-Blue-And-White-Striped-Straight--Kurta-With-V-Shape--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/14025916/2021/6/16/71e61247-d9d9-4c7f-9db7-a332eb84541f1623827034043-Varanga-Blue-And-White-Striped-Straight--Kurta-With-V-Shape--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/14025916/2021/6/16/71e61247-d9d9-4c7f-9db7-a332eb84541f1623827034043-Varanga-Blue-And-White-Striped-Straight--Kurta-With-V-Shape--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/14025916/2021/6/16/71e61247-d9d9-4c7f-9db7-a332eb84541f1623827034043-Varanga-Blue-And-White-Striped-Straight--Kurta-With-V-Shape--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/14025916/2021/6/16/71e61247-d9d9-4c7f-9db7-a332eb84541f1623827034043-Varanga-Blue-And-White-Striped-Straight--Kurta-With-V-Shape--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/14025916/2021/6/16/71e61247-d9d9-4c7f-9db7-a332eb84541f1623827034043-Varanga-Blue-And-White-Striped-Straight--Kurta-With-V-Shape--1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14025916/2021/6/16/71e61247-d9d9-4c7f-9db7-a332eb84541f1623827034043-Varanga-Blue-And-White-Striped-Straight--Kurta-With-V-Shape--1.jpg",
      "./w2_files/71e61247-d9d9-4c7f-9db7-a332eb84541f1623827034043-Varanga-Blue-And-White-Striped-Straight--Kurta-With-V-Shape--1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.2",
    "rating_count": "1.8k"
  },
  {
    "category": "Womens",
    "title": "Difference of Opinion",
    "subtitle": "Printed Cotton T-shirt",
    "discounted_price": "475",
    "strike_price": "1399",
    "discount": "(66% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15599320/2022/4/28/c06a6b1a-4e0b-43ed-ad2e-394b588a0d8b1651144480179-Difference-of-Opinion-Women-Black-Conversational-Printed-Pur-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15599320/2022/4/28/c06a6b1a-4e0b-43ed-ad2e-394b588a0d8b1651144480179-Difference-of-Opinion-Women-Black-Conversational-Printed-Pur-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/15599320/2022/4/28/c06a6b1a-4e0b-43ed-ad2e-394b588a0d8b1651144480179-Difference-of-Opinion-Women-Black-Conversational-Printed-Pur-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15599320/2022/4/28/c06a6b1a-4e0b-43ed-ad2e-394b588a0d8b1651144480179-Difference-of-Opinion-Women-Black-Conversational-Printed-Pur-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/15599320/2022/4/28/c06a6b1a-4e0b-43ed-ad2e-394b588a0d8b1651144480179-Difference-of-Opinion-Women-Black-Conversational-Printed-Pur-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/15599320/2022/4/28/c06a6b1a-4e0b-43ed-ad2e-394b588a0d8b1651144480179-Difference-of-Opinion-Women-Black-Conversational-Printed-Pur-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/15599320/2022/4/28/c06a6b1a-4e0b-43ed-ad2e-394b588a0d8b1651144480179-Difference-of-Opinion-Women-Black-Conversational-Printed-Pur-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15599320/2022/4/28/c06a6b1a-4e0b-43ed-ad2e-394b588a0d8b1651144480179-Difference-of-Opinion-Women-Black-Conversational-Printed-Pur-1.jpg",
      "./w2_files/c06a6b1a-4e0b-43ed-ad2e-394b588a0d8b1651144480179-Difference-of-Opinion-Women-Black-Conversational-Printed-Pur-1.jpg"
    ],
    "size": ["XS", "S", "M", "L", "XL"],
    "rating": "4.3",
    "rating_count": "407"
  },
  {
    "category": "Womens",
    "title": "H&M",
    "subtitle": "Cigarette trousers",
    "discounted_price": null,
    "strike_price": "1499",
    "discount": null,
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/11/77b35c02-855a-451a-8167-efda7e7351d21565468587932-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/11/77b35c02-855a-451a-8167-efda7e7351d21565468587932-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/11/77b35c02-855a-451a-8167-efda7e7351d21565468587932-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/11/77b35c02-855a-451a-8167-efda7e7351d21565468587932-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/11/77b35c02-855a-451a-8167-efda7e7351d21565468587932-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/11/77b35c02-855a-451a-8167-efda7e7351d21565468587932-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/11/77b35c02-855a-451a-8167-efda7e7351d21565468587932-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/11/77b35c02-855a-451a-8167-efda7e7351d21565468587932-1.jpg",
      "./w2_files/77b35c02-855a-451a-8167-efda7e7351d21565468587932-1.jpg"
    ],
    "size": ["23", "25", "27", "28", "30", "31", "33", "34"],
    "rating": "4.5",
    "rating_count": "1.6k"
  },
  {
    "category": "Womens",
    "title": "Kotty",
    "subtitle": "Women Flared Jeans",
    "discounted_price": "639",
    "strike_price": "1999",
    "discount": "(68% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/15/98e4cd89-4c1a-40ed-a659-645f5c2d3f801608051833514-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/15/98e4cd89-4c1a-40ed-a659-645f5c2d3f801608051833514-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/15/98e4cd89-4c1a-40ed-a659-645f5c2d3f801608051833514-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/15/98e4cd89-4c1a-40ed-a659-645f5c2d3f801608051833514-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/15/98e4cd89-4c1a-40ed-a659-645f5c2d3f801608051833514-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/15/98e4cd89-4c1a-40ed-a659-645f5c2d3f801608051833514-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/15/98e4cd89-4c1a-40ed-a659-645f5c2d3f801608051833514-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/15/98e4cd89-4c1a-40ed-a659-645f5c2d3f801608051833514-1.jpg",
      "./w2_files/98e4cd89-4c1a-40ed-a659-645f5c2d3f801608051833514-1.jpg"
    ],
    "size": ["26", "28", "30", "32", "34"],
    "rating": "4.1",
    "rating_count": "3.3k"
  },
  {
    "category": "Womens",
    "title": "Anubhutee",
    "subtitle": "Ethnic Embroidered Kurta Set",
    "discounted_price": "986",
    "strike_price": "2989",
    "discount": "(67% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10942370/2022/4/19/ec7101dc-431b-47d2-9c86-d53fc4fda3681650365990558AnubhuteeWomenNavyBluePaisleyFloralEmbroideryKurtaSet1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10942370/2022/4/19/ec7101dc-431b-47d2-9c86-d53fc4fda3681650365990558AnubhuteeWomenNavyBluePaisleyFloralEmbroideryKurtaSet1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/10942370/2022/4/19/ec7101dc-431b-47d2-9c86-d53fc4fda3681650365990558AnubhuteeWomenNavyBluePaisleyFloralEmbroideryKurtaSet1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10942370/2022/4/19/ec7101dc-431b-47d2-9c86-d53fc4fda3681650365990558AnubhuteeWomenNavyBluePaisleyFloralEmbroideryKurtaSet1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/10942370/2022/4/19/ec7101dc-431b-47d2-9c86-d53fc4fda3681650365990558AnubhuteeWomenNavyBluePaisleyFloralEmbroideryKurtaSet1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/10942370/2022/4/19/ec7101dc-431b-47d2-9c86-d53fc4fda3681650365990558AnubhuteeWomenNavyBluePaisleyFloralEmbroideryKurtaSet1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/10942370/2022/4/19/ec7101dc-431b-47d2-9c86-d53fc4fda3681650365990558AnubhuteeWomenNavyBluePaisleyFloralEmbroideryKurtaSet1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10942370/2022/4/19/ec7101dc-431b-47d2-9c86-d53fc4fda3681650365990558AnubhuteeWomenNavyBluePaisleyFloralEmbroideryKurtaSet1.jpg",
      "./w2_files/ec7101dc-431b-47d2-9c86-d53fc4fda3681650365990558AnubhuteeWomenNavyBluePaisleyFloralEmbroideryKurtaSet1.jpg"
    ],
    "size": ["S", "M", "L", "XL", "XXL"],
    "rating": "4.4",
    "rating_count": "21.4k"
  }]
const womenData=()=>{
     
    

    return (
        <>
       
      
       {/* <Button top='100px' onClick={()=>setOrderBy(asc)}>Order by price-Ascending</Button> */}
     <SimpleGrid columns={{ base:1,sm:2, md:3, lg:4  }} spacing='10px' p='20px' w='90%' ml='10%'>
        
          { womensData.map((el)=> (
          <Box columns={[2, null, 3]} spacing='40px'  mt='120px' mb='-80px'>
          <Image  boxSize='310px' src={el.images[0]}/>
          <Text color='gray'>New Season</Text>
         <Text fontSize='20px' as='b'> {el.title} </Text>
         <Text fontSize='16px'> {el.subtitle} </Text>

         <Text mt='20px'>${el.strike_price}</Text>
          </Box> ))}  
     </SimpleGrid>
     </>
    )
 }   
 export default womenData;