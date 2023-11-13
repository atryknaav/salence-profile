import { BlockName } from "../types/BlockName"

export interface dataProps {
    blockName: BlockName,
    lineLegends: {
      l1: {
        name: string,
        active: boolean
      },
      l2: {
        name: string,
        active: boolean
      }
    }
    lineData: 
      {
          name?: string,
          uv?: number,
          pv?: number,
          amt?: number
      }[],
    pieData: 
      {
          name: string,
          value: number
      }[]
    
}

export const siteData: dataProps[] = [
    {
        blockName: "Total sales",
        lineLegends:{
          l1: {
            name: "Revenue",
            active: true
          },
          l2: {
            name: "Orders",
            active: true
          }
        },
        lineData:[
            {
                name: "Jan",
                uv: 220,
                pv: 150,
                amt: 220,
              },
              {
                name: "",
                uv: 200,
                pv: 150,
                amt: 220,
              },
              {
                name: "",
                uv: 145,
                pv: 148,
                amt: 220,
              },
              {
                name: "",
                uv: 143,
                pv: 159,
                amt: 220,
              },
              {
                name: "",
                uv: 171,
                pv: 170,
                amt: 220,
              },
              {
                name: "",
                uv: 230,
                pv: 169,
                amt: 220,
              },
              {
                name: "",
                uv: 229,
                pv: 143,
                amt: 220,
              },
              {
                name: "Feb",
                uv: 210,
                pv: 140,
                amt: 210,
              },
              {
                name: "",
                uv: 215,
                pv: 145,
                amt: 215,
              },
              {
                name: "",
                uv: 213,
                pv: 143,
                amt: 213,
              },
              {
                name: "",
                uv: 210,
                pv: 152,
                amt: 210,
              },
              {
                name: "",
                uv: 205,
                pv: 163,
                amt: 205,
              },
              {
                name: "",
                uv: 220,
                pv: 162,
                amt: 220,
              },
              {
                name: "",
                uv: 219,
                pv: 136,
                amt: 219,
              },
              {
                name: "Mar",
                uv: 230,
                pv: 155,
                amt: 230,
              },
              {
                name: "",
                uv: 235,
                pv: 156,
                amt: 235,
              },
              {
                name: "",
                uv: 233,
                pv: 152,
                amt: 233,
              },
              {
                name: "",
                uv: 230,
                pv: 160,
                amt: 230,
              },
              {
                name: "",
                uv: 225,
                pv: 171,
                amt: 225,
              },
              {
                name: "",
                uv: 240,
                pv: 168,
                amt: 240,
              },
              {
                name: "",
                uv: 239,
                pv: 142,
                amt: 239,
              },
              {
                name: "Apr",
                uv: 240,
                pv: 160,
                amt: 240,
              },
              {
                name: "",
                uv: 245,
                pv: 163,
                amt: 245,
              },
              {
                name: "",
                uv: 243,
                pv: 159,
                amt: 243,
              },
              {
                name: "",
                uv: 240,
                pv: 168,
                amt: 240,
              },
              {
                name: "",
                uv: 235,
                pv: 177,
                amt: 235,
              },
              {
                name: "",
                uv: 250,
                pv: 176,
                amt: 250,
              },
              {
                name: "",
                uv: 249,
                pv: 150,
                amt: 249,
              },
              {
                name: "May",
                uv: 250,
                pv: 170,
                amt: 250,
              },
              {
                name: "",
                uv: 255,
                pv: 173,
                amt: 255,
              },
              {
                name: "",
                uv: 253,
                pv: 169,
                amt: 253,
              },
              {
                name: "",
                uv: 250,
                pv: 178,
                amt: 250,
              },
              {
                name: "",
                uv: 245,
                pv: 189,
                amt: 245,
              },
              {
                name: "",
                uv: 260,
                pv: 188,
                amt: 260,
              },
              {
                name: "",
                uv: 259,
                pv: 162,
                amt: 259,
              },
              {
                name: "Jun",
                uv: 260,
                pv: 180,
                amt: 260,
              },
              {
                name: "",
                uv: 265,
                pv: 183,
                amt: 265,
              },
              {
                name: "",
                uv: 263,
                pv: 179,
                amt: 263,
              },
              {
                name: "",
                uv: 260,
                pv: 188,
                amt: 260,
              },
              {
                name: "",
                uv: 255,
                pv: 199,
                amt: 255,
              },
              {
                name: "",
                uv: 270,
                pv: 198,
                amt: 270,
              },
              {
                name: "",
                uv: 269,
                pv: 172,
                amt: 269,
              },
              {
                name: "Jul",
                uv: 270,
                pv: 190,
                amt: 270,
              },
              {
                name: "",
                uv: 275,
                pv: 193,
                amt: 275,
              },
              {
                name: "",
                uv: 273,
                pv: 189,
                amt: 273,
              },
              {
                name: "",
                uv: 270,
                pv: 198,
                amt: 270,
              },
              {
                name: "",
                uv: 265,
                pv: 209,
                amt: 265,
              },
              {
                name: "",
                uv: 280,
                pv: 208,
                amt: 280,
              },
              {
                name: "",
                uv: 279,
                pv: 182,
                amt: 279,
              },
              {
                name: "Aug",
                uv: 280,
                pv: 200,
                amt: 280,
              },
              {
                name: "",
                uv: 285,
                pv: 203,
                amt: 285,
              },
              {
                name: "",
                uv: 283,
                pv: 199,
                amt: 283,
              },
              {
                name: "",
                uv: 190,
                pv: 208,
                amt: 280,
              },
              {
                name: "",
                uv: 275,
                pv: 219,
                amt: 275,
              },
              {
                name: "",
                uv: 200,
                pv: 218,
                amt: 290,
              },
              {
                name: "",
                uv: 289,
                pv: 192,
                amt: 289,
              },
              {
                name: "Sep",
                uv: 290,
                pv: 210,
                amt: 290,
              },
              {
                name: "",
                uv: 295,
                pv: 213,
                amt: 295,
              },
              {
                name: "",
                uv: 293,
                pv: 209,
                amt: 293,
              },
              {
                name: "",
                uv: 290,
                pv: 218,
                amt: 290,
              },
              {
                name: "",
                uv: 210,
                pv: 229,
                amt: 285,
              },
              {
                name: "",
                uv: 300,
                pv: 228,
                amt: 300,
              },
              {
                name: "",
                uv: 299,
                pv: 202,
                amt: 299,
              },
              {
                name: "Oct",
                uv: 300,
                pv: 220,
                amt: 300,
              },
              {
                name: "",
                uv: 305,
                pv: 223,
                amt: 305,
              },
              {
                name: "",
                uv: 303,
                pv: 219,
                amt: 303,
              },
              {
                name: "",
                uv: 300,
                pv: 228,
                amt: 300,
              },
              {
                name: "",
                uv: 295,
                pv: 239,
                amt: 295,
              },
              {
                name: "",
                uv: 310,
                pv: 238,
                amt: 310,
              },
              {
                name: "",
                uv: 309,
                pv: 212,
                amt: 309,
              },
              {
                name: "Nov",
                uv: 310,
                pv: 230,
                amt: 310,
              },
              {
                name: "",
                uv: 315,
                pv: 233,
                amt: 315,
              },
              {
                name: "",
                uv: 313,
                pv: 229,
                amt: 313,
              },
              {
                name: "",
                uv: 310,
                pv: 238,
                amt: 310,
              },
              {
                name: "",
                uv: 305,
                pv: 249,
                amt: 305,
              },
              {
                name: "",
                uv: 320,
                pv: 248,
                amt: 320,
              },
              {
                name: "",
                uv: 319,
                pv: 222,
                amt: 319,
              },
              {
                name: "Dec",
                uv: 320,
                pv: 240,
                amt: 320,
              },
        ],
        pieData: [
            { name: 'Electronics', value: 400 },
            { name: 'Laptops', value: 150 },
            { name: 'iPhones', value: 45 },
        ]
    },
    {
        blockName: "Visitors",
        lineLegends:{
          l1: {
            name: "Visitors",
            active: true
          },
          l2: {
            name: "",
            active: false
          }
        },
        lineData:[
          {
            name: "Jan",
            uv: 2082,
            amt: 220
          },
          {
            name: "",
            uv: 2769,
            amt: 220
          },
          {
            name: "",
            uv: 3156,
            amt: 220
          },
          {
            name: "",
            uv: 3698,
            amt: 220
          },
          {
            name: "",
            uv: 4187,
            amt: 220
          },
          {
            name: "",
            uv: 4556,
            amt: 220
          },
          {
            name: "",
            uv: 4999,
            amt: 220
          },
          {
            name: "Feb",
            uv: 2047,
            amt: 220
          },
          {
            name: "",
            uv: 2634,
            amt: 220
          },
          {
            name: "",
            uv: 3098,
            amt: 220
          },
          {
            name: "",
            uv: 3587,
            amt: 220
          },
          {
            name: "",
            uv: 2491,
            amt: 220
          },
          {
            name: "",
            uv: 3944,
            amt: 220
          },
          {
            name: "",
            uv: 4991,
            amt: 220
          },
          {
            name: "Mar",
            uv: 2113,
            amt: 220
          },
          {
            name: "",
            uv: 2679,
            amt: 220
          },
          {
            name: "",
            uv: 3158,
            amt: 220
          },
          {
            name: "",
            uv: 3672,
            amt: 220
          },
          {
            name: "",
            uv: 1233,
            amt: 220
          },
          {
            name: "",
            uv: 344,
            amt: 220
          },
          {
            name: "",
            uv: 4996,
            amt: 220
          },
          {
            name: "Apr",
            uv: 2085,
            amt: 220
          },
          {
            name: "",
            uv: 3567,
            amt: 220
          },
          {
            name: "",
            uv: 3116,
            amt: 220
          },
          {
            name: "",
            uv: 3678,
            amt: 220
          },
          {
            name: "",
            uv: 4111,
            amt: 220
          },
          {
            name: "",
            uv: 1906,
            amt: 220
          },
          {
            name: "",
            uv: 4980,
            amt: 220
          },
          {
            name: "May",
            uv: 2063,
            amt: 220
          },
          {
            name: "",
            uv: 2697,
            amt: 220
          },
          {
            name: "",
            uv: 3154,
            amt: 220
          },
          {
            name: "",
            uv: 3648,
            amt: 220
          },
          {
            name: "",
            uv: 4123,
            amt: 220
          },
          {
            name: "",
            uv: 4677,
            amt: 220
          },
          {
            name: "",
            uv: 4987,
            amt: 220
          },
          {
            name: "Jun",
            uv: 2021,
            amt: 220
          },
          {
            name: "",
            uv: 2635,
            amt: 220
          },
          {
            name: "",
            uv: 3168,
            amt: 220
          },
          {
            name: "",
            uv: 3683,
            amt: 220
          },
          {
            name: "",
            uv: 4107,
            amt: 220
          },
          {
            name: "",
            uv: 4612,
            amt: 220
          },
          {
            name: "",
            uv: 4988,
            amt: 220
          },
          {
            name: "Jul",
            uv: 2015,
            amt: 220
          },
          {
            name: "",
            uv: 2670,
            amt: 220
          },
          {
            name: "",
            uv: 3122,
            amt: 220
          },
          {
            name: "",
            uv: 3637,
            amt: 220
          },
          {
            name: "",
            uv: 4161,
            amt: 220
          },
          {
            name: "",
            uv: 4624,
            amt: 220
          },
          {
            name: "",
            uv: 4999,
            amt: 220
          },
          {
            name: "Aug",
            uv: 2078,
            amt: 220
          },
          {
            name: "",
            uv: 2613,
            amt: 220
          },
          {
            name: "",
            uv: 3137,
            amt: 220
          },
          {
            name: "",
            uv: 3689,
            amt: 220
          },
          {
            name: "",
            uv: 4123,
            amt: 220
          },
          {
            name: "",
            uv: 4667,
            amt: 220
          },
          {
            name: "",
            uv: 4990,
            amt: 220
          },
          {
            name: "Sep",
            uv: 2097,
            amt: 220
          },
          {
            name: "",
            uv: 2671,
            amt: 220
          },
          {
            name: "",
            uv: 3108,
            amt: 220
          },
          {
            name: "",
            uv: 3663,
            amt: 220
          },
          {
            name: "",
            uv: 4132,
            amt: 220
          },
          {
            name: "",
            uv: 4688,
            amt: 220
          },
          {
            name: "",
            uv: 4993,
            amt: 220
          },
          {
            name: "Oct",
            uv: 2109,
            amt: 220
          },
          {
            name: "",
            uv: 2644,
            amt: 220
          },
          {
            name: "",
            uv: 3103,
            amt: 220
          },
          {
            name: "",
            uv: 3680,
            amt: 220
          },
          {
            name: "",
            uv: 4111,
            amt: 220
          },
          {
            name: "",
            uv: 4675,
            amt: 220
          },
          {
            name: "",
            uv: 4998,
            amt: 220
          },
          {
            name: "Nov",
            uv: 2066,
            amt: 220
          },
          {
            name: "",
            uv: 2611,
            amt: 220
          },
          {
            name: "",
            uv: 3166,
            amt: 220
          },
          {
            name: "",
            uv: 3699,
            amt: 220
          },
          {
            name: "",
            uv: 4155,
            amt: 220
          },
          {
            name: "",
            uv: 4634,
            amt: 220
          },
          {
            name: "",
            uv: 4987,
            amt: 220
          },
          {
            name: "Dec",
            uv: 2080,
            amt: 220
          },
          {
            name: "",
            uv: 2661,
            amt: 220
          },
          {
            name: "",
            uv: 3112,
            amt: 220
          },
          {
            name: "",
            uv: 3657,
            amt: 220
          },
          {
            name: "",
            uv: 4134,
            amt: 220
          },
          {
            name: "",
            uv: 4695,
            amt: 220
          },
          {
            name: "",
            uv: 4990,
            amt: 220
          }
        ],
        pieData: [
            { name: 'Subscribed', value: 1275 },
            { name: 'Unsubscribed', value: 2396 },
        ]
    },
    {
        blockName: "Total orders",
        lineLegends:{
          l1: {
            name: "Total Orders",
            active: true
          },
          l2: {
            name: "Orders",
            active: false
          }
        },
        lineData:[
          {
            name: "Jan",
            uv: 2082,
            amt: 220
          },
          {
            name: "",
            uv: 2769,
            amt: 220
          },
          {
            name: "",
            uv: 3156,
            amt: 220
          },
          {
            name: "",
            uv: 3698,
            amt: 220
          },
          {
            name: "",
            uv: 4187,
            amt: 220
          },
          {
            name: "",
            uv: 4556,
            amt: 220
          },
          {
            name: "",
            uv: 4999,
            amt: 220
          },
          {
            name: "Feb",
            uv: 2047,
            amt: 220
          },
          {
            name: "",
            uv: 2634,
            amt: 220
          },
          {
            name: "",
            uv: 3098,
            amt: 220
          },
          {
            name: "",
            uv: 3587,
            amt: 220
          },
          {
            name: "",
            uv: 2491,
            amt: 220
          },
          {
            name: "",
            uv: 3944,
            amt: 220
          },
          {
            name: "",
            uv: 4991,
            amt: 220
          },
          {
            name: "Mar",
            uv: 2113,
            amt: 220
          },
          {
            name: "",
            uv: 2679,
            amt: 220
          },
          {
            name: "",
            uv: 3158,
            amt: 220
          },
          {
            name: "",
            uv: 3672,
            amt: 220
          },
          {
            name: "",
            uv: 1233,
            amt: 220
          },
          {
            name: "",
            uv: 344,
            amt: 220
          },
          {
            name: "",
            uv: 4996,
            amt: 220
          },
          {
            name: "Apr",
            uv: 2085,
            amt: 220
          },
          {
            name: "",
            uv: 3567,
            amt: 220
          },
          {
            name: "",
            uv: 3116,
            amt: 220
          },
          {
            name: "",
            uv: 3678,
            amt: 220
          },
          {
            name: "",
            uv: 4111,
            amt: 220
          },
          {
            name: "",
            uv: 1906,
            amt: 220
          },
          {
            name: "",
            uv: 4980,
            amt: 220
          },
          {
            name: "May",
            uv: 2063,
            amt: 220
          },
          {
            name: "",
            uv: 2697,
            amt: 220
          },
          {
            name: "",
            uv: 3154,
            amt: 220
          },
          {
            name: "",
            uv: 3648,
            amt: 220
          },
          {
            name: "",
            uv: 4123,
            amt: 220
          },
          {
            name: "",
            uv: 4677,
            amt: 220
          },
          {
            name: "",
            uv: 4987,
            amt: 220
          },
          {
            name: "Jun",
            uv: 2021,
            amt: 220
          },
          {
            name: "",
            uv: 2635,
            amt: 220
          },
          {
            name: "",
            uv: 3168,
            amt: 220
          },
          {
            name: "",
            uv: 3683,
            amt: 220
          },
          {
            name: "",
            uv: 4107,
            amt: 220
          },
          {
            name: "",
            uv: 4612,
            amt: 220
          },
          {
            name: "",
            uv: 4988,
            amt: 220
          },
          {
            name: "Jul",
            uv: 2015,
            amt: 220
          },
          {
            name: "",
            uv: 2670,
            amt: 220
          },
          {
            name: "",
            uv: 3122,
            amt: 220
          },
          {
            name: "",
            uv: 3637,
            amt: 220
          },
          {
            name: "",
            uv: 4161,
            amt: 220
          },
          {
            name: "",
            uv: 4624,
            amt: 220
          },
          {
            name: "",
            uv: 4999,
            amt: 220
          },
          {
            name: "Aug",
            uv: 2078,
            amt: 220
          },
          {
            name: "",
            uv: 2613,
            amt: 220
          },
          {
            name: "",
            uv: 3137,
            amt: 220
          },
          {
            name: "",
            uv: 3689,
            amt: 220
          },
          {
            name: "",
            uv: 4123,
            amt: 220
          },
          {
            name: "",
            uv: 4667,
            amt: 220
          },
          {
            name: "",
            uv: 4990,
            amt: 220
          },
          {
            name: "Sep",
            uv: 2097,
            amt: 220
          },
          {
            name: "",
            uv: 2671,
            amt: 220
          },
          {
            name: "",
            uv: 3108,
            amt: 220
          },
          {
            name: "",
            uv: 3663,
            amt: 220
          },
          {
            name: "",
            uv: 4132,
            amt: 220
          },
          {
            name: "",
            uv: 4688,
            amt: 220
          },
          {
            name: "",
            uv: 4993,
            amt: 220
          },
          {
            name: "Oct",
            uv: 2109,
            amt: 220
          },
          {
            name: "",
            uv: 2644,
            amt: 220
          },
          {
            name: "",
            uv: 3103,
            amt: 220
          },
          {
            name: "",
            uv: 3680,
            amt: 220
          },
          {
            name: "",
            uv: 4111,
            amt: 220
          },
          {
            name: "",
            uv: 4675,
            amt: 220
          },
          {
            name: "",
            uv: 4998,
            amt: 220
          },
          {
            name: "Nov",
            uv: 2066,
            amt: 220
          },
          {
            name: "",
            uv: 226,
            amt: 220
          },
          {
            name: "",
            uv: 98,
            amt: 220
          },
          {
            name: "",
            uv: 333,
            amt: 220
          },
          {
            name: "",
            uv: 33,
            amt: 220
          },
          {
            name: "",
            uv: 54,
            amt: 220
          },
          {
            name: "",
            uv: 12,
            amt: 220
          },
          {
            name: "Dec",
            uv: 543,
            amt: 220
          },
          {
            name: "",
            uv: 123,
            amt: 220
          },
          {
            name: "",
            uv: 3112,
            amt: 220
          },
          {
            name: "",
            uv: 3657,
            amt: 220
          },
          {
            name: "",
            uv: 4134,
            amt: 220
          },
          {
            name: "",
            uv: 4695,
            amt: 220
          },
          {
            name: "",
            uv: 4990,
            amt: 220
          }
        ],
        pieData: [
            { name: 'Minor', value: 4782 },
            { name: 'Major', value: 2754 },
        ]
    },
    {
        blockName: "Refunded",
        lineLegends:{
          l1: {
            name: "Refunded",
            active: true
          },
          l2: {
            name: "Orders Cancelled",
            active: true
          }
        },
        lineData:[
          {
            name: "Jan",
            uv: 2082,
            amt: 220
          },
          {
            name: "",
            uv: 2769,
            amt: 220
          },
          {
            name: "",
            uv: 3156,
            amt: 220
          },
          {
            name: "",
            uv: 3698,
            amt: 220
          },
          {
            name: "",
            uv: 4187,
            amt: 220
          },
          {
            name: "",
            uv: 4556,
            amt: 220
          },
          {
            name: "",
            uv: 4999,
            amt: 220
          },
          {
            name: "Feb",
            uv: 2047,
            amt: 220
          },
          {
            name: "",
            uv: 2634,
            amt: 220
          },
          {
            name: "",
            uv: 3098,
            amt: 220
          },
          {
            name: "",
            uv: 3587,
            amt: 220
          },
          {
            name: "",
            uv: 2491,
            amt: 220
          },
          {
            name: "",
            uv: 3944,
            amt: 220
          },
          {
            name: "",
            uv: 4991,
            amt: 220
          },
          {
            name: "Mar",
            uv: 2113,
            amt: 220
          },
          {
            name: "",
            uv: 2679,
            amt: 220
          },
          {
            name: "",
            uv: 3158,
            amt: 220
          },
          {
            name: "",
            uv: 3672,
            amt: 220
          },
          {
            name: "",
            uv: 1233,
            amt: 220
          },
          {
            name: "",
            uv: 344,
            amt: 220
          },
          {
            name: "",
            uv: 4996,
            amt: 220
          },
          {
            name: "Apr",
            uv: 2085,
            amt: 220
          },
          {
            name: "",
            uv: 3567,
            amt: 220
          },
          {
            name: "",
            uv: 3116,
            amt: 220
          },
          {
            name: "",
            uv: 3678,
            amt: 220
          },
          {
            name: "",
            uv: 4111,
            amt: 220
          },
          {
            name: "",
            uv: 1906,
            amt: 220
          },
          {
            name: "",
            uv: 4980,
            amt: 220
          },
          {
            name: "May",
            uv: 2063,
            amt: 220
          },
          {
            name: "",
            uv: 2697,
            amt: 220
          },
          {
            name: "",
            uv: 3154,
            amt: 220
          },
          {
            name: "",
            uv: 3648,
            amt: 220
          },
          {
            name: "",
            uv: 4123,
            amt: 220
          },
          {
            name: "",
            uv: 4677,
            amt: 220
          },
          {
            name: "",
            uv: 4987,
            amt: 220
          },
          {
            name: "Jun",
            uv: 2021,
            amt: 220
          },
          {
            name: "",
            uv: 2635,
            amt: 220
          },
          {
            name: "",
            uv: 3168,
            amt: 220
          },
          {
            name: "",
            uv: 3683,
            amt: 220
          },
          {
            name: "",
            uv: 4107,
            amt: 220
          },
          {
            name: "",
            uv: 4612,
            amt: 220
          },
          {
            name: "",
            uv: 4988,
            amt: 220
          },
          {
            name: "Jul",
            uv: 2015,
            amt: 220
          },
          {
            name: "",
            uv: 2670,
            amt: 220
          },
          {
            name: "",
            uv: 3122,
            amt: 220
          },
          {
            name: "",
            uv: 3637,
            amt: 220
          },
          {
            name: "",
            uv: 4161,
            amt: 220
          },
          {
            name: "",
            uv: 4624,
            amt: 220
          },
          {
            name: "",
            uv: 4999,
            amt: 220
          },
          {
            name: "Aug",
            uv: 2078,
            amt: 220
          },
          {
            name: "",
            uv: 2613,
            amt: 220
          },
          {
            name: "",
            uv: 3137,
            amt: 220
          },
          {
            name: "",
            uv: 3689,
            amt: 220
          },
          {
            name: "",
            uv: 4123,
            amt: 220
          },
          {
            name: "",
            uv: 4667,
            amt: 220
          },
          {
            name: "",
            uv: 4990,
            amt: 220
          },
          {
            name: "Sep",
            uv: 2097,
            amt: 220
          },
          {
            name: "",
            uv: 2671,
            amt: 220
          },
          {
            name: "",
            uv: 3108,
            amt: 220
          },
          {
            name: "",
            uv: 3663,
            amt: 220
          },
          {
            name: "",
            uv: 4132,
            amt: 220
          },
          {
            name: "",
            uv: 4688,
            amt: 220
          },
          {
            name: "",
            uv: 4993,
            amt: 220
          },
          {
            name: "Oct",
            uv: 2109,
            amt: 220
          },
          {
            name: "",
            uv: 2644,
            amt: 220
          },
          {
            name: "",
            uv: 3103,
            amt: 220
          },
          {
            name: "",
            uv: 3680,
            amt: 220
          },
          {
            name: "",
            uv: 4111,
            amt: 220
          },
          {
            name: "",
            uv: 4675,
            amt: 220
          },
          {
            name: "",
            uv: 4998,
            amt: 220
          },
          {
            name: "Nov",
            uv: 2066,
            amt: 220
          },
          {
            name: "",
            uv: 226,
            amt: 220
          },
          {
            name: "",
            uv: 98,
            amt: 220
          },
          {
            name: "",
            uv: 333,
            amt: 220
          },
          {
            name: "",
            uv: 33,
            amt: 220
          },
          {
            name: "",
            uv: 54,
            amt: 220
          },
          {
            name: "",
            uv: 12,
            amt: 220
          },
          {
            name: "Dec",
            uv: 543,
            amt: 220
          },
          {
            name: "",
            uv: 123,
            amt: 220
          },
          {
            name: "",
            uv: 3112,
            amt: 220
          },
          {
            name: "",
            uv: 323,
            amt: 220
          },
          {
            name: "",
            uv: 1233,
            amt: 220
          },
          {
            name: "",
            uv: 5774,
            amt: 220
          },
          {
            name: "",
            uv: 4990,
            amt: 220
          }
        ],
        pieData: [
            { name: 'Exchanged', value: 25 },
            { name: 'Refunded', value: 41 }
        ]
    }
]