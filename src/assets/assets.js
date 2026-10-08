// Country Flags
//#region
import cn_flag from './flags/cnflag.svg'
import vn_flag from './flags/vnflag.svg'
import jp_flag from './flags/jpflag.svg'
import indo_flag from './flags/indoflag.svg'
import hk_flag from './flags/hkflag.svg'
import thai_flag from './flags/thaiflag.svg'
//#endregion

// Destinations
export const destinations = [
  //China
  {
    id: "china",
    name: "China",
    date: "28.08.26 - 03.09.26",
    location: "Hangzhou - Shanghai",
    cover: "china/day-4/bund",
    flag: cn_flag,
    description: "For first time trip coming to China, we decided to visit Hangzhou & Shanghai. In reality, Hangzhou truly gives us nostalgic feelings, while Shanghai showcases their impressive skyscrapers. We didn't even know what cashes look like there... To be honest, we mostly rode bikes there, it is super convenient.",
    days: [
      {
        day: 1,
        title: "Hangzhou",
        location: "In77",
        description: "How happy it feels when we were able to scan QR Code from Alipay to enter train station & make payment.",
        images: [
          {
            alt: "checkin hotel",
            imageKey: "china/day-1/hotel"
          },
          {
            alt: "random photograph",
            imageKey: "china/day-1/random",
            featured: true
          },
          {
            alt: "our fitcheck spot",
            imageKey: "china/day-1/spot"
          },
          {
            alt: "street near hotel",
            imageKey: "china/day-1/bae"
          },
          {
            alt: "us @checkin spot",
            imageKey: "china/day-1/us"
          },
          {
            alt: "beautiful street",
            imageKey: "china/day-1/road",
            featured: true
          },
          {
            alt: "our 1st dinner",
            imageKey: "china/day-1/lunch"
          },
          {
            alt: "xn @heytea",
            imageKey: "china/day-1/xn"
          },
          {
            alt: "our 1st heytea",
            imageKey: "china/day-1/heytea",
            featured: true,
            caption: "heytea is different here"
          },
          {
            alt: "bread store",
            imageKey: "china/day-1/bread"
          }
        ]
      },

      {
        day: 2,
        title: "Hangzhou",
        location: "Westlake",
        // description: "",
        images: [
          {
            alt: "morning fitcheck",
            imageKey: "china/day-2/us"
          },
          {
            alt: "light breakfast",
            imageKey: "china/day-2/breakfast"
          },
          {
            alt: "beautiful spot",
            imageKey: "china/day-2/spot"
          },
          {
            alt: "another beautiful scene",
            imageKey: "china/day-2/scene",
            featured: true
          },
          {
            alt: "westlake",
            imageKey: "china/day-2/westlake"
          },
          {
            alt: "another one",
            imageKey: "china/day-2/random",
            featured: true
          },
          {
            alt: "hi there",
            imageKey: "china/day-2/scene2"
          },
          {
            alt: "our dinner @greentea longjing",
            imageKey: "china/day-2/greentea"
          },
          {
            alt: "another view of westlake",
            imageKey: "china/day-2/random2"
          },
          {
            alt: "bae @westlake",
            imageKey: "china/day-2/bae"
          }
        ]
      },

      {
        day: 3,
        title: "Hangzhou",
        location: "Xiaohe Straight Street - Westlake",
        // description: "",
        images: [
          {
            alt: "what a scene",
            imageKey: "china/day-3/scene",
            featured: true
          },
          {
            alt: "good morning",
            imageKey: "china/day-3/bae"
          },
          {
            alt: "checkin..",
            imageKey: "china/day-3/checkin"
          },
          {
            alt: "xn @random place",
            imageKey: "china/day-3/xn"
          },
          {
            alt: "random photograph",
            imageKey: "china/day-3/random"
          },
          {
            alt: "our snackk",
            imageKey: "china/day-3/snack"
          },
          {
            alt: "hangzhou",
            imageKey: "china/day-3/hangzhou"
          },
          {
            alt: "us again",
            imageKey: "china/day-3/us"
          },
          {
            alt: "stuffed",
            imageKey: "china/day-3/dinner"
          },
          {
            alt: "donutt..",
            imageKey: "china/day-3/donut"
          }
        ]
      },

      {
        day: 4,
        title: "Hangzhou - Shanghai",
        location: "Shangtianzhu Faxi Temple - The Bund",
        // description:"",
        images: [
          {
            alt: "like a movie scene",
            imageKey: "china/day-4/scene",
            featured: true
          },
          {
            alt: "morningg",
            imageKey: "china/day-4/street"
          },
          {
            alt: "fitcheck again",
            imageKey: "china/day-4/us"
          },
          {
            alt: "checkin spot",
            imageKey: "china/day-4/scene2"
          },
          {
            alt: "casual",
            imageKey: "china/day-4/bae"
          },
          {
            alt: "great spot",
            imageKey: "china/day-4/xn"
          },
          {
            alt: "last meal then goin' to city",
            imageKey: "china/day-4/lunch"
          },
          {
            alt: "here goes the bund",
            imageKey: "china/day-4/bund",
            featured: true
          },
          {
            alt: "checkin @thebund",
            imageKey: "china/day-4/bae2"
          },
          {
            alt: "delicious",
            imageKey: "china/day-4/crab"
          }
        ]
      },

      {
        day: 5,
        title: "Shanghai",
        location: "Wukang Mansion - Yuyuan Garden",
        // description: "",
        images: [
          {
            alt: "checkin spo",
            imageKey: "china/day-5/us"
          },
          {
            alt: "a bit salty..",
            imageKey: "china/day-5/breakfast"
          },
          {
            alt: "how cool",
            imageKey: "china/day-5/random",
            featured: true
          },
          {
            alt: "right on da street",
            imageKey: "china/day-5/bae"
          },
          {
            alt: "random photograph",
            imageKey: "china/day-5/random2"
          },
          {
            alt: "delicious",
            imageKey: "china/day-5/dinner"
          },
          {
            alt: "there's always a better one",
            imageKey: "china/day-5/magnet",
          },
          {
            alt: "hii",
            imageKey: "china/day-5/us2"
          },
          {
            alt: "randomly catched it",
            imageKey: "china/day-5/scene"
          },
          {
            alt: "midnight food",
            imageKey: "china/day-5/grill"
          }
        ]
      },

      {
        day: 6,
        title: "Shanghai",
        location: "The Bund - Nanjing Road",
        // description: "",
        images: [
          {
            alt: "check supermarket out",
            imageKey: "china/day-6/market"
          },
          {
            alt: "random mee shop but awesome",
            imageKey: "china/day-6/breakfast"
          },
          {
            alt: "photo spot then",
            imageKey: "china/day-6/bae",
            featured: true
          },
          {
            alt: "xn @the bund",
            imageKey: "china/day-6/xn"
          },
          {
            alt: "random photograph",
            imageKey: "china/day-6/random"
          },
          {
            alt: "checkinn",
            imageKey: "china/day-6/us"
          },
          {
            alt: "another random photograph",
            imageKey: "china/day-6/bund",
            featured: true
          },
          {
            alt: "captured the moment",
            imageKey: "china/day-6/street"
          },
          {
            alt: "good meal",
            imageKey: "china/day-6/dinner"
          },
          {
            alt: "another photo spot",
            imageKey: "china/day-6/night"
          }
        ]
      },

      {
        day: 7,
        title: "Shanghai",
        location: "Panlong - Westbund",
        // description: "",
        images: [
          {
            alt: "good morning",
            imageKey: "china/day-7/bae"
          },
          {
            alt: "popmart",
            imageKey: "china/day-7/popmart"
          },
          {
            alt: "like a movie scene again",
            imageKey: "china/day-7/scene2",
            featured: true
          },
          {
            alt: "what great place to explore",
            imageKey: "china/day-7/xn"
          },
          {
            alt: "another scene again",
            imageKey: "china/day-7/scene"
          },
          {
            alt: "us regretting not to come here earlier",
            imageKey: "china/day-7/us"
          },
          {
            alt: "westbund is cool",
            imageKey: "china/day-7/random"
          },
          {
            alt: "croissant b4 goin' to airport..",
            imageKey: "china/day-7/bread"
          }
        ]
      }
    ]
  },
  
  //Da Nang
  {
    id: "danang",
    name: "Da Nang",
    date: "27.06.26 - 30.06.26",
    location: "Da Nang - Hoi An",
    cover: "danang/day-2/bridge",
    flag: vn_flag,
    description: "Da Nang is our destination for a summer trip, it's quite rushing but really worth it.",
    days: [
      {
        day: 1,
        title: "Da Nang",
        location: "Hai San Ba Ro - Sea View",
        // description: "",
        images: [
          {
            alt: "on da plane",
            imageKey: "danang/day-1/random2"
          },
          {
            alt: "great local restaurant",
            imageKey: "danang/day-1/random"
          },
          {
            alt: "good food",
            imageKey: "danang/day-1/dinner"
          },
          {
            alt: "captured the moment",
            imageKey: "danang/day-1/bae"
          },
          {
            alt: "bun cha ca",
            imageKey: "danang/day-1/breakfast"
          },
          {
            alt: "1st ocean photo",
            imageKey: "danang/day-1/scene",
            featured: true
          },
          {
            alt: "us @photo spot",
            imageKey: "danang/day-1/us"
          },
          {
            alt: "my family luv",
            imageKey: "danang/day-1/family"
          },
          {
            alt: "bun muc",
            imageKey: "danang/day-1/lunch"
          }
        ]
      },

      {
        day: 2,
        title: "Da Nang",
        location: "My Khe Beach - Dragon Bridge",
        // description: "",
        images: [
          {
            alt: "another photograph",
            imageKey: "danang/day-2/random",
            featured: true
          },
          {
            alt: "ocean vibee",
            imageKey: "danang/day-2/bae"
          },
          {
            alt: "food on da sea",
            imageKey: "danang/day-2/seafood"
          },
          {
            alt: "my family luv",
            imageKey: "danang/day-2/family"
          },
          {
            alt: "random photograph",
            imageKey: "danang/day-2/random2"
          },
          {
            alt: "cau rong",
            imageKey: "danang/day-2/bridge"
          },
          {
            alt: "checkinn",
            imageKey: "danang/day-2/us"
          },
          {
            alt: "lovely",
            imageKey: "danang/day-2/love"
          }
        ]
      },

      {
        day: 3,
        title: "Hoi An",
        location: "Chao Ngheu Co Gio - Chua Cau - Mot",
        // description: "",
        images: [
          {
            alt: "breakfast in market",
            imageKey: "danang/day-3/breakfast"
          },
          {
            alt: "cong chua ba mu",
            imageKey: "danang/day-3/hoian",
            featured: true
          },
          {
            alt: "chao ngheu co gio",
            imageKey: "danang/day-3/chao"
          },
          {
            alt: "banh mi",
            imageKey: "danang/day-3/banhmi"
          },
          {
            alt: "checkinn",
            imageKey: "danang/day-3/love"
          },
          {
            alt: "good vibee",
            imageKey: "danang/day-3/bae"
          },
          {
            alt: "my family luv",
            imageKey: "danang/day-3/family"
          },
          {
            alt: "mot hoi an",
            imageKey: "danang/day-3/mot"
          },
          {
            alt: "chill sunset",
            imageKey: "danang/day-3/bae2"
          },
          {
            alt: "what a photograph",
            imageKey: "danang/day-3/scene"
          }
        ]
      },

      {
        day: 4,
        title: "Da Nang",
        location: "My An Beach",
        // description: "",
        images: [
          {
            alt: "my an beach",
            imageKey: "danang/day-4/beach",
            featured: true
          },
          {
            alt: "ocean scene",
            imageKey: "danang/day-4/scene"
          },
          {
            alt: "beach vibe",
            imageKey: "danang/day-4/vibe"
          },
          {
            alt: "an com nha",
            imageKey: "danang/day-4/lunch"
          },
          {
            alt: "lil bro",
            imageKey: "danang/day-4/lilbro"
          },
          {
            alt: "bae @ocean",
            imageKey: "danang/day-4/ocean"
          },
          {
            alt: "hoian",
            imageKey: "danang/day-4/hoian"
          },
          {
            alt: "cao lau mi quang meal",
            imageKey: "danang/day-4/dinner"
          }
        ]
      }
    ]
  },

  //Japan2
  {
    id: "japan2",
    name: "Japan",
    date: "06.12.25 - 14.12.25",
    location: "Sapporo - Tokyo",
    cover: "japan2/day-5/random2",
    flag: jp_flag,
    description: "This winter trip to Sapporo and Tokyo is definitely one of the best memories we ever had. We also found the best spicy miso soup in a random ramen shop.",
    days: [
      {
        day: 1,
        title: "Sapporo",
        location: "Tanukikoji Shopping Street - Odori Park",
        // description: "",
        images: [
          {
            alt: "train to city",
            imageKey: "japan2/day-1/train"
          },
          {
            alt: "random photograph",
            imageKey: "japan2/day-1/random",
          },
          {
            alt: "hi Sapporo Tower",
            imageKey: "japan2/day-1/xn"
          },
          {
            alt: "hi Sapporo Tower",
            imageKey: "japan2/day-1/bae"
          },
          {
            alt: "our very first ramen in Sapporo",
            imageKey: "japan2/day-1/ramen"
          },
          {
            alt: "it's just too cold",
            imageKey: "japan2/day-1/shopping"
          },
          {
            alt: "queue for curry rice",
            imageKey: "japan2/day-1/queue"
          },
          {
            alt: "our dinner",
            imageKey: "japan2/day-1/dinner"
          }
        ]
      },

      {
        day: 2,
        title: "Sapporo",
        location: "Odori Park - Hokkaido Prefectural Government",
        // description: "",
        images: [
          {
            alt: "good morning",
            imageKey: "japan2/day-2/xn"
          },
          {
            alt: "gachaa",
            imageKey: "japan2/day-2/gacha"
          },
          {
            alt: "what a delicious meal",
            imageKey: "japan2/day-2/lunch"
          },
          {
            alt: "xmas vibe",
            imageKey: "japan2/day-2/xmas",
            featured: true
          },
          {
            alt: "checkinn",
            imageKey: "japan2/day-2/us"
          },
          {
            alt: "captured the moment",
            imageKey: "japan2/day-2/bae"
          },
          {
            alt: "sushi",
            imageKey: "japan2/day-2/sushi"
          },
          {
            alt: "checkinn",
            imageKey: "japan2/day-2/us2"
          },
          {
            alt: "get ready for da best miso ramen ever tasted",
            imageKey: "japan2/day-2/queue"
          },
          {
            alt: "best miso ramen",
            imageKey: "japan2/day-2/ramen",
            caption: "the best spicy miso ramen"
          }
        ]
      },

      {
        day: 3,
        title: "Hokkaido",
        location: "Shirahige Waterfall - Biei - Furano",
        // description: "",
        images: [
          {
            alt: "a quick breakfast on train",
            imageKey: "japan2/day-3/breakfast"
          },
          {
            alt: "chill",
            imageKey: "japan2/day-3/xn"
          },
          {
            alt: "this snow vibe",
            imageKey: "japan2/day-3/station",
            featured: true
          },
          {
            alt: "checkinn",
            imageKey: "japan2/day-3/bae"
          },
          {
            alt: "vending machines",
            imageKey: "japan2/day-3/vending"
          },
          {
            alt: "bus coated by snow",
            imageKey: "japan2/day-3/bus"
          },
          {
            alt: "random photograph",
            imageKey: "japan2/day-3/night"
          },
          {
            alt: "random shop for dinner",
            imageKey: "japan2/day-3/dinner"
          },
          {
            alt: "us again @tower",
            imageKey: "japan2/day-3/us"
          },
          {
            alt: "2 times in a row",
            imageKey: "japan2/day-3/ramen"
          }
        ]
      },

      {
        day: 4,
        title: "Hokkaido",
        location: "Funamizaka Slope - Otaru - Beer Museum",
        // description:"",
        images: [
          {
            alt: "snow",
            imageKey: "japan2/day-4/random"
          },
          {
            alt: "seafood market",
            imageKey: "japan2/day-4/crab"
          },
          {
            alt: "what a hill",
            imageKey: "japan2/day-4/hill"
          },
          {
            alt: "say hi in Otaru",
            imageKey: "japan2/day-4/canal",
            featured: true
          },
          {
            alt: "souvenir",
            imageKey: "japan2/day-4/otaru"
          },
          {
            alt: "another xmas vibe",
            imageKey: "japan2/day-4/xmas"
          },
          {
            alt: "sapporo signature",
            imageKey: "japan2/day-4/sapporo"
          },
          {
            alt: "want some beer..",
            imageKey: "japan2/day-4/beer"
          },
          {
            alt: "random photograph",
            imageKey: "japan2/day-4/bus"
          },
          {
            alt: "checkinn again",
            imageKey: "japan2/day-4/us"
          }
        ]
      },

      {
        day: 5,
        title: "Sapporo - Tokyo",
        location: "Shiroi Koibito Park",
        // description: "",
        images: [
          {
            alt: "just beautiful to look at",
            imageKey: "japan2/day-5/random2"
          },
          {
            alt: "a bit salty..",
            imageKey: "japan2/day-5/breakfast"
          },
          {
            alt: "chill",
            imageKey: "japan2/day-5/mountain"
          },
          {
            alt: "right on da street",
            imageKey: "japan2/day-5/bae2"
          },
          {
            alt: "random photograph",
            imageKey: "japan2/day-5/random"
          },
          {
            alt: "koibito park",
            imageKey: "japan2/day-5/koibito"
          },
          {
            alt: "it's lovely here",
            imageKey: "japan2/day-5/bae",
          },
          {
            alt: "lunch before movin' to Tokyo",
            imageKey: "japan2/day-5/lunch"
          },
          {
            alt: "tsukemen..",
            imageKey: "japan2/day-5/ramen"
          },
          {
            alt: "midnight food",
            imageKey: "japan2/day-5/midnight"
          }
        ]
      },

      {
        day: 6,
        title: "Tokyo",
        location: "Ueno - Nishinippori - Tokyo Tower - Azabudai Hills - Roppongi Xmas",
        // description: "",
        images: [
          {
            alt: "random photograph",
            imageKey: "japan2/day-6/random2"
          },
          {
            alt: "saw this before",
            imageKey: "japan2/day-6/tokyo"
          },
          {
            alt: "unagi",
            imageKey: "japan2/day-6/breakfast"
          },
          {
            alt: "kimono",
            imageKey: "japan2/day-6/bae"
          },
          {
            alt: "random photograph",
            imageKey: "japan2/day-6/random",
            featured: true
          },
          {
            alt: "fitcheck",
            imageKey: "japan2/day-6/us"
          },
          {
            alt: "chill",
            imageKey: "japan2/day-6/xn"
          },
          {
            alt: "good matcha here",
            imageKey: "japan2/day-6/matcha"
          },
          {
            alt: "xmas vibe in tokyo",
            imageKey: "japan2/day-6/xmas"
          },
          {
            alt: "still tsukemen",
            imageKey: "japan2/day-6/ramen"
          }
        ]
      },

      {
        day: 7,
        title: "Tokyo",
        location: "Gōtokuji Temple - Shibuya",
        // description: "",
        images: [
          {
            alt: "random photograph",
            imageKey: "japan2/day-7/random"
          },
          {
            alt: "breakfast",
            imageKey: "japan2/day-7/breakfast"
          },
          {
            alt: "what a scene",
            imageKey: "japan2/day-7/scene"
          },
          {
            alt: "cat",
            imageKey: "japan2/day-7/cat"
          },
          {
            alt: "vibe",
            imageKey: "japan2/day-7/xn",
            featured: true
          },
          {
            alt: "right on da street",
            imageKey: "japan2/day-7/bae"
          },
          {
            alt: "cola",
            imageKey: "japan2/day-7/cola"
          },
          {
            alt: "photobooth",
            imageKey: "japan2/day-7/photo"
          },
          {
            alt: "imdonut",
            imageKey: "japan2/day-7/imdonut"
          },
          {
            alt: "our nomikai",
            imageKey: "japan2/day-7/dinner"
          }
        ]
      },

      {
        day: 8,
        title: "Tokyo",
        location: "Kamimeguro - Daikanyama - Yokohama - Ginza",
        // description: "",
        images: [
          {
            alt: "imdonut first",
            imageKey: "japan2/day-8/imdonut"
          },
          {
            alt: "cool",
            imageKey: "japan2/day-8/bae"
          },
          {
            alt: "shiba",
            imageKey: "japan2/day-8/shiba",
            featured: true
          },
          {
            alt: "this ramen is good",
            imageKey: "japan2/day-8/ramen"
          },
          {
            alt: "xmas vibe",
            imageKey: "japan2/day-8/xmas"
          },
          {
            alt: "checkinn",
            imageKey: "japan2/day-8/us"
          },
          {
            alt: "our snack",
            imageKey: "japan2/day-8/snack"
          },
          {
            alt: "fish broth ramen",
            imageKey: "japan2/day-8/dinner"
          },
          {
            alt: "meal before boarding",
            imageKey: "japan2/day-8/meal"
          }
        ]
      }
    ]
  },

  //Bali
  {
    id: "bali",
    name: "Bali",
    date: "30.08.25 - 03.09.25",
    location: "Ubud - Seminyak - Canggu - Uluwatu",
    cover: "bali/day-3/scene",
    flag: indo_flag,
    description: "Everything is so chill in Bali, especially we felt different vibes on one island. We had some funny concerns staying there, like how come gas stations are not many, where is the police station, a lot of bakso that made us stick to a viral melody :), etc.",
    days: [
      {
        day: 1,
        title: "Ubud",
        location: "Jalan Goutama Ubud - Saraswati Temple",
        // description: "",
        images: [
          {
            alt: "gas station is rare here",
            imageKey: "bali/day-1/gasstation"
          },
          {
            alt: "signature",
            imageKey: "bali/day-1/signature"
          },
          {
            alt: "hello",
            imageKey: "bali/day-1/bae",
            featured: true
          },
          {
            alt: "starbucks vibe",
            imageKey: "bali/day-1/starbucks"
          },
          {
            alt: "hello",
            imageKey: "bali/day-1/xn"
          },
          {
            alt: "huge portion tho",
            imageKey: "bali/day-1/meal"
          },
          {
            alt: "random photograph",
            imageKey: "bali/day-1/random"
          },
          {
            alt: "show ticket",
            imageKey: "bali/day-1/nightshow"
          },
          {
            alt: "great show",
            imageKey: "bali/day-1/show"
          }
        ]
      },

      {
        day: 2,
        title: "Ubud - Seminyak",
        location: "Tegalalang Rice Terrace - Potato Head Beach Club",
        // description: "",
        images: [
          {
            alt: "good vibe",
            imageKey: "bali/day-2/morning"
          },
          {
            alt: "our breakfast",
            imageKey: "bali/day-2/breakfast"
          },
          {
            alt: "another photograph",
            imageKey: "bali/day-2/random",
            featured: true
          },
          {
            alt: "hello",
            imageKey: "bali/day-2/bae"
          },
          {
            alt: "our lunch",
            imageKey: "bali/day-2/lunch"
          },
          {
            alt: "sunset at beach club",
            imageKey: "bali/day-2/sunset"
          },
          {
            alt: "we catched sunset",
            imageKey: "bali/day-2/xn"
          },
          {
            alt: "chill vibe",
            imageKey: "bali/day-2/night"
          },
          {
            alt: "our dinner",
            imageKey: "bali/day-2/dinner"
          },
          {
            alt: "we need something soup after drink",
            imageKey: "bali/day-2/nightfood"
          }
        ]
      },

      {
        day: 3,
        title: "Uluwatu",
        location: "Canggu - Dinne Le Cliff",
        // description: "",
        images: [
          {
            alt: "hello",
            imageKey: "bali/day-3/xn"
          },
          {
            alt: "breakfast",
            imageKey: "bali/day-3/breakfast"
          },
          {
            alt: "so chill",
            imageKey: "bali/day-3/house",
            featured: true
          },
          {
            alt: "our lunch",
            imageKey: "bali/day-3/bae"
          },
          {
            alt: "random photograph",
            imageKey: "bali/day-3/random"
          },
          {
            alt: "hello",
            imageKey: "bali/day-3/sea"
          },
          {
            alt: "another random photograph",
            imageKey: "bali/day-3/scene"
          },
          {
            alt: "brunch",
            imageKey: "bali/day-3/brunch"
          },
          {
            alt: "chill sunset",
            imageKey: "bali/day-3/sunset"
          }
        ]
      },

      {
        day: 4,
        title: "Uluwatu",
        location: "Beach Club - Uluwatu Temple",
        // description: "",
        images: [
          {
            alt: "beach vibe",
            imageKey: "bali/day-4/bae"
          },
          {
            alt: "beach vibe",
            imageKey: "bali/day-4/breakfast"
          },
          {
            alt: "helicopter",
            imageKey: "bali/day-4/helicopter"
          },
          {
            alt: "chill vibe",
            imageKey: "bali/day-4/vibe"
          },
          {
            alt: "a monkey attacked me",
            imageKey: "bali/day-4/xn",
            featured: true
          },
          {
            alt: "bae w ocean",
            imageKey: "bali/day-4/ocean"
          },
          {
            alt: "our flight got delayed",
            imageKey: "bali/day-4/breakfast2"
          },
          {
            alt: "best tiramisu ever tasted",
            imageKey: "bali/day-4/tiramisu"
          },
          {
            alt: "lunch before heading to airport",
            imageKey: "bali/day-4/lunch"
          }
        ]
      }
    ]
  },

  //Japan
  {
    id: "japan",
    name: "Japan",
    date: "23.01.25 - 02.02.25",
    location: "Tokyo - Nagano - Kanazawa - Takayama - Shirakawago - Kyoto - Osaka",
    cover: "japan/day-1/tokyo_skytree",
    flag: jp_flag,
    description: "Our first winter trip together and we just loved it. The very first time we been in Japan, felt that cold, touched snow, wore yukata, onsen, etc. ",
    days: [
      {
        day: 1,
        title: "Tokyo",
        location: "Narita Airport - Tokyo Sky Tree",
        // description: "",
        images: [
          {
            alt: "welcome to Japan",
            imageKey: "japan/day-1/welcome",
            featured: true
          },
          {
            alt: "bae @vending machine",
            imageKey: "japan/day-1/bae"
          },
          {
            alt: "train from narita to city",
            imageKey: "japan/day-1/train"
          },
          {
            alt: "food - fall for ramen",
            imageKey: "japan/day-1/food"
          },
          {
            alt: "us facing tokyo sky tree",
            imageKey: "japan/day-1/us",
            featured: true
          },
          {
            alt: "tokyo sky tree",
            imageKey: "japan/day-1/tokyo_skytree"
          }
        ]
      },

      {
        day: 2,
        title: "Tokyo",
        location: "Asakusa - Akihabara - Ginza",
        // description: "",
        images: [
          {
            alt: "morning matcha",
            imageKey: "japan/day-2/matcha",
            featured: true
          },
          {
            alt: "bae @ghibli store",
            imageKey: "japan/day-2/bae"
          },
          {
            alt: "random girls in kimono",
            imageKey: "japan/day-2/random",
            featured: true
          },
          {
            alt: "sensō-ji temple",
            imageKey: "japan/day-2/temple"
          },
          {
            alt: "food - gyukatsu",
            imageKey: "japan/day-2/food"
          },
          {
            alt: "dinner - family mart",
            imageKey: "japan/day-2/midnight_food"
          }
        ]
      },

      {
        day: 3,
        title: "Tokyo",
        location: "Tokyo Station - Imperial Palace - Akasaka Station - Shinjuku - Harajuku - Shibuya",
        // description: "",
        images: [
          {
            alt: "us wandering around",
            imageKey: "japan/day-3/us"
          },
          {
            alt: "donki store",
            imageKey: "japan/day-3/donki"
          },
          {
            alt: "xn @tokyo station",
            imageKey: "japan/day-3/xn",
            featured: true
          },
          {
            alt: "bae @tokyo station",
            imageKey: "japan/day-3/bae",
            featured: true
          },
          {
            alt: "sushi @shibuya",
            imageKey: "japan/day-3/sushi"
          },
          {
            alt: "harrypotter @akasaka",
            imageKey: "japan/day-3/harrypotter"
          }
        ]
      },

      {
        day: 4,
        title: "Nagano",
        location: "Zenkōji Temple - Shibu Onsen - Snow Monkey Park",
        // description:"",
        images: [
          {
            alt: "quick breakfast on train",
            imageKey: "japan/day-4/breakfast"
          },
          {
            alt: "us",
            imageKey: "japan/day-4/us"
          },
          {
            alt: "first time touch snow ",
            imageKey: "japan/day-4/xn_snow",
            featured: true
          },
          {
            alt: "first time touch snow ",
            imageKey: "japan/day-4/bae_snow",
            featured: true
          },
          {
            alt: "snow monkey park",
            imageKey: "japan/day-4/monkey"
          },
          {
            alt: "in yukata",
            imageKey: "japan/day-4/bae_yukata"
          }
        ]
      },

      {
        day: 5,
        title: "Kanazawa",
        location: "Higashiyama - Asano River - Kanazawa Castle",
        // description: "",
        images: [
          {
            alt: "eating kaiseki meal",
            imageKey: "japan/day-5/bae_breakfast"
          },
          {
            alt: "mountain landscape",
            imageKey: "japan/day-5/landscape"
          },
          {
            alt: "@kanazawa station",
            imageKey: "japan/day-5/bae_kanazawa",
            featured: true
          },
          {
            alt: "matcha ramen??",
            imageKey: "japan/day-5/matcha_ramen",
            featured: true
          },
          {
            alt: "xn @kanazawa castle",
            imageKey: "japan/day-5/xn_castle"
          },
          {
            alt: "soup @kanazawa station",
            imageKey: "japan/day-5/food"
          }
        ]
      },

      {
        day: 6,
        title: "Takayama - Shirakawago",
        location: "Takayama Old Town - Shirakawago",
        // description: "",
        images: [
          {
            alt: "best pudding ",
            imageKey: "japan/day-6/flan"
          },
          {
            alt: "do you want to build a snowman?",
            imageKey: "japan/day-6/snowman"
          },
          {
            alt: "shirakawago - UNESCO as a World Heritage Site",
            imageKey: "japan/day-6/shirakawago",
            featured: true
          },
          {
            alt: "snow-girl",
            imageKey: "japan/day-6/bae",
            featured: true
          },
          {
            alt: "random photograph",
            imageKey: "japan/day-6/random"
          },
          {
            alt: "sukiyaki hida beef",
            imageKey: "japan/day-6/sukiyaki"
          }
        ]
      },

      {
        day: 7,
        title: "Kyoto",
        location: "Nanzen-ji Temple - Kamo River Noryo-Yuka Area",
        // description: "",
        images: [
          {
            alt: "morning heavy snow",
            imageKey: "japan/day-7/heavysnow"
          },
          {
            alt: "random curry rice store",
            imageKey: "japan/day-7/curryrice"
          },
          {
            alt: "@nanzen-ji temple",
            imageKey: "japan/day-7/xn",
            featured: true
          },
          {
            alt: "sunset @kamo river noryo-yuka area",
            imageKey: "japan/day-7/sunset",
            featured: true
          },
          {
            alt: "bae",
            imageKey: "japan/day-7/bae"
          },
          {
            alt: "beef on beef",
            imageKey: "japan/day-7/beef"
          },
          {
            alt: "insanely delicious cold ramen",
            imageKey: "japan/day-7/ramen"
          }
        ]
      },

      {
        day: 8,
        title: "Kyoto",
        location: "Arashiyama Bamboo - Togetsukyo Bridge - Yasaka Pagoda",
        // description: "",
        images: [
          {
            alt: "tourist attraction - bamboo grove",
            imageKey: "japan/day-8/bamboo"
          },
          {
            alt: "bae @bamboo forest",
            imageKey: "japan/day-8/bae"
          },
          {
            alt: "random photograph",
            imageKey: "japan/day-8/random",
            featured: true
          },
          {
            alt: "set lunch @Yasaka Pagoda",
            imageKey: "japan/day-8/lunchset",
            featured: true
          },
          {
            alt: "Yasaka Pagoda",
            imageKey: "japan/day-8/pagoda"
          },
          {
            alt: "matcha on matcha",
            imageKey: "japan/day-8/matcha"
          },
          {
            alt: "okonomiyaki",
            imageKey: "japan/day-8/okonomiyaki"
          }
        ]
      },

      {
        day: 9,
        title: "Kyoto - Osaka",
        location: "Nishiki Market - Nippombashi - Dotonbori",
        // description: "",
        images: [
          {
            alt: "fitcheck",
            imageKey: "japan/day-9/xn"
          },
          {
            alt: "takoyaki at market",
            imageKey: "japan/day-9/takoyaki"
          },
          {
            alt: "still matcha",
            imageKey: "japan/day-9/matcha",
            featured: true
          },
          {
            alt: "unagii",
            imageKey: "japan/day-9/bae",
            featured: true
          },
          {
            alt: "osaka areaa",
            imageKey: "japan/day-9/osaka"
          },
          {
            alt: "famous animated graphic wall",
            imageKey: "japan/day-9/graphic"
          },
          {
            alt: "bae @glico panel",
            imageKey: "japan/day-9/baeglico"
          }
        ]
      },

      {
        day: 10,
        title: "Osaka",
        location: "Namba Yasaka Jinja Temple - Osaka Castle - Shinsekai Area",
        // description: "",
        images: [
          {
            alt: "namba station",
            imageKey: "japan/day-10/namba_station"
          },
          {
            alt: "@osaka castle",
            imageKey: "japan/day-10/osaka_castle"
          },
          {
            alt: "random manhole cover",
            imageKey: "japan/day-10/random",
            featured: true
          },
          {
            alt: "tsutenkaku tower",
            imageKey: "japan/day-10/shinsekai",
            featured: true
          },
          {
            alt: "ramen again",
            imageKey: "japan/day-10/ramen"
          },
          {
            alt: "dearbros omelette rice",
            imageKey: "japan/day-10/omelette"
          }
        ]
      }
    ]
  },

  //Hongkong
  {
    id: "hongkong",
    name: "Hong Kong",
    date: "26.04.24 - 30.04.24",
    location: "Victoria Habour - Avenue of Stars - Yick Fat Building - Disneyland - 1881 Heritage",
    cover: "hongkong/day-2/dingding",
    flag: hk_flag,
    // description: "",
    days: [
      {
        day: 1,
        title: "Hongkong",
        location: "Avenue of Stars - Victoria Habour",
        // description: "",
        images: [
          {
            alt: "welcome to hongkong",
            imageKey: "hongkong/day-1/octopus"
          },
          {
            alt: "us @ airport",
            imageKey: "hongkong/day-1/airport"
          },
          {
            alt: "random photograph",
            imageKey: "hongkong/day-1/random",
            featured: true
          },
          {
            alt: "lunch time with pork-duck rices",
            imageKey: "hongkong/day-1/food"
          },
          {
            alt: "bae @ victoria harbour",
            imageKey: "hongkong/day-1/bae"
          },
          {
            alt: "xn @ victoria harbour",
            imageKey: "hongkong/day-1/xn"
          },
          {
            alt: "symphony of lights at 8pm",
            imageKey: "hongkong/day-1/night"
          }
        ]
      },

      {
        day: 2,
        title: "Hongkong",
        location: "Observation Wheel - Man Mo Temple - Lan Kwai Fong",
        // description: "",
        images: [
          {
            alt: "random street photograph",
            imageKey: "hongkong/day-2/random"
          },
          {
            alt: "bae",
            imageKey: "hongkong/day-2/bae"
          },
          {
            alt: "wheel",
            imageKey: "hongkong/day-2/wheel",
            featured: true
          },
          {
            alt: "xn",
            imageKey: "hongkong/day-2/xn"
          },
          {
            alt: "ding ding ",
            imageKey: "hongkong/day-2/dingding"
          },
          {
            alt: "longest escalator",
            imageKey: "hongkong/day-2/escalator"
          },
          {
            alt: "bao & dimsum",
            imageKey: "hongkong/day-2/food"
          }
        ]
      },

      {
        day: 3,
        title: "Hongkong",
        location: "Wong Tai Sin Temple - Choi Hung Estate - Yick Fat Building",
        // description: "",
        images: [
          {
            alt: "super breakfast",
            imageKey: "hongkong/day-3/food"
          },
          {
            alt: "fitcheck",
            imageKey: "hongkong/day-3/bae"
          },
          {
            alt: "&train station series",
            imageKey: "hongkong/day-3/xn"
          },
          {
            alt: "temple",
            imageKey: "hongkong/day-3/temple"
          },
          {
            alt: "random photograph ",
            imageKey: "hongkong/day-3/random",
            featured: true
          },
          {
            alt: "us @colorful building",
            imageKey: "hongkong/day-3/us",
            featured: true
          },
          {
            alt: "bae by the sea",
            imageKey: "hongkong/day-3/river"
          },
          {
            alt: "hot porridge",
            imageKey: "hongkong/day-3/porridge"
          },
          {
            alt: "us @monster building",
            imageKey: "hongkong/day-3/building"
          },
          {
            alt: "river cruise",
            imageKey: "hongkong/day-3/cruise"
          }
        ]
      },

      {
        day: 4,
        title: "Hongkong",
        location: "Disneyland",
        // description: "",
        images: [
          {
            alt: "welcome to disneyland hongkong",
            imageKey: "hongkong/day-4/disneyland",
            featured: true
          },
          {
            alt: "us @disneyland",
            imageKey: "hongkong/day-4/us"
          },
          {
            alt: "quality lunch time @disneyland",
            imageKey: "hongkong/day-4/food"
          },
          {
            alt: "my toy story",
            imageKey: "hongkong/day-4/toy_story"
          },
          {
            alt: "fairy tale building",
            imageKey: "hongkong/day-4/building"
          },
          {
            alt: "watching ballet",
            imageKey: "hongkong/day-4/ballet"
          },
          {
            alt: "night firework @disneyland",
            imageKey: "hongkong/day-4/night",
            featured: true
          },
          {
            alt: "no more energy after long playday",
            imageKey: "hongkong/day-4/bae"
          },
          {
            alt: "midnight food is a must",
            imageKey: "hongkong/day-4/night_food"
          }
        ]
      },

      {
        day: 5,
        title: "Hongkong",
        location: "1881 Heritage - Wan Chai",
        // description: "",
        images: [
          {
            alt: "another high quality breakfast",
            imageKey: "hongkong/day-5/food"
          },
          {
            alt: "bae @1881 heritage",
            imageKey: "hongkong/day-5/bae"
          },
          {
            alt: "random corner photograph",
            imageKey: "hongkong/day-5/random1"
          },
          {
            alt: "xn @1881 heritage",
            imageKey: "hongkong/day-5/xn"
          },
          {
            alt: "beautiful 1881 heritage",
            imageKey: "hongkong/day-5/1881",
            featured: true
          },
          {
            alt: "another random corner photograph",
            imageKey: "hongkong/day-5/random2"
          },
          {
            alt: "busy city",
            imageKey: "hongkong/day-5/random3"
          },
          {
            alt: "rice before goin' to airport",
            imageKey: "hongkong/day-5/rice"
          }
        ]
      }
    ]
  },

  //Thai
  {
    id: "thailand",
    name: "Thailand",
    date: "02.12.23 - 05.12.23",
    location: "Wat Paknam Temple - Talat Noi - Icon Siam - Bangkok Grand Palace",
    cover: "thailand/day-3/random",
    flag: thai_flag,
    // description: "",
    days: [
      {
        day: 1,
        title: "Bangkok",
        location: "Siam Area - Jodd Fair Night Market",
        // description: "",
        images: [
          {
            alt: "start food trip @ thailand",
            imageKey: "thailand/day-1/noodle"
          },
          {
            alt: "xn @ cafeshop",
            imageKey: "thailand/day-1/xn"
          },
          {
            alt: "soup soup ",
            imageKey: "thailand/day-1/soup"
          },
          {
            alt: "mbk center",
            imageKey: "thailand/day-1/mbk"
          },
          {
            alt: "bae @ center",
            imageKey: "thailand/day-1/bae",
            featured: true
          },
          {
            alt: "bae @ gallery",
            imageKey: "thailand/day-1/bae_gallery"
          },
          {
            alt: "tuktuk at night",
            imageKey: "thailand/day-1/tuktuk"
          }
        ]
      },

      {
        day: 2,
        title: "Bangkok",
        location: "Wat Paknam Temple - Khlong Bang Luang",
        // description:"",
        images: [
          {
            alt: "us @ mrt station",
            imageKey: "thailand/day-2/us",
            featured: true
          },
          {
            alt: "wat paknam",
            imageKey: "thailand/day-2/buddha"
          },
          {
            alt: "bae @ cafeshop",
            imageKey: "thailand/day-2/bae"
          },
          {
            alt: "spicy chicken/pork minced with rice",
            imageKey: "thailand/day-2/rice"
          },
          {
            alt: "afteryou - mango bingsu",
            imageKey: "thailand/day-2/bingsu"
          },
          {
            alt: "dinner",
            imageKey: "thailand/day-2/night"
          },
          {
            alt: "random photograph",
            imageKey: "thailand/day-2/random"
          }
        ]
      },

      {
        day: 3,
        title: "Bangkok",
        location: "Ong Ang Street - Talat Noi - River City Bangkok - Icon Siam",
        // description: "",
        images: [
          {
            alt: "super packed breakfast",
            imageKey: "thailand/day-3/breakfast",
            featured: true
          },
          {
            alt: "bae @mrt station",
            imageKey: "thailand/day-3/bae"
          },
          {
            alt: "random photograph",
            imageKey: "thailand/day-3/random"
          },
          {
            alt: "roasted pork rice",
            imageKey: "thailand/day-3/rice"
          },
          {
            alt: "river cruise",
            imageKey: "thailand/day-3/cruise"
          },
          {
            alt: "mall - gallery center",
            imageKey: "thailand/day-3/mall"
          },
          {
            alt: "checkinn",
            imageKey: "thailand/day-3/us"
          },
          {
            alt: "mall with water flow inside",
            imageKey: "thailand/day-3/mall3"
          },
          {
            alt: "hotpot hotpot ",
            imageKey: "thailand/day-3/dinner"
          }
        ]
      },

      {
        day: 4,
        title: "Bangkok",
        location: "Bangkok Grand Palace",
        // description: "",
        images: [
          {
            alt: "breakfast @vintage restaurant",
            imageKey: "thailand/day-4/restaurant"
          },
          {
            alt: "breakfast",
            imageKey: "thailand/day-4/breakfast"
          },
          {
            alt: "what huge building",
            imageKey: "thailand/day-4/building"
          },
          {
            alt: "mango sticky rice for sure",
            imageKey: "thailand/day-4/mango"
          },
          {
            alt: "another random photograph",
            imageKey: "thailand/day-4/random",
            featured: true
          },
          {
            alt: "grand palace",
            imageKey: "thailand/day-4/palace"
          },
          {
            alt: "don mueang airport",
            imageKey: "thailand/day-4/airport"
          }
        ]
      }
    ]
  }
]
