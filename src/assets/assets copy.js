import japan_pic1 from './japan.jpeg'
import japan_flag from './japan_flag.svg'

import hongkong_pic1 from './hongkong.jpeg'
import hongkong_flag from './hongkong_flag.svg'

import thai_pic1 from './thai.jpeg'
import thai_flag from './thai_flag.svg'

import logo from './logo.png'
import bubududu1_logo from './bubududu1_logo.png'
import arrow from './arrow.svg'
import instagram from './instagram.png'

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

// Hongkong Photo Days
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

// Thai Photo Days
import thailand_day1_noodle from './thailand-days/day-1/noodle.jpeg'
import thailand_day1_bae from './thailand-days/day-1/bae.jpeg'
import thailand_day1_xn from './thailand-days/day-1/xn.jpeg'
import thailand_day1_mbk from './thailand-days/day-1/mbk.jpeg'
import thailand_day1_soup from './thailand-days/day-1/soup.jpeg'
import thailand_day1_tuktuk from './thailand-days/day-1/tuktuk.jpeg'
import thailand_day1_bae_gallery from './thailand-days/day-1/bae.jpeg'

import thailand_day2_us from './thailand-days/day-2/us.jpeg'
import thailand_day2_random from './thailand-days/day-2/random.jpeg'
import thailand_day2_night from './thailand-days/day-2/night.jpeg'
import thailand_day2_buddha from './thailand-days/day-2/buddha.jpeg'
import thailand_day2_rice from './thailand-days/day-2/rice.jpeg'
import thailand_day2_bingsu from './thailand-days/day-2/bingsu.jpeg'
import thailand_day2_bae from './thailand-days/day-2/bae.jpeg'

export const assets = {
    logo,
    bubududu1_logo,
    arrow,
    instagram
}

export const blog_data = [{
    id: 1,
    title: "Snow-Kissed Serenity: Unveiling Japan's Winter Wonders",
    description: "Embark on a journey to the Land of the Rising Sun, where ancient traditions seamlessly blend with futuristic innovation.",
    image: japan_pic1,
    places: "Tokyo - Nagano - Kanazawa - Takayama - Shirakawago - Kyoto - Osaka",
    date: "23.01.25 - 02.02.25",
    category: "2025",
    flag: japan_flag,
    facts: {
        language: "Japanese; 'Thank you' is 'arigatou gozaimasu'",
        religion: "Buddhism & Shinto",
        currency: "Japanese Yen (JPY)",
        capital: "Tokyo",
        budget: "A hot & delicious ramen bowl costs around 800 JPY ~ 140K VND",
        transport: "Complex train system, taxi, real-time buses, walking"
    },
    days: [
        {
            day: 1,
            city: "tokyo",
            day_description: "Immerse yourself in Tokyo's winter charm, where dazzling illuminations paint the city nights. Explore vibrant districts, find cozy cafes, and discover serene snow-dusted gardens. Warm up with delicious ramen after navigating the iconic Shibuya crossing under a crisp winter sky.",
            images: [
                {
                    label: "welcome to Japan!!",
                    location: "tokyo",
                    src: japan_day1_welcome
                },
                {
                    label: "bae @ vending machine",
                    location: "tokyo",
                    src: japan_day1_bae
                },
                {
                    label: "train from narita to city",
                    location: "tokyo",
                    src: japan_day1_train
                },
                {
                    label: "food - fall for ramen",
                    location: "tokyo",
                    src: japan_day1_food
                },
                {
                    label: "us facing tokyo sky tree",
                    location: "tokyo",
                    src: japan_day1_us
                },
                {
                    label: "tokyo sky tree",
                    location: "tokyo",
                    src: japan_day1_tokyo_skytree
                }
            ]
        },
        {
            day: 2,
            city: "tokyo",
            day_description: "Immerse yourself in Tokyo's winter charm, where dazzling illuminations paint the city nights. Explore vibrant districts, find cozy cafes, and discover serene snow-dusted gardens. Warm up with delicious ramen after navigating the iconic Shibuya crossing under a crisp winter sky.",
            images: [
                {
                    label: "morning matcha",
                    location: "tokyo",
                    src: japan_day2_matcha
                },
                {
                    label: "bae @ ghibli store",
                    location: "tokyo",
                    src: japan_day2_bae
                },
                {
                    label: "random girls in kimono",
                    location: "tokyo",
                    src: japan_day2_random
                },
                {
                    label: "sensō-ji temple",
                    location: "tokyo",
                    src: japan_day2_temple
                },
                {
                    label: "food - gyukatsu",
                    location: "tokyo",
                    src: japan_day2_food
                },
                {
                    label: "dinner - family mart",
                    location: "tokyo",
                    src: japan_day2_midnight_food
                }
            ]
        },
        {
            day: 3,
            city: "tokyo",
            day_description: "Immerse yourself in Tokyo's winter charm, where dazzling illuminations paint the city nights. Explore vibrant districts, find cozy cafes, and discover serene snow-dusted gardens. Warm up with delicious ramen after navigating the iconic Shibuya crossing under a crisp winter sky.",
            images: [
                {
                    label: "us wandering around",
                    location: "tokyo",
                    src: japan_day3_us
                },
                {
                    label: "donki store",
                    location: "tokyo",
                    src: japan_day3_donki
                },
                {
                    label: "xn @ tokyo station",
                    location: "tokyo",
                    src: japan_day3_xn
                },
                {
                    label: "bae @ tokyo station",
                    location: "tokyo",
                    src: japan_day3_bae
                },
                {
                    label: "sushi @ shibuya",
                    location: "tokyo",
                    src: japan_day3_sushi
                },
                {
                    label: "harrypotter @ akasaka",
                    location: "tokyo",
                    src: japan_day3_harrypotter
                }
            ]
        }
    ]
    },
    {
    id: 2,
    title: "Skyscraper Spectacle & Dim Sum Delights",
    description: "Experience the dynamic energy of Hong Kong, a vibrant metropolis where East meets West in a dazzling display of culture, cuisine, and breathtaking skylines.",
    image: hongkong_pic1,
    places: "Victoria Habour - Hongkong Observation Wheel - Lan Kwai Fong - Disneyland - 1881 Heritage",
    date: "26.04.24 - 30.04.24",
    category: "2024",
    flag: hongkong_flag,
    facts: {
        language: "Cantonese; 'Hello' is 'nei hou'",
        religion: "Buddhism & Taoism",
        currency: "Hong Kong Dollar (HKD)",
        capital: "Hong Kong",
        budget: "A meal costs around HK$50 ~ 160K VND",
        transport: "Train system, buses, ding ding, taxi, walking"
    },
    days: [
        {
            day: 1,
            city: "hongkong",
            day_description: "Experience the dynamic energy of Hong Kong, a vibrant metropolis where East meets West in a dazzling display of culture, cuisine, and breathtaking skylines. Explore bustling markets filled with treasures, ascend Victoria Peak for panoramic city views, and savor world-class dim sum and international flavors.",
            images: [
                {
                    label: "welcome to hongkong!!",
                    location: "hongkong",
                    src: hongkong_day1_octopus
                },
                {
                    label: "us @ airport",
                    location: "hongkong",
                    src: hongkong_day1_airport
                },
                {
                    label: "random photograph",
                    location: "hongkong",
                    src: hongkong_day1_random
                },
                {
                    label: "lunch time with pork-duck rices",
                    location: "hongkong",
                    src: hongkong_day1_food
                },
                {
                    label: "bae @ victoria harbour",
                    location: "hongkong",
                    src: hongkong_day1_bae
                },
                {
                    label: "xn @ victoria harbour",
                    location: "hongkong",
                    src: hongkong_day1_xn
                },
                {
                    label: "symphony of lights at 8pm",
                    location: "hongkong",
                    src: hongkong_day1_night
                }
            ]
        },
        {
            "day": 2,
            "city": "hongkong",
            "day_description": "Experience the dynamic energy of Hong Kong, a vibrant metropolis where East meets West in a dazzling display of culture, cuisine, and breathtaking skylines. Explore bustling markets filled with treasures, ascend Victoria Peak for panoramic city views, and savor world-class dim sum and international flavors.",
            "images": [
                {
                    label: "random street photograph",
                    location: "hongkong",
                    src: hongkong_day2_random
                },
                {
                    label: "bae",
                    location: "hongkong",
                    src: hongkong_day2_bae
                },
                {
                    label: "wheel",
                    location: "hongkong",
                    src: hongkong_day2_wheel
                },
                {
                    label: "xn",
                    location: "hongkong",
                    src: hongkong_day2_xn
                },
                {
                    label: "ding ding ~",
                    location: "hongkong",
                    src: hongkong_day2_dingding
                },
                {
                    label: "longest escalator",
                    location: "hongkong",
                    src: hongkong_day2_escalator
                },
                {
                    label: "bao & dimsum",
                    location: "hongkong",
                    src: hongkong_day2_food
                }
            ]
        }
    ]
    },
    {
    id: 3,
    title: "Spicy Aromas & Street Food Feasts",
    description: "Immerse yourself in the exotic allure of Thailand, the 'Land of Smiles,' renowned for its stunning golden temples, tropical beaches, and vibrant cultural heritage.",
    image: thai_pic1,
    places: "Siam Area - Jodd Fair Night Market - Wat Paknam Temple - Yaowarat - Talat Noi - Icon Siam - Bangkok Grand Palace",
    date: "02.12.23 - 05.12.23",
    category: "2023",
    flag: thai_flag,
    facts: {
        language: "Thai; 'Hello' is 'sà-wàt-dii khrap (men)'",
        religion: "Buddhism & Islam",
        currency: "Thai Baht (THB)",
        capital: "Bangkok",
        budget: "A meal costs around 80 baht ~ 60K VND",
        transport: "Train system, buses, taxi, walking"
    },
    days: [
        {
            day: 1,
            city: "thailand",
            day_description: "Immerse yourself in the exotic allure of Thailand, the 'Land of Smiles,' renowned for its stunning golden temples, idyllic tropical beaches, and vibrant cultural heritage. Explore bustling Bangkok with its ornate palaces and bustling markets, indulge in the tantalizing flavors of Thai cuisine.",
            images: [
                {
                    label: "start food trip @ thailand!!",
                    location: "thailand",
                    src: thailand_day1_noodle
                },
                {
                    label: "xn @ cafeshop",
                    location: "thailand",
                    src: thailand_day1_xn
                },
                {
                    label: "soup soup ~",
                    location: "thailand",
                    src: thailand_day1_soup
                },
                {
                    label: "bae @ center",
                    location: "thailand",
                    src: thailand_day1_bae
                },
                {
                    label: "mbk center",
                    location: "thailand",
                    src: thailand_day1_mbk
                },
                {
                    label: "bae @ gallery",
                    location: "thailand",
                    src: thailand_day1_bae_gallery
                },
                {
                    label: "tuktuk at night",
                    location: "thailand",
                    src: thailand_day1_tuktuk
                }
            ]
        },
        {
            day: 2,
            city: "thailand",
            day_description: "Immerse yourself in the exotic allure of Thailand, the 'Land of Smiles,' renowned for its stunning golden temples, idyllic tropical beaches, and vibrant cultural heritage. Explore bustling Bangkok with its ornate palaces and bustling markets, indulge in the tantalizing flavors of Thai cuisine.",
            images: [
                {
                    label: "us @ mrt station",
                    location: "thailand",
                    src: thailand_day2_us
                },
                {
                    label: "wat paknam",
                    location: "thailand",
                    src: thailand_day2_buddha
                },
                {
                    label: "bae @ cafeshop",
                    location: "thailand",
                    src: thailand_day2_bae
                },
                {
                    label: "spicy chicken/pork minced with rice",
                    location: "thailand",
                    src: thailand_day2_rice
                },
                {
                    label: "afteryou - mango bingsu",
                    location: "thailand",
                    src: thailand_day2_bingsu
                },
                {
                    label: "dinner",
                    location: "thailand",
                    src: thailand_day2_night
                },
                {
                    label: "random photograph",
                    location: "thailand",
                    src: thailand_day2_random
                }
            ]
        }
    ]
    }
]