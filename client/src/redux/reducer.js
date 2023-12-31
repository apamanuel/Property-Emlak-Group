import { GET_FEATURED, GET_PROPERTIES } from "./actions-types";

const initialState = {
    featured: [
        {
            id: 1,
            title: "Designer penthouse style apartment in heart of istanbul",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit saepe cum quod quam quia alias voluptatibus veritatis praesentium error fugit nemo quo explicabo porro soluta ut ratione, consequatur harum! Libero.",
            overview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            reasons:{
                r1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            features:{
                propertyType: 'apartmen',
                bedrooms: 3,
                bathrooms: 2,
                livingSpace: '200m2',
                location: 'Istanbul',
            },
            price: 200000,
            ref: 'PTF6337',
            image:"https://i.ibb.co/hYhK6RZ/image-1.jpg",
        },
        {
            id: 2,
            title: "Panoramic sea and yalikavak bay view private villas",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit saepe cum quod quam quia alias voluptatibus veritatis praesentium error fugit nemo quo explicabo porro soluta ut ratione, consequatur harum! Libero.",
            overview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            reasons:{
                r1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            features:{
                propertyType: 'Villa',
                bedrooms: 5,
                bathrooms: 6,
                livingSpace: '390m2',
                location: 'Istanbul',
            },
            price: 2141200,
            ref: 'PTF6338',
            image: "https://i.ibb.co/Kb7mb5m/ef3c8d22ddce09d239766c637e913dd2-890x440.jpg",
        },
        {
            id: 3,
            title: "Panoramic sea and yalikavak bay view private villas",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit saepe cum quod quam quia alias voluptatibus veritatis praesentium error fugit nemo quo explicabo porro soluta ut ratione, consequatur harum! Libero.",
            overview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            reasons:{
                r1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            features:{
                propertyType: 'Villa',
                bedrooms: 5,
                bathrooms: 6,
                livingSpace: '390m2',
                location: 'Istanbul',
            },
            price: 2141200,
            ref: 'PTF6338',
            image: "https://i.ibb.co/r3gnzjr/51b22d74d4c8403badeb37294784d37d.jpg",
        },
        {
            id: 4,
            title: "Panoramic sea and yalikavak bay view private villas",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit saepe cum quod quam quia alias voluptatibus veritatis praesentium error fugit nemo quo explicabo porro soluta ut ratione, consequatur harum! Libero.",
            overview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            reasons:{
                r1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            features:{
                propertyType: 'Villa',
                bedrooms: 3,
                bathrooms: 2,
                livingSpace: '150m2',
                location: 'Istanbul',
            },
            price: 856458,
            ref: 'PTF6387',
            image: "https://i.ibb.co/Kb7mb5m/ef3c8d22ddce09d239766c637e913dd2-890x440.jpg",
        },
    ],
    properties: [
        {
            id: 1,
            title: "Designer penthouse style apartment in heart of istanbul",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit saepe cum quod quam quia alias voluptatibus veritatis praesentium error fugit nemo quo explicabo porro soluta ut ratione, consequatur harum! Libero.",
            overview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            reasons:{
                r1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            features:{
                propertyType: 'apartmen',
                bedrooms: 3,
                bathrooms: 2,
                livingSpace: '200m2',
                location: 'Istanbul',
            },
            price: 200000,
            ref: 'PTF6337',
            image:"https://i.ibb.co/hYhK6RZ/image-1.jpg",
        },
        {
            id: 2,
            title: "Panoramic sea and yalikavak bay view private villas",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit saepe cum quod quam quia alias voluptatibus veritatis praesentium error fugit nemo quo explicabo porro soluta ut ratione, consequatur harum! Libero.",
            overview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            reasons:{
                r1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            features:{
                propertyType: 'Villa',
                bedrooms: 5,
                bathrooms: 6,
                livingSpace: '390m2',
                location: 'Istanbul',
            },
            price: 2141200,
            ref: 'PTF6338',
            image: "https://i.ibb.co/Kb7mb5m/ef3c8d22ddce09d239766c637e913dd2-890x440.jpg",
        },
        {
            id: 3,
            title: "Panoramic sea and yalikavak bay view private villas",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit saepe cum quod quam quia alias voluptatibus veritatis praesentium error fugit nemo quo explicabo porro soluta ut ratione, consequatur harum! Libero.",
            overview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            reasons:{
                r1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            features:{
                propertyType: 'Villa',
                bedrooms: 5,
                bathrooms: 6,
                livingSpace: '390m2',
                location: 'Istanbul',
            },
            price: 2141200,
            ref: 'PTF6338',
            image: "https://i.ibb.co/r3gnzjr/51b22d74d4c8403badeb37294784d37d.jpg",
        },
        {
            id: 4,
            title: "Panoramic sea and yalikavak bay view private villas",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit saepe cum quod quam quia alias voluptatibus veritatis praesentium error fugit nemo quo explicabo porro soluta ut ratione, consequatur harum! Libero.",
            overview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            reasons:{
                r1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                r3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            features:{
                propertyType: 'Villa',
                bedrooms: 3,
                bathrooms: 2,
                livingSpace: '150m2',
                location: 'Istanbul',
            },
            price: 856458,
            ref: 'PTF6387',
            image: "https://i.ibb.co/Kb7mb5m/ef3c8d22ddce09d239766c637e913dd2-890x440.jpg",
        },
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return {...state};
    };
};

export default rootReducer;