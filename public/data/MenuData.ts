// export const categories = {
//   Deserts: [
//     {
//       name: "Strawbarry cack",
//       price: 40,
//     },
//     {
//       name: "Choclete cack",
//       price: 40,
//     },
//   ],
//   Drinks: [
//     { name: "Milk shak", price: 60 },
//     { name: "Hot shak", price: 40 },
//   ],
// };
export const categories = [
  {
    name: "Deserts",
    products: [
      { name: "Milk shak", price: 60 },
      { name: "Hot shak", price: 40 },
      { name: "Choclete shak", price: 40 },
    ],
  },
  {
    name: "Drinks",
    products: [
      {
        name: "Strawbarry cack",
        price: 40,
      },
      {
        name: "Choclete cack",
        price: 40,
      },
    ],
  },
];

export const menu = [
  {
    categories: [
      {
        name: "Deserts",
        subcategories: [
          {
            Name: "Cakes",
            items: [
              {
                name: "Choclate Cake",
                price: "5.5$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-iarpx&psig=AOvVaw32iUwQGynXpFlsxfX4I-BX&ust=1714374961899000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDc4squ5IUDFQAAAAAdAAAAABAE",
              },
              {
                name: "Strawbery Cake",
                price: "6.5$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-psd%2Fdelicious-strawberry-cake-with-fresh-strawberries-isolated-transparent-background_82980270.htm&psig=AOvVaw0Y4X0ER9NV7camGh33vBs7&ust=1714375004566000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICLi92u5IUDFQAAAAAdAAAAABAE",
              },
            ],
          },
          {
            Name: "Creap",
            items: [
              {
                name: "Lotus Creap",
                price: "4.5$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-csmtr&psig=AOvVaw14MqbIQmwt8uQrkHOrovoA&ust=1714376968876000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCmrYa25IUDFQAAAAAdAAAAABAE",
              },
              {
                name: "Nutella Creap",
                price: "4.5$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-gqskq&psig=AOvVaw3QCUbPz33O2iLRAQLRSLkX&ust=1714377032882000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjSlqK25IUDFQAAAAAdAAAAABAEF",
              },
            ],
          },
        ],
      },
      {
        name: "hot Drinks",
        subcategories: [
          {
            Name: "Tea",
            item: [
              {
                name: "Green Tea",
                price: "1.5$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-igkdh&psig=AOvVaw0LOIj-XV-NtcV1azcVy67T&ust=1714377495721000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNi5oYG45IUDFQAAAAAdAAAAABAE",
              },
              {
                name: "Black Tea",
                price: "1.5$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Ftea&psig=AOvVaw1Ao3OBWkqyd9XwHJnI7SeB&ust=1714377559919000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCk-6O45IUDFQAAAAAdAAAAABAE",
              },
            ],
          },
          {
            Name: "Coffee",
            item: [
              {
                name: "Cappuccino",
                price: "2$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-tjhap&psig=AOvVaw1VnSTJ33zAKpPq0YCxhXB2&ust=1714377641421000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjV08S45IUDFQAAAAAdAAAAABAE",
              },
              {
                name: "Latte",
                price: "2$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-xzelb&psig=AOvVaw0eIgn9x3jKzky8ihNtkAzc&ust=1714377825228000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDa3pu55IUDFQAAAAAdAAAAABAE",
              },
            ],
          },
        ],
      },
      {
        name: "Fast Food",
        subcategories: [
          {
            Name: "Burger",
            items: [
              {
                name: "Cheese Burger",
                price: "6$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Ftriple-cheese-burger-burger-ki-PNG-free-PNG-Images_187928&psig=AOvVaw1Xv5RHpZ9CGCgC_sT7LdbB&ust=1714377944280000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDw2de55IUDFQAAAAAdAAAAABAE",
              },
              {
                name: "Zinger Burger",
                price: "5$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-hafyx&psig=AOvVaw2gTHTElD_3n3YuY9XXPfCw&ust=1714378323606000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDTyIq75IUDFQAAAAAdAAAAABAE",
              },
            ],
          },
          {
            Name: "Pizza",
            items: [
              {
                name: "Cheese Pizza",
                price: "6$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-qoynu&psig=AOvVaw3dAy_53QdiO9dIZRUvNf2y&ust=1714378871587000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjpg4-95IUDFQAAAAAdAAAAABAE",
              },
              {
                name: "Peperoni pizza",
                price: "7$",
                image:
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-pqfit&psig=AOvVaw3w6Uz86UcxmxBn5h_Yi8tS&ust=1714379131145000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOD5mIu-5IUDFQAAAAAdAAAAABAE",
              },
            ],
          },
          {
            name: "cold Drinks",
            subcategories: [
              {
                Name: "smoothies",
                items: [
                  {
                    name: "pineapple smoothies",
                    price: "1.5$",
                    image:
                      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-ialxu&psig=AOvVaw12Ipt8-WjZIS-9Q7F004Cb&ust=1714381793370000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjzt4DI5IUDFQAAAAAdAAAAABAE",
                  },
                  {
                    name: " orange smoothies",
                    price: "1.5$",
                    image:
                      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-iehtw&psig=AOvVaw1pJ1CPOwY3BlqAe6gbQ6Gs&ust=1714384509008000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDL747S5IUDFQAAAAAdAAAAABAE",
                  },
                ],
              },
              {
                Name: "juices",
                items: [
                  {
                    name: "orange juice",
                    price: "2$",
                    image:
                      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-mvsoh&psig=AOvVaw2gxLGj3LFaeD-C5WNgBuhs&ust=1714384592952000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPC3irfS5IUDFQAAAAAdAAAAABAE",
                  },
                  {
                    name: "Strawbarry juice",
                    price: "2.5$",
                    image:
                      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-bagmb&psig=AOvVaw3vi1ahO8dxLAlMROZ_B6Ue&ust=1714384587866000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjzr9LS5IUDFQAAAAAdAAAAABAE",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
