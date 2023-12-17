import { GET_FEATURED, GET_PROPERTIES } from "./actions-types";

const initialState = {
    featured: [],
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
            },
            price: 200000,
            ref: 'PTF6337',
            image:'https://drive.google.com/file/d/1EnUAsz9EjrCfqiOkPilwvI9eYx9CYFHr/view?usp=sharing',
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
            },
            price: 2141200,
            ref: 'PTF6338',
            image:'https://drive.google.com/file/d/1HUVVu_lmQAF9fjGwA0kVfIVwCE8W3ZAE/view?usp=sharing',
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
            },
            price: 2141200,
            ref: 'PTF6338',
            image:'https://drive.google.com/file/d/1HUVVu_lmQAF9fjGwA0kVfIVwCE8W3ZAE/view?usp=sharing',
        }
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return {...state};
    };
};

export default rootReducer;