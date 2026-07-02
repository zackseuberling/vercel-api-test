export default async function handler(request, response) {
  const { limit } = request.body;
  const limiter = limit ? limit : 12;

  try {
    // TODO: fetch this from Sanity
    // 2026-07-02: Vercel API functions work differently than Netlify
    // this has been causing errors when trying to fetch from Sanity directly
    // so for now we're going to hard code the response in
    const featuredProductions = [
      {
        _id: "f17d26f7-e108-4581-919b-c37bd8b883ec",
        _type: "event",
        country: "usa",
        dates: [
          "2023-03-15",
          "2023-03-16",
          "2023-03-17",
          "2023-03-18",
          "2023-03-21",
          "2023-03-22",
          "2023-03-23",
          "2023-03-24",
          "2023-03-25",
          "2023-03-28",
          "2023-03-29",
          "2023-03-30",
          "2023-03-31",
          "2023-04-01",
          "2023-04-04",
          "2023-04-05",
          "2023-04-06",
          "2023-04-07",
          "2023-04-08",
          "2023-04-11",
          "2023-04-12",
          "2023-04-13",
          "2023-04-14",
          "2023-04-15",
          "2023-04-17",
          "2023-04-18",
          "2023-04-19",
          "2023-04-20",
          "2023-04-21",
          "2023-04-22",
        ],
        eventType: [
          {
            _createdAt: "2022-07-05T19:17:21Z",
            _id: "297b6685-67dc-4fc4-a705-38ac832d8f54",
            _rev: "EJPB8vuKsUQzYmuM7UtZJr",
            _type: "artistProgram",
            _updatedAt: "2022-07-05T19:17:21Z",
            slug: {
              _type: "slug",
              current: "plays",
            },
            title: "Plays",
          },
          {
            _createdAt: "2022-06-10T15:39:50Z",
            _id: "fc65a4ec-9275-4116-b9bf-60b890efe0ba",
            _rev: "McWEfWCMQi9AQlhi5Wt0Oy",
            _type: "artistProgram",
            _updatedAt: "2023-04-24T17:09:30Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-d1b25e8c11f2f06a9f84993e5a9be9a4d9fd3899-1600x1067-jpg",
                _type: "reference",
              },
            },
            order: 1,
            slug: {
              _type: "slug",
              current: "new-work-new-world",
            },
            text: [
              {
                _key: "60e9e6f4f99f",
                _type: "block",
                children: [
                  {
                    _key: "e8efd7e0be940",
                    _type: "span",
                    marks: [],
                    text: "Our Production Series includes world, U.S. and New York premieres of plays from the U.S. and around the world.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "New Work/New World",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-ac9f7e5c08b6cee75c72f95e93bdd9f91675c4a3-1200x700-jpg",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "lunch-bunch",
        },
        title: "Lunch Bunch",
      },
      {
        _id: "c60fc89b-3dc9-4829-844b-de85a2e5a878",
        _type: "event",
        country: "usa",
        dates: [
          "2025-03-13",
          "2025-03-14",
          "2025-03-15",
          "2025-03-16",
          "2025-03-17",
          "2025-03-18",
          "2025-03-19",
          "2025-03-20",
          "2025-03-21",
          "2025-03-22",
          "2025-03-23",
          "2025-03-24",
          "2025-03-25",
          "2025-03-26",
          "2025-03-27",
          "2025-03-28",
          "2025-03-29",
          "2025-03-30",
          "2025-03-31",
          "2025-04-01",
          "2025-04-02",
          "2025-04-03",
          "2025-04-04",
          "2025-04-05",
          "2025-04-06",
          "2025-04-07",
          "2025-04-08",
          "2025-04-09",
          "2025-04-10",
          "2025-04-11",
          "2025-04-12",
          "2025-04-13",
          "2025-04-14",
        ],
        eventType: [
          {
            _createdAt: "2022-07-05T19:17:21Z",
            _id: "297b6685-67dc-4fc4-a705-38ac832d8f54",
            _rev: "EJPB8vuKsUQzYmuM7UtZJr",
            _type: "artistProgram",
            _updatedAt: "2022-07-05T19:17:21Z",
            slug: {
              _type: "slug",
              current: "plays",
            },
            title: "Plays",
          },
          {
            _createdAt: "2022-06-10T15:39:50Z",
            _id: "fc65a4ec-9275-4116-b9bf-60b890efe0ba",
            _rev: "McWEfWCMQi9AQlhi5Wt0Oy",
            _type: "artistProgram",
            _updatedAt: "2023-04-24T17:09:30Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-d1b25e8c11f2f06a9f84993e5a9be9a4d9fd3899-1600x1067-jpg",
                _type: "reference",
              },
            },
            order: 1,
            slug: {
              _type: "slug",
              current: "new-work-new-world",
            },
            text: [
              {
                _key: "60e9e6f4f99f",
                _type: "block",
                children: [
                  {
                    _key: "e8efd7e0be940",
                    _type: "span",
                    marks: [],
                    text: "Our Production Series includes world, U.S. and New York premieres of plays from the U.S. and around the world.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "New Work/New World",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-901b51a189e672ad2e028dec8771b68007c0673b-1333x750-png",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "ammigone",
        },
        title: "Amm(i)gone",
      },
      {
        _id: "c95e6a27-45fb-4a82-b8a6-729f11b91f2c",
        _type: "event",
        country: "japan",
        dates: ["2018-05-10", "2018-06-10"],
        eventType: [
          {
            _createdAt: "2022-07-05T19:17:21Z",
            _id: "297b6685-67dc-4fc4-a705-38ac832d8f54",
            _rev: "EJPB8vuKsUQzYmuM7UtZJr",
            _type: "artistProgram",
            _updatedAt: "2022-07-05T19:17:21Z",
            slug: {
              _type: "slug",
              current: "plays",
            },
            title: "Plays",
          },
          {
            _createdAt: "2022-06-10T15:39:50Z",
            _id: "fc65a4ec-9275-4116-b9bf-60b890efe0ba",
            _rev: "McWEfWCMQi9AQlhi5Wt0Oy",
            _type: "artistProgram",
            _updatedAt: "2023-04-24T17:09:30Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-d1b25e8c11f2f06a9f84993e5a9be9a4d9fd3899-1600x1067-jpg",
                _type: "reference",
              },
            },
            order: 1,
            slug: {
              _type: "slug",
              current: "new-work-new-world",
            },
            text: [
              {
                _key: "60e9e6f4f99f",
                _type: "block",
                children: [
                  {
                    _key: "e8efd7e0be940",
                    _type: "span",
                    marks: [],
                    text: "Our Production Series includes world, U.S. and New York premieres of plays from the U.S. and around the world.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "New Work/New World",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-cbce83700bdf919e56df5426a777be9942dd630f-1648x1000-png",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "times-journey-through-a-room",
        },
        title: "Time's Journey Through a Room",
      },
      {
        _id: "aed92c63-2503-4f82-8e0f-3d6329c47523",
        _type: "event",
        country: "mexico",
        dates: [
          "2021-10-05",
          "2021-10-06",
          "2021-10-07",
          "2021-10-08",
          "2021-10-09",
          "2021-10-10",
          "2021-10-11",
          "2021-10-12",
          "2021-10-13",
          "2021-10-14",
          "2021-10-15",
          "2021-10-16",
          "2021-10-17",
          "2021-10-18",
          "2021-10-19",
        ],
        eventType: [
          {
            _createdAt: "2022-07-05T19:17:21Z",
            _id: "297b6685-67dc-4fc4-a705-38ac832d8f54",
            _rev: "EJPB8vuKsUQzYmuM7UtZJr",
            _type: "artistProgram",
            _updatedAt: "2022-07-05T19:17:21Z",
            slug: {
              _type: "slug",
              current: "plays",
            },
            title: "Plays",
          },
          {
            _createdAt: "2022-07-20T22:35:05Z",
            _id: "d78c9649-bcac-4617-9538-b97f18b55c88",
            _rev: "McWEfWCMQi9AQlhi5Wsswy",
            _type: "artistProgram",
            _updatedAt: "2023-04-24T17:09:00Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-62cc4250f1bf382b4c68540cf3bd916e7fe03f31-916x690-png",
                _type: "reference",
              },
            },
            order: 2,
            slug: {
              _type: "slug",
              current: "universal-voices-commissions",
            },
            text: [
              {
                _key: "2c3da66211f1",
                _type: "block",
                children: [
                  {
                    _key: "3fe3fa0f731e0",
                    _type: "span",
                    marks: [],
                    text: "Our commissioning program generates original works and new English­-language translations.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "Universal Voices Commissions",
          },
          {
            _createdAt: "2022-06-10T15:39:50Z",
            _id: "fc65a4ec-9275-4116-b9bf-60b890efe0ba",
            _rev: "McWEfWCMQi9AQlhi5Wt0Oy",
            _type: "artistProgram",
            _updatedAt: "2023-04-24T17:09:30Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-d1b25e8c11f2f06a9f84993e5a9be9a4d9fd3899-1600x1067-jpg",
                _type: "reference",
              },
            },
            order: 1,
            slug: {
              _type: "slug",
              current: "new-work-new-world",
            },
            text: [
              {
                _key: "60e9e6f4f99f",
                _type: "block",
                children: [
                  {
                    _key: "e8efd7e0be940",
                    _type: "span",
                    marks: [],
                    text: "Our Production Series includes world, U.S. and New York premieres of plays from the U.S. and around the world.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "New Work/New World",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-9c733daa7911baa9ee208523ffbe039d2e648dd4-1289x750-png",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "django-in-pain",
        },
        title: "Django in Pain",
      },
      {
        _id: "502873a4-9ef4-4042-8730-b102c740475f",
        _type: "event",
        country: "palestine",
        dates: ["2017-09-08", "2017-10-22"],
        eventType: [
          {
            _createdAt: "2022-07-05T19:17:21Z",
            _id: "297b6685-67dc-4fc4-a705-38ac832d8f54",
            _rev: "EJPB8vuKsUQzYmuM7UtZJr",
            _type: "artistProgram",
            _updatedAt: "2022-07-05T19:17:21Z",
            slug: {
              _type: "slug",
              current: "plays",
            },
            title: "Plays",
          },
          {
            _createdAt: "2022-11-23T21:14:38Z",
            _id: "294616ee-430b-4758-86b1-79ee7d85d75c",
            _rev: "qaGUbS19WEFq3FVbO0Rhih",
            _type: "artistProgram",
            _updatedAt: "2025-11-27T02:07:03Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-d9444b81ae84a05e059fb15dbe97487cf2d3de86-3136x3456-jpg",
                _type: "reference",
              },
            },
            order: 4,
            slug: {
              _type: "slug",
              current: "residencies",
            },
            text: [
              {
                _key: "47e232363d39",
                _type: "block",
                children: [
                  {
                    _key: "164cd4e250cf0",
                    _type: "span",
                    marks: [],
                    text: "Travel opportunities for artists to experience and collaborate in creative communities outside their own.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "Residencies",
          },
          {
            _createdAt: "2022-06-10T15:39:50Z",
            _id: "fc65a4ec-9275-4116-b9bf-60b890efe0ba",
            _rev: "McWEfWCMQi9AQlhi5Wt0Oy",
            _type: "artistProgram",
            _updatedAt: "2023-04-24T17:09:30Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-d1b25e8c11f2f06a9f84993e5a9be9a4d9fd3899-1600x1067-jpg",
                _type: "reference",
              },
            },
            order: 1,
            slug: {
              _type: "slug",
              current: "new-work-new-world",
            },
            text: [
              {
                _key: "60e9e6f4f99f",
                _type: "block",
                children: [
                  {
                    _key: "e8efd7e0be940",
                    _type: "span",
                    marks: [],
                    text: "Our Production Series includes world, U.S. and New York premieres of plays from the U.S. and around the world.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "New Work/New World",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-1d8ae430767efb19e68c0bb45aab8558cf505bb1-1289x750-png",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "oh-my-sweet-land",
        },
        title: "Oh My Sweet Land",
      },
      {
        _id: "51f80a65-d64a-440a-becc-254d6689ec33",
        _type: "event",
        country: "usa",
        dates: ["2016-08-17T20:54:00.000Z", "2016-09-24T20:54:00.000Z"],
        eventType: [
          {
            _createdAt: "2022-07-05T19:17:21Z",
            _id: "297b6685-67dc-4fc4-a705-38ac832d8f54",
            _rev: "EJPB8vuKsUQzYmuM7UtZJr",
            _type: "artistProgram",
            _updatedAt: "2022-07-05T19:17:21Z",
            slug: {
              _type: "slug",
              current: "plays",
            },
            title: "Plays",
          },
          {
            _createdAt: "2022-06-10T15:39:50Z",
            _id: "fc65a4ec-9275-4116-b9bf-60b890efe0ba",
            _rev: "McWEfWCMQi9AQlhi5Wt0Oy",
            _type: "artistProgram",
            _updatedAt: "2023-04-24T17:09:30Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-d1b25e8c11f2f06a9f84993e5a9be9a4d9fd3899-1600x1067-jpg",
                _type: "reference",
              },
            },
            order: 1,
            slug: {
              _type: "slug",
              current: "new-work-new-world",
            },
            text: [
              {
                _key: "60e9e6f4f99f",
                _type: "block",
                children: [
                  {
                    _key: "e8efd7e0be940",
                    _type: "span",
                    marks: [],
                    text: "Our Production Series includes world, U.S. and New York premieres of plays from the U.S. and around the world.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "New Work/New World",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-96ea63b75579fe6e1c2ce6e26210f27a86fbc697-1273x740-png",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "caught",
        },
        title: "Caught",
      },
      {
        _id: "e4338cc2-f786-4908-9086-4e217b5f0b77",
        _type: "event",
        country: "turkey",
        dates: ["2022-05-11", "2022-06-05"],
        eventType: [
          {
            _createdAt: "2022-07-05T19:17:21Z",
            _id: "297b6685-67dc-4fc4-a705-38ac832d8f54",
            _rev: "EJPB8vuKsUQzYmuM7UtZJr",
            _type: "artistProgram",
            _updatedAt: "2022-07-05T19:17:21Z",
            slug: {
              _type: "slug",
              current: "plays",
            },
            title: "Plays",
          },
          {
            _createdAt: "2022-06-10T15:39:50Z",
            _id: "fc65a4ec-9275-4116-b9bf-60b890efe0ba",
            _rev: "McWEfWCMQi9AQlhi5Wt0Oy",
            _type: "artistProgram",
            _updatedAt: "2023-04-24T17:09:30Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-d1b25e8c11f2f06a9f84993e5a9be9a4d9fd3899-1600x1067-jpg",
                _type: "reference",
              },
            },
            order: 1,
            slug: {
              _type: "slug",
              current: "new-work-new-world",
            },
            text: [
              {
                _key: "60e9e6f4f99f",
                _type: "block",
                children: [
                  {
                    _key: "e8efd7e0be940",
                    _type: "span",
                    marks: [],
                    text: "Our Production Series includes world, U.S. and New York premieres of plays from the U.S. and around the world.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "New Work/New World",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-73137a59073961148d1494bf30f3523f8d0c6ec6-1200x700-jpg",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "will-you-come-with-me",
        },
        title: "Will You Come With Me?",
      },
      {
        _id: "f435e57e-a865-48eb-8efb-4b47ecb22323",
        _type: "event",
        country: "india",
        dates: [
          "2023-09-07",
          "2023-09-08",
          "2023-09-09",
          "2023-09-10",
          "2023-09-12",
          "2023-09-13",
          "2023-09-14",
          "2023-09-15",
          "2023-09-16",
          "2023-09-17",
          "2023-09-19",
          "2023-09-20",
          "2023-09-21",
          "2023-09-22",
          "2023-09-23",
          "2023-09-24",
          "2023-09-25",
          "2023-09-26",
          "2023-09-27",
          "2023-09-28",
          "2023-09-29",
          "2023-09-30",
          "2023-10-03",
          "2023-10-04",
          "2023-10-05",
          "2023-10-06",
          "2023-10-07",
        ],
        eventType: [
          {
            _createdAt: "2022-07-20T22:35:05Z",
            _id: "d78c9649-bcac-4617-9538-b97f18b55c88",
            _rev: "McWEfWCMQi9AQlhi5Wsswy",
            _type: "artistProgram",
            _updatedAt: "2023-04-24T17:09:00Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-62cc4250f1bf382b4c68540cf3bd916e7fe03f31-916x690-png",
                _type: "reference",
              },
            },
            order: 2,
            slug: {
              _type: "slug",
              current: "universal-voices-commissions",
            },
            text: [
              {
                _key: "2c3da66211f1",
                _type: "block",
                children: [
                  {
                    _key: "3fe3fa0f731e0",
                    _type: "span",
                    marks: [],
                    text: "Our commissioning program generates original works and new English­-language translations.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "Universal Voices Commissions",
          },
          {
            _createdAt: "2022-07-05T19:17:21Z",
            _id: "297b6685-67dc-4fc4-a705-38ac832d8f54",
            _rev: "EJPB8vuKsUQzYmuM7UtZJr",
            _type: "artistProgram",
            _updatedAt: "2022-07-05T19:17:21Z",
            slug: {
              _type: "slug",
              current: "plays",
            },
            title: "Plays",
          },
          {
            _createdAt: "2022-06-10T15:39:50Z",
            _id: "fc65a4ec-9275-4116-b9bf-60b890efe0ba",
            _rev: "McWEfWCMQi9AQlhi5Wt0Oy",
            _type: "artistProgram",
            _updatedAt: "2023-04-24T17:09:30Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-d1b25e8c11f2f06a9f84993e5a9be9a4d9fd3899-1600x1067-jpg",
                _type: "reference",
              },
            },
            order: 1,
            slug: {
              _type: "slug",
              current: "new-work-new-world",
            },
            text: [
              {
                _key: "60e9e6f4f99f",
                _type: "block",
                children: [
                  {
                    _key: "e8efd7e0be940",
                    _type: "span",
                    marks: [],
                    text: "Our Production Series includes world, U.S. and New York premieres of plays from the U.S. and around the world.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "New Work/New World",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-e1918876360e768ce9f078c783cddd8723abd588-7200x4859-jpg",
            _type: "reference",
          },
          crop: {
            _type: "sanity.imageCrop",
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          },
          hotspot: {
            _type: "sanity.imageHotspot",
            height: 1,
            width: 1,
            x: 0.5,
            y: 0.5,
          },
        },
        slug: {
          _type: "slug",
          current: "9-kinds-of-silence",
        },
        title: "9 Kinds of Silence",
      },
      {
        _id: "60bbc0e8-4792-4f44-83e1-ff020ba627c7",
        _type: "event",
        country: "spain",
        dates: ["2023-11-16"],
        eventType: [
          {
            _createdAt: "2022-11-23T21:14:38Z",
            _id: "294616ee-430b-4758-86b1-79ee7d85d75c",
            _rev: "qaGUbS19WEFq3FVbO0Rhih",
            _type: "artistProgram",
            _updatedAt: "2025-11-27T02:07:03Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-d9444b81ae84a05e059fb15dbe97487cf2d3de86-3136x3456-jpg",
                _type: "reference",
              },
            },
            order: 4,
            slug: {
              _type: "slug",
              current: "residencies",
            },
            text: [
              {
                _key: "47e232363d39",
                _type: "block",
                children: [
                  {
                    _key: "164cd4e250cf0",
                    _type: "span",
                    marks: [],
                    text: "Travel opportunities for artists to experience and collaborate in creative communities outside their own.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "Residencies",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-dba6078a053223f65d06aa1da42628ff386fe68c-1280x853-jpg",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "the-nicest-body-ever-seen-around-these-parts",
        },
        title: "The Nicest Body Ever Seen Around These Parts",
      },
      {
        _id: "60207158-a93d-4f67-ab65-95b3a25206b6",
        _type: "event",
        country: null,
        dates: ["2024-02-21"],
        eventType: [
          {
            _createdAt: "2022-07-25T20:42:08Z",
            _id: "0a02371f-c3ef-432a-9af7-e9e29e54945f",
            _rev: "KywC54TehipxsVP3WSRMSX",
            _type: "theHub",
            _updatedAt: "2022-07-25T20:42:08Z",
            order: 2,
            slug: {
              _type: "slug",
              current: "interviews",
            },
            title: "Interviews",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-f416fae80e1d11b8d458013394431ca1fba36b7b-3941x3184-jpg",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "conversation-corinne-jaber",
        },
        title: "Commitment & Practice: A Conversation with Corinne Jaber",
      },
      {
        _id: "3027a701-d83a-4c81-aad7-1c26c6e993fc",
        _type: "event",
        country: null,
        dates: ["2025-02-26"],
        eventType: [
          {
            _createdAt: "2022-07-25T20:42:08Z",
            _id: "0a02371f-c3ef-432a-9af7-e9e29e54945f",
            _rev: "KywC54TehipxsVP3WSRMSX",
            _type: "theHub",
            _updatedAt: "2022-07-25T20:42:08Z",
            order: 2,
            slug: {
              _type: "slug",
              current: "interviews",
            },
            title: "Interviews",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-b02ff7cb4af78a74060335f790854daa1ee2a6b8-1960x1102-png",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "interview-adil-mansoor-lyam-b-gabel",
        },
        title:
          "Catharsis & Hope: A Conversation with Adil Mansoor & Lyam B. Gabel",
      },
      {
        _id: "f2c0d035-129a-430f-a57d-19bad32a50a8",
        _type: "event",
        country: null,
        dates: ["2024-04-15"],
        eventType: [
          {
            _createdAt: "2022-07-20T20:07:18Z",
            _id: "7065ac14-4e8e-4272-8105-956dba798948",
            _rev: "Kbve52TVFXFmKWJxk2OSyn",
            _type: "theHub",
            _updatedAt: "2022-07-25T20:51:17Z",
            order: 1,
            slug: {
              _type: "slug",
              current: "features",
            },
            title: "Features",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-0f66620e98e76e856fb3521eced67f639b6f2926-1600x1200-jpg",
            _type: "reference",
          },
          crop: {
            _type: "sanity.imageCrop",
            bottom: 0.13725490196078427,
            left: 0,
            right: 0,
            top: 0.1519607843137256,
          },
          hotspot: {
            _type: "sanity.imageHotspot",
            height: 0.7107843137254901,
            width: 1,
            x: 0.5,
            y: 0.5073529411764707,
          },
        },
        slug: {
          _type: "slug",
          current: "expiation-nicest-body",
        },
        title:
          "Expiation: Reflections on THE NICEST BODY EVER SEEN AROUND THESE PARTS",
      },
      {
        _id: "7deb279b-d7f9-4c97-b769-9976dca941ee",
        _type: "event",
        country: null,
        dates: ["2024-05-31"],
        eventType: [
          {
            _createdAt: "2022-07-20T20:07:18Z",
            _id: "7065ac14-4e8e-4272-8105-956dba798948",
            _rev: "Kbve52TVFXFmKWJxk2OSyn",
            _type: "theHub",
            _updatedAt: "2022-07-25T20:51:17Z",
            order: 1,
            slug: {
              _type: "slug",
              current: "features",
            },
            title: "Features",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-12ac71c98ac2b9b84bccd5d9e0cdd6f63c1e2b24-1280x853-jpg",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "spring-benefit-honoree-opening-act",
        },
        title: "Celebrating Spring Benefit Honoree Opening Act!",
      },
      {
        _id: "a97b71a4-3f91-442e-9a2b-ab694d5ddc45",
        _type: "event",
        country: "south-africa",
        dates: ["2024-07-29"],
        eventType: [
          {
            _createdAt: "2022-07-05T19:17:21Z",
            _id: "297b6685-67dc-4fc4-a705-38ac832d8f54",
            _rev: "EJPB8vuKsUQzYmuM7UtZJr",
            _type: "artistProgram",
            _updatedAt: "2022-07-05T19:17:21Z",
            slug: {
              _type: "slug",
              current: "plays",
            },
            title: "Plays",
          },
          {
            _createdAt: "2022-07-25T22:18:16Z",
            _id: "2b4d9f41-a855-4f1a-b339-939ce39cff0d",
            _rev: "KWIE8GVKnKWeWvy4qbSuun",
            _type: "artistProgram",
            _updatedAt: "2023-04-24T17:09:15Z",
            featuredImage: {
              _type: "imageWithAlt",
              asset: {
                _ref: "image-7466faac0d1cb10ab4b97702ecfb90388ae8bf3a-2000x1500-jpg",
                _type: "reference",
              },
            },
            order: 3,
            slug: {
              _type: "slug",
              current: "studio",
            },
            text: [
              {
                _key: "7c97b562f44b",
                _type: "block",
                children: [
                  {
                    _key: "718d75930ee00",
                    _type: "span",
                    marks: [],
                    text: "We support artistic project development through readings, workshops and public lab productions.",
                  },
                ],
                markDefs: [],
                style: "normal",
              },
            ],
            title: "Studio",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-cd789285427542d80670bc22965899d4159fe6f3-1200x720-png",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "survival",
        },
        title: "Survival",
      },
      {
        _id: "9967c919-3aa3-4091-86bc-1efc322eb589",
        _type: "event",
        country: null,
        dates: ["2024-06-28"],
        eventType: [
          {
            _createdAt: "2022-07-20T20:07:18Z",
            _id: "7065ac14-4e8e-4272-8105-956dba798948",
            _rev: "Kbve52TVFXFmKWJxk2OSyn",
            _type: "theHub",
            _updatedAt: "2022-07-25T20:51:17Z",
            order: 1,
            slug: {
              _type: "slug",
              current: "features",
            },
            title: "Features",
          },
        ],
        featuredImage: {
          _type: "imageWithAlt",
          asset: {
            _ref: "image-ea1301ecb4a4168952cc670ae15b4f4e71f59903-1300x726-png",
            _type: "reference",
          },
        },
        slug: {
          _type: "slug",
          current: "memories-of-survival",
        },
        title: "Memories of SURVIVAL: Reflections from the Tour",
      },
    ];

    const randomProjects = featuredProductions.sort(() => Math.random() - 0.5);
    const results = randomProjects.slice(0, parseInt(limiter, 10));

    return response.status(200).json({ body: results });
  } catch (error) {
    return response.status(500).json({ body: error });
  }
}
