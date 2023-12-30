// It is a function to format a number separated by thousands. 
// Ex. 200000 to "200,000", 1000000 to "1,000,000". The num parameter can be a string or number


export const formatNumber = (num)=>{
    if (typeof num === 'string'){
        const newNum = num.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return newNum;
    } else{
        const newNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return newNum;
    };
};
