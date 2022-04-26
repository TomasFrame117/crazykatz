let html = "";
const model = {
  //app
  app: {
    currentPage: "homePage",
    currentUserName: "",
    currentUserID: null,

  },

  //input
  input: {
    userLogin: "",
    userPassword: "",
    
    regInfo: {
      id: null,
      regFirstName: "",
      regLastName: "",
      regMail: "",
      regPassword: "",
      regConfirmPW: "",
      regSelectBreed: "",
    
    },
    output: [],
    selectedCatId: null,
    calendar: {
      month: "",
      year: "",
    },

    forum: {
      search: "",
      textBoxOne: '',
      textBoxTwo: '',
      textBoxThree: '',
      textBoxFour: '',
      textBoxFive: '',
      msg:[''],                       
    },

    upload: {
      catName: "",
      catBreed: "",
      catImg: "",
    },

    ratingInfo: {
      Tail: 0,
      Fur: 0,
      Head: 0,
      Color: 0,
      Ears: 0,
      Overall: 0,
      maxPoints: 100,
    },
    ratingResult: {
      total: 0,
    },
  },
  //data

 sortedList:[],
  images: 
    {
      NorskSkogKatt: [
        "https://www.zooplus.no/magasin/wp-content/uploads/2018/12/norsk-skogkatt-768x512.jpg",
      ],
      Siamese: [
        "https://indienikole.com/img/lifestyle/14/get-know-siamese.jpg",
      ],
      AmericanCurl: [
        "https://www.holidogtimes.com/wp-content/uploads/2018/03/american-curl-fi.png",
      ],
      MaineCoon: [
        "https://www.zooplus.no/magasin/wp-content/uploads/2018/11/maine-coon-768x658.jpg",
      ],
      ScottishFold: [
        "https://media.istockphoto.com/photos/lovable-scottish-fold-cat-picture-id467801366?k=20&m=467801366&s=612x612&w=0&h=FBdXfK4jt-jRzL8jpFbHHFOkMBobMHsGkpEDiDKCiGs=",
      ],
      Ragdoll: [
        "https://thumbs.dreamstime.com/b/awesome-ragdoll-cat-beautiful-cushion-adorable-ragdoll-cat-beautiful-cushion-172354412.jpg",
      ],
      AddNewImg:[],
      highestScore:[],
      secondPlace:[],
      thirdPlace:[],
      scoreList : [],
    },
  
  events: [
    {
      id: 1,
      name: "Utstilling på grand hotel",
      description: "",
      startDate: "17.03.2022",
      endDate: "20.03.2022",
      startTime: "12:00",
      endTime: "20:00",
      price: 123,
      allDay: false,
    }, // putte in info som trengs
    {
      id: 2,
      name: "Katteshow på elvebredden",
      description: "World-Class Cat Show",
      startDate: "14.05.2022",
      endDate: "16.05.2022",
      startTime: "12:00",
      endTime: "20:00",
      price: 120,
      allDay: false,
    },
    {
      id: 3,
      name: "Katteshow på Bleserfjell panorama apartments",
      description:
        "Eksotisk katteshow. Ta med katter og barn. Show for hele familen.",
      startDate: "14.05.2022",
      endDate: "16.05.2022",
      startTime: "12:00",
      endTime: "20:00",
      price: 125,
      allDay: false,
    },
  ],
  userId: null,
  users: [
  
    {
      id: 1,
      firstName: "Tomas",
      lastName: "Toppen",
      password: "1",
      mail: "1",
      chosenCat: 1,
      allreadyRated:[],
    },
    {
      id: 2,
      firstName: "Christian",
      lastName: "Yo",
      password: "2",
      mail: "2",
      chosenCat: 2,
      allreadyRated:[],
    },
    {
      id: 3,
      firstName: "Knut",
      lastName: "Bergstrøm",
      password: "12345678",
      mail: "knut@mail.no",
      chosenCat: 3,
      allreadyRated:[],
    },
  ],

  usersCatPictures: [
    {
      personId: 1,
      imgurl: "img1.png",
      ratings: [
        { fur: 3, head: 4, tail: 4, ears: 5, color: 6, overall: 50 },
        { fur: 3, head: 4, tail: 4, ears: 5, color: 6, overall: 50 },
      ],
    },
    {
      personId: 2,
      imgurl: "img1.png",
      ratings: [{ fur: 1, head: 6, tail: 2, ears: 3, color: 4, overall: 35 }],
    },
  ],

  chooseCat: [
    {
      id: 1,
      name: "Norsk Skogkatt",
      info: "Norsk skogkatt (NFO) er en katterase som første gang ble anerkjent av FIFé i 1977, men som har røtter som går langt tilbake i tid. Som rase ble den skapt i Norge på 1930-tallet, men den er trolig mer vanlig i Sverige.",
      image: [
        "https://www.zooplus.no/magasin/wp-content/uploads/2018/12/norsk-skogkatt-768x512.jpg",
      ],
      usersWhoHaveRated:[],
      ratingInfo: {
        rateTail: [], // gj.
        rateFur: [],
        rateHead: [],
        rateColor: [],
        rateEars: [],
        rateOverall: [],
        totalrating: 0,
        maxPoints: 100,
          
      },
    },
    {
      id: 2,
      name: "Siameser",
      info: "Siameser er en middels stor, lang, slank katt, med en meget kort, fin pels uten underpels. Halen er lang og avsmalnende. Hodet smalner til snuten i rette linjer med lang rett nese. Øynene er blå.",
      image: ["https://indienikole.com/img/lifestyle/14/get-know-siamese.jpg"],
      usersWhoHaveRated:[],
      ratingInfo: {
        rateTail: [],
        rateFur: [],
        rateHead: [],
        rateColor: [],
        rateEars: [],
        rateOverall: [],
        totalrating: 0,
        maxPoints: 100,
         
      },
    },
    {
      id: 3,
      name: "American Curl Langhår",
      info: "Rasen kommer altså som to raser; langhåret og korthåret. Den langhårede utgaven har ganske lang pels, mens den korthårede har kort eller halvlang pels. Pelsen til begge er myk og lett med lite underull. Pelsen kommer i de fleste farger og mønstre, og en haug ulike kombinasjoner av disse.",
      image: [
        "https://www.holidogtimes.com/wp-content/uploads/2018/03/american-curl-fi.png",
      ],
      usersWhoHaveRated:[],
      ratingInfo: {
        rateTail: [],
        rateFur: [],
        rateHead: [],
        rateColor: [],
        rateEars: [],
        rateOverall: [],
        totalrating: 0,
        maxPoints: 100,
        
      },
    },
    {
      id: 4,
      name: "Maine coon",
      info: "Maine coon er en stor og kraftig katt, den største av tamkattrasene. En fullvoksen hann veier 6–8 kilo, mens hunnen veier 4–6 kilo. Det kan ta flere år før katten er fullt utvokst. Pelsen er mellomlang, silkeaktig og tett.",
      image: [
        "https://www.zooplus.no/magasin/wp-content/uploads/2018/11/maine-coon-768x658.jpg",
      ],
      usersWhoHaveRated:[],
      ratingInfo: {
        rateTail: [],
        rateFur: [],
        rateHead: [],
        rateColor: [],
        rateEars: [],
        rateOverall: [],
        totalrating: 0,
        maxPoints: 100,
         
      },
    },
    {
      id: 5,
      name: "Scottish Fold",
      info: "Scottish Fold er en rase som oppstod av en spontan mutasjon i Skottland i 1961. Det var en katt med foldede ører som fødte en hunn katt med navnet Snooks og sammen med en britisk korthår fødte Snooks en hann katt med navn Snowball. Rasen til Snowball fikk navnet ” folded Ear ”.",
      image: [
        "https://media.istockphoto.com/photos/lovable-scottish-fold-cat-picture-id467801366?k=20&m=467801366&s=612x612&w=0&h=FBdXfK4jt-jRzL8jpFbHHFOkMBobMHsGkpEDiDKCiGs=",
      ],
      usersWhoHaveRated:[],
      ratingInfo: {
        rateTail: [],
        rateFur: [],
        rateHead: [],
        rateColor: [],
        rateEars: [],
        rateOverall: [],
        totalrating: 0,
        maxPoints: 100,
           highestScore:[],
      secondPlace:[],
      thirdPlace:[],
      },
    },
    {
      id: 6,
      name: "Ragdoll",
      info: "Ragdoll er en lang muskuløs katt med bredt bryst og lang buskete hale. Hodet er middels stort, med fyldige kinn, og lav og flat mellom ørene. Øynene er store, ovale og blå, så vidt skråstilte. Særegent for rasen er dens maskefarger og hvitflekkethet.",
      image: [
        "https://thumbs.dreamstime.com/b/awesome-ragdoll-cat-beautiful-cushion-adorable-ragdoll-cat-beautiful-cushion-172354412.jpg",
      ],
      usersWhoHaveRated:[],
      ratingInfo: {
        rateTail: [],
        rateFur: [],
        rateHead: [],
        rateColor: [],
        rateEars: [],
        rateOverall: [],
        totalrating: 0,
        maxPoints: 100,
           highestScore:[],
      secondPlace:[],
      thirdPlace:[],
      },
    },
  ],
};
