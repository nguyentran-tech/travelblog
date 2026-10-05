import japan_pic1 from './japan-days/japan.jpeg'
import japan_flag from './japan-days/japan_flag.svg'

import hongkong_pic1 from './hongkong-days/hongkong.jpeg'
import hongkong_flag from './hongkong-days/hongkong_flag.svg'

import thai_pic1 from './thailand-days/thai.jpeg'
import thai_flag from './thailand-days/thai_flag.svg'

// Japan Photo Days
import japan_day1_bae from './japan-days/day-1/bae.jpeg'
import japan_day1_food from './japan-days/day-1/food.jpeg'
import japan_day1_tokyo_skytree from './japan-days/day-1/tokyo_skytree.jpeg'
import japan_day1_train from './japan-days/day-1/train.jpeg'
import japan_day1_us from './japan-days/day-1/us.jpeg'
import japan_day1_welcome from './japan-days/day-1/welcome.jpeg'

import japan_day2_bae from './japan-days/day-2/bae.jpeg'
import japan_day2_food from './japan-days/day-2/food.jpeg'
import japan_day2_matcha from './japan-days/day-2/matcha.jpeg'
import japan_day2_midnight_food from './japan-days/day-2/midnight_food.jpeg'
import japan_day2_random from './japan-days/day-2/random.jpeg'
import japan_day2_temple from './japan-days/day-2/temple.jpeg'

import japan_day3_bae from './japan-days/day-3/bae.jpeg'
import japan_day3_donki from './japan-days/day-3/donki.jpeg'
import japan_day3_harrypotter from './japan-days/day-3/harrypotter.jpeg'
import japan_day3_sushi from './japan-days/day-3/sushi.jpeg'
import japan_day3_us from './japan-days/day-3/us.jpeg'
import japan_day3_xn from './japan-days/day-3/xn.jpeg'

// Hong Kong Photo Days
import hongkong_day1_octopus from './hongkong-days/day-1/octopus.jpeg'
import hongkong_day1_airport from './hongkong-days/day-1/airport.jpeg'
import hongkong_day1_bae from './hongkong-days/day-1/bae.jpeg'
import hongkong_day1_random from './hongkong-days/day-1/random.jpeg'
import hongkong_day1_food from './hongkong-days/day-1/food.jpeg'
import hongkong_day1_night from './hongkong-days/day-1/night.jpeg'
import hongkong_day1_xn from './hongkong-days/day-1/xn.jpeg'

import hongkong_day2_dingding from './hongkong-days/day-2/dingding.jpeg'
import hongkong_day2_random from './hongkong-days/day-2/random.jpeg'
import hongkong_day2_bae from './hongkong-days/day-2/bae.jpeg'
import hongkong_day2_wheel from './hongkong-days/day-2/wheel.jpeg'
import hongkong_day2_food from './hongkong-days/day-2/food.jpeg'
import hongkong_day2_escalator from './hongkong-days/day-2/escalator.jpeg'
import hongkong_day2_xn from './hongkong-days/day-2/xn.jpeg'

// Thailand Photo Days
import thailand_day1_noodle from './thailand-days/day-1/noodle.jpeg'
import thailand_day1_bae from './thailand-days/day-1/bae.jpeg'
import thailand_day1_xn from './thailand-days/day-1/xn.jpeg'
import thailand_day1_mbk from './thailand-days/day-1/mbk.jpeg'
import thailand_day1_soup from './thailand-days/day-1/soup.jpeg'
import thailand_day1_tuktuk from './thailand-days/day-1/tuktuk.jpeg'
import thailand_day1_bae_gallery from './thailand-days/day-1/bae_gallery.jpeg'

import thailand_day2_us from './thailand-days/day-2/us.jpeg'
import thailand_day2_random from './thailand-days/day-2/random.jpeg'
import thailand_day2_night from './thailand-days/day-2/night.jpeg'
import thailand_day2_buddha from './thailand-days/day-2/buddha.jpeg'
import thailand_day2_rice from './thailand-days/day-2/rice.jpeg'
import thailand_day2_bingsu from './thailand-days/day-2/bingsu.jpeg'
import thailand_day2_bae from './thailand-days/day-2/bae.jpeg'


export const destinations = [
  {
    id: "japan",
    name: "Japan",
    date: "23.01.2025 - 02.02.2025",
    location: "Tokyo - Nagano - Kanazawa - Takayama - Shirakawago - Kyoto - Osaka",
    cover: japan_pic1,
    flag: japan_flag,
    description:
      "Snow-Kissed Serenity: Unveiling Japan's Winter Wonders",

    days: [
      {
        day: 1,
        title: "First day",
        location: "Tokyo",
        date: "May 12, 2026",
        highlight: "The train ride to Interlaken",
        description:
          "Immerse yourself in Tokyo's winter charm, where dazzling illuminations paint the city nights. Explore vibrant districts, find cozy cafes, and discover serene snow-dusted gardens. Warm up with delicious ramen after navigating the iconic Shibuya crossing under a crisp winter sky.",

        images: [
          {
            alt: "welcome to Japan!!",
            src: japan_day1_welcome,
            imageKey: "japan-days/day-1/welcome",
            featured: true
          },
          {
            alt: "bae @ vending machine",
            src: japan_day1_bae,
            imageKey: "japan-days/day-1/bae"
          },
          {
            alt: "train from narita to city",
            src: japan_day1_train,
            imageKey: "japan-days/day-1/train"
          },
          {
            alt: "food - fall for ramen",
            src: japan_day1_food,
            imageKey: "japan-days/day-1/food"
          },
          {
            alt: "us facing tokyo sky tree",
            src: japan_day1_us,
            imageKey: "japan-days/day-1/us",
            featured: true
          },
          {
            alt: "tokyo sky tree",
            src: japan_day1_tokyo_skytree,
            imageKey: "japan-days/day-1/tokyo_skytree"
          }
        ]
      },

      {
        day: 2,
        title: "Second day",
        location: "Tokyo",
        date: "May 13, 2026",
        highlight: "The train ride to Interlaken",
        description:
          "Immerse yourself in Tokyo's winter charm, where dazzling illuminations paint the city nights. Explore vibrant districts, find cozy cafes, and discover serene snow-dusted gardens. Warm up with delicious ramen after navigating the iconic Shibuya crossing under a crisp winter sky.",

        images: [
          {
            alt: "morning matcha",
            src: japan_day2_matcha,
            imageKey: "japan-days/day-2/matcha",
            featured: true
          },
          {
            alt: "bae @ ghibli store",
            src: japan_day2_bae,
            imageKey: "japan-days/day-2/bae"
          },
          {
            alt: "random girls in kimono",
            src: japan_day2_random,
            imageKey: "japan-days/day-2/random",
            featured: true
          },
          {
            alt: "sensō-ji temple",
            src: japan_day2_temple,
            imageKey: "japan-days/day-2/temple"
          },
          {
            alt: "food - gyukatsu",
            src: japan_day2_food,
            imageKey: "japan-days/day-2/food"
          },
          {
            alt: "dinner - family mart",
            src: japan_day2_midnight_food,
            imageKey: "japan-days/day-2/midnight_food"
          }
        ]
      },

      {
        day: 3,
        title: "Third day",
        location: "Tokyo",
        date: "May 14, 2026",
        highlight: "The train ride to Interlaken",
        description:
          "Immerse yourself in Tokyo's winter charm, where dazzling illuminations paint the city nights. Explore vibrant districts, find cozy cafes, and discover serene snow-dusted gardens. Warm up with delicious ramen after navigating the iconic Shibuya crossing under a crisp winter sky.",

        images: [
          {
            alt: "us wandering around",
            src: japan_day3_us,
            imageKey: "japan-days/day-3/us"
          },
          {
            alt: "donki store",
            src: japan_day3_donki,
            imageKey: "japan-days/day-3/donki"
          },
          {
            alt: "xn @ tokyo station",
            src: japan_day3_xn,
            imageKey: "japan-days/day-3/xn",
            featured: true
          },
          {
            alt: "bae @ tokyo station",
            src: japan_day3_bae,
            imageKey: "japan-days/day-3/bae",
            featured: true
          },
          {
            alt: "sushi @ shibuya",
            src: japan_day3_sushi,
            imageKey: "japan-days/day-3/sushi"
          },
          {
            alt: "harrypotter @ akasaka",
            src: japan_day3_harrypotter,
            imageKey: "japan-days/day-3/harrypotter"
          }
        ]
      }
    ]
  },


  {
    id: "hongkong",
    name: "Hong Kong",
    date: "26.04.2024 - 30.04.2024",
    location: "Victoria Habour - Hongkong Observation Wheel - Lan Kwai Fong - Disneyland - 1881 Heritage",
    cover: hongkong_pic1,
    flag: hongkong_flag,
    description:
      "Skyscraper Spectacle & Dim Sum Delights",

    days: [
      {
        day: 1,
        title: "First day",
        location: "Hongkong",
        description:
          "Experience the dynamic energy of Hong Kong, a vibrant metropolis where East meets West in a dazzling display of culture, cuisine, and breathtaking skylines. Explore bustling markets filled with treasures, ascend Victoria Peak for panoramic city views, and savor world-class dim sum and international flavors.",

        images: [
          {
            alt: "welcome to hongkong!!",
            src: hongkong_day1_octopus,
            imageKey: "hongkong-days/day-1/octopus"
          },
          {
            alt: "us @ airport",
            src: hongkong_day1_airport,
            imageKey: "hongkong-days/day-1/airport",
            featured: true
          },
          {
            alt: "random photograph",
            src: hongkong_day1_random,
            imageKey: "hongkong-days/day-1/random",
            featured: true
          },
          {
            alt: "lunch time with pork-duck rices",
            src: hongkong_day1_food,
            imageKey: "hongkong-days/day-1/food"
          },
          {
            alt: "bae @ victoria harbour",
            src: hongkong_day1_bae,
            imageKey: "hongkong-days/day-1/bae"
          },
          {
            alt: "xn @ victoria harbour",
            src: hongkong_day1_xn,
            imageKey: "hongkong-days/day-1/xn"
          },
          {
            alt: "symphony of lights at 8pm",
            src: hongkong_day1_night,
            imageKey: "hongkong-days/day-1/night"
          }
        ]
      },

      {
        day: 2,
        title: "Second day",
        location: "Hongkong",
        description:
          "Experience the dynamic energy of Hong Kong, a vibrant metropolis where East meets West in a dazzling display of culture, cuisine, and breathtaking skylines. Explore bustling markets filled with treasures, ascend Victoria Peak for panoramic city views, and savor world-class dim sum and international flavors.",

        images: [
          {
            alt: "random street photograph",
            src: hongkong_day2_random,
            imageKey: "hongkong-days/day-2/random",
            featured: true
          },
          {
            alt: "bae",
            src: hongkong_day2_bae,
            imageKey: "hongkong-days/day-2/bae"
          },
          {
            alt: "wheel",
            src: hongkong_day2_wheel,
            imageKey: "hongkong-days/day-2/wheel"
          },
          {
            alt: "xn",
            src: hongkong_day2_xn,
            imageKey: "hongkong-days/day-2/xn"
          },
          {
            alt: "ding ding ~",
            src: hongkong_day2_dingding,
            imageKey: "hongkong-days/day-2/dingding",
            featured: true
          },
          {
            alt: "longest escalator",
            src: hongkong_day2_escalator,
            imageKey: "hongkong-days/day-2/escalator"
          },
          {
            alt: "bao & dimsum",
            src: hongkong_day2_food,
            imageKey: "hongkong-days/day-2/food"
          }
        ]
      }
    ]
  },


  {
    id: "thailand",
    name: "Thailand",
    date: "02.12.2023 - 05.12.2023",
    location: "Siam Area - Jodd Fair Night Market - Wat Paknam Temple - Yaowarat - Talat Noi - Icon Siam - Bangkok Grand Palace",
    cover: thai_pic1,
    flag: thai_flag,
    description:
      "Spicy Aromas & Street Food Feasts",

    days: [
      {
        day: 1,
        title: "First day",
        location: "Thailand",
        day_description:
          "Immerse yourself in the exotic allure of Thailand, the 'Land of Smiles,' renowned for its stunning golden temples, idyllic tropical beaches, and vibrant cultural heritage. Explore bustling Bangkok with its ornate palaces and bustling markets, indulge in the tantalizing flavors of Thai cuisine.",

        images: [
          {
            alt: "start food trip @ thailand!!",
            src: thailand_day1_noodle,
            imageKey: "thailand-days/day-1/noodle"
          },
          {
            alt: "xn @ cafeshop",
            src: thailand_day1_xn,
            imageKey: "thailand-days/day-1/xn"
          },
          {
            alt: "soup soup ~",
            src: thailand_day1_soup,
            imageKey: "thailand-days/day-1/soup"
          },
          {
            alt: "bae @ center",
            src: thailand_day1_bae,
            imageKey: "thailand-days/day-1/bae"
          },
          {
            alt: "mbk center",
            src: thailand_day1_mbk,
            imageKey: "thailand-days/day-1/mbk"
          },
          {
            alt: "bae @ gallery",
            src: thailand_day1_bae_gallery,
            imageKey: "thailand-days/day-1/bae_gallery",
            featured: true
          },
          {
            alt: "tuktuk at night",
            src: thailand_day1_tuktuk,
            imageKey: "thailand-days/day-1/tuktuk"
          }
        ]
      },

      {
        day: 2,
        title: "Second day",
        location: "Thailand",
        day_description:
          "Immerse yourself in the exotic allure of Thailand, the 'Land of Smiles,' renowned for its stunning golden temples, idyllic tropical beaches, and vibrant cultural heritage. Explore bustling Bangkok with its ornate palaces and bustling markets, indulge in the tantalizing flavors of Thai cuisine.",

        images: [
          {
            alt: "us @ mrt station",
            src: thailand_day2_us,
            imageKey: "thailand-days/day-2/us",
            featured: true
          },
          {
            alt: "wat paknam",
            src: thailand_day2_buddha,
            imageKey: "thailand-days/day-2/buddha"
          },
          {
            alt: "bae @ cafeshop",
            src: thailand_day2_bae,
            imageKey: "thailand-days/day-2/bae"
          },
          {
            alt: "spicy chicken/pork minced with rice",
            src: thailand_day2_rice,
            imageKey: "thailand-days/day-2/rice"
          },
          {
            alt: "afteryou - mango bingsu",
            src: thailand_day2_bingsu,
            imageKey: "thailand-days/day-2/bingsu"
          },
          {
            alt: "dinner",
            src: thailand_day2_night,
            imageKey: "thailand-days/day-2/night"
          },
          {
            alt: "random photograph",
            src: thailand_day2_random,
            imageKey: "thailand-days/day-2/random"
          }
        ]
      }
    ]
  }
]