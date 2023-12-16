let arr = [
    {
      id: 1,
      name: "Leanne Graham",
      age: 18,
      gender: 'male',
      username: "Bret",
      email: "Sincere@april.net",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      age: 23,
      gender: 'male',
      username: "Antonette",
      email: "Shanna@melissa.org",
      website: "hildegard.org",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      age: 37,
      gender: 'female',
      username: "Samantha",
      email: "Nathan@yesenia.net",
      website: "hildegard.org",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      age: 20,
      gender: 'female',
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      website: "hildegard.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      age: 30,
      gender: 'male',
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      website: "demarco.info",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      age: 42,
      gender: 'male',
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      website: "ola.org",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      age: 25,
      gender: 'male',
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      website: "elvis.io",
    }
  ]

let younger = [] 
let older = []

let young = arr.filter((item => item.age < 35))

console.log(young);


let old = arr.filter((item => item.age > 35))

console.log(old);


let totalMale = []
 
let  totalFemale = []



let male = arr.filter((item => item.gender == "male" ))

console.log(male);


let female = arr.filter((item => item.gender == "female" ))

console.log(female);