// Этот файл нужен только для быстрой проверки на работоспособность построения иерархии с разныи поступающими данными (иммитирует то, что приходит с API)

export const citizensExtended = [
  {
    _id: "6506c0920f69bfc935b0129b",
    name: "Анна",
    city_id: 1,
    id: 1,
    groups: [
      {
        type: "country",
        name: "Россия."
      },
      {
        type: "city",
        name: "Москва г."
      },
      {
        type: "district",
        name: "Район 1"
      },
      {
        type: "street",
        name: "Улица 1"
      },
      {
        type: "house",
        name: "Дом 123"
      }
    ],
    __v: 0
  },
  {
    _id: "6506c0920f69bfc935b0129c",
    name: "Степан",
    city_id: 1,
    id: 1,
    groups: [
      {
        type: "country",
        name: "Россия."
      },
      {
        type: "city",
        name: "Москва г."
      },
      {
        type: "district",
        name: "Район 2"
      },
      {
        type: "street",
        name: "Улица 2"
      },
      {
        type: "house",
        name: "Дом 234"
      }
    ],
    __v: 0
  },
  {
    _id: "6506c0920f69bfc935b0129d",
    name: "Виктор",
    city_id: 1,
    id: 3,
    groups: [
      {
        type: "country",
        name: "Россия."
      },
      {
        type: "city",
        name: "Санкт-Петербург г."
      },
      {
        type: "district",
        name: "Район 3"
      },
      {
        type: "street",
        name: "Улица 3"
      },
      {
        type: "house",
        name: "Дом 345"
      }
    ],
    __v: 0
  },
  {
    _id: "6506c0920f69bfc935b012a0",
    name: "Антонина",
    city_id: 1,
    id: 1,
    groups: [
      {
        type: "country",
        name: "Россия."
      },
      {
        type: "city",
        name: "Москва г."
      },
      {
        type: "district",
        name: "Район 4"
      },
      {
        type: "street",
        name: "Улица 4"
      },
      {
        type: "house",
        name: "Дом 456"
      }
    ],
    __v: 0
  },
  {
    _id: "6506c0920f69bfc935b012a1",
    name: "Григорий",
    city_id: 1,
    id: 2,
    groups: [
      {
        type: "country",
        name: "Россия."
      },
      {
        type: "city",
        name: "Воронеж г."
      },
      {
        type: "district",
        name: "Район 5"
      },
      {
        type: "street",
        name: "Улица 5"
      },
      {
        type: "house",
        name: "Дом 567"
      }
    ],
    __v: 0
  }
]

export const citizensReduced = [
  {
    _id: "6506c0920f69bfc935b0129b",
    name: "Анна",
    city_id: 1,
    id: 1,
    groups: [
      {
        type: "city",
        name: "Москва г."
      },
      {
        type: "street",
        name: "Улица 1"
      }
    ],
    __v: 0
  },
  {
    _id: "6506c0920f69bfc935b0129c",
    name: "Степан",
    city_id: 1,
    id: 1,
    groups: [
      {
        type: "city",
        name: "Москва г."
      },
      {
        type: "street",
        name: "Улица 2"
      }
    ],
    __v: 0
  },
  {
    _id: "6506c0920f69bfc935b0129d",
    name: "Виктор",
    city_id: 1,
    id: 3,
    groups: [
      {
        type: "city",
        name: "Санкт-Петербург г."
      },
      {
        type: "street",
        name: "Улица 3"
      }
    ],
    __v: 0
  },
  {
    _id: "6506c0920f69bfc935b012a0",
    name: "Антонина",
    city_id: 1,
    id: 1,
    groups: [
      {
        type: "city",
        name: "Москва г."
      },
      {
        type: "street",
        name: "Улица 4"
      }
    ],
    __v: 0
  },
  {
    _id: "6506c0920f69bfc935b012a1",
    name: "Григорий",
    city_id: 1,
    id: 2,
    groups: [
      {
        type: "city",
        name: "Воронеж г."
      },
      {
        type: "street",
        name: "Улица 5"
      }
    ],
    __v: 0
  }
]