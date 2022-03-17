
let model = {
    //app    
    currentPage: '',
    currentUser: null,


    //input
    input: {
        userLogin:'',
        userPassword:'',

    regInfo:{
        regFirstName: '',
        regLastName: '',
        regPassword: '',
        regConfirmPW: '',
        regSelectBreed: '',
    },
    
    calendar: {
        month: '',
        year: '',
    },
    
    forum: {
        search: '',
        textBox: '',
    },

    upload: {
        catName: '',
        catBreed: '',
        catImg: '',
    },

    ratingInfo: {
        rateTail: 0,
        rateFur: 0,
        rateHead: 0,
        rateColor: 0,
        rateEars: 0,
        rateOverall: 0,
            
    },

    },
    //data
    arrangements:[
        {name: "Utstilling på grand hotel", date: "17.03.2022", price: 123}, // putte in info som trengs
    ],

    users:[
        {
            id:1,
            firstName:'Per',
            lastName:'Per',
            password:'123456',
            mail: 'per@per.no',
            chosenCat:1,
        },
        {
            id:2,
            forname:'Terje',
            lastname:'Terje',
            password:'123465',
            mail: 'ter.je@yomamasmail.com',
            chosenCat:2,
        },
    ],

    usersCatPictures:[
        {personId:1,imgurl:"img1.png",ratings:[{fur:3, head:4, tail:4, ears:5, color:6, overall:50},],},
        {personId:2,imgurl:"img1.png",ratings:[{fur:1, head:6, tail:2, ears:3, color:4, overall:35},],},
    ],

    chooseCat: [
                {   
                    id: 1,
                    name: 'Norsk Skogkatt',
                    info:'',
                image:[]
                },
                {
                    id: 2,
                    name: 'Siamesisk Katt',
                    info:'',
                image:[]
                },
                {
                    id: 3,
                    name: 'American Curl Langhår',
                    info:'',
                image:[]},
                {
                    id: 4,
                    name: 'Maine Coon',
                    info:'',
                image:[]},
                {
                    id: 5,
                    name: 'Scottish Fold',
                    info: '',
                image:[]},
                {
                     id: 6,                                                                                                                                                 
                    name: 'Ragdoll',
                    info: '',
                image:[]},

                
            
    ],
    
    
    }