import axios from 'axios';


export const  getAllReviews = async (productName) => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    console.log("afljnbkj")
    const dataPromise =  await axios.get("http://localhost:8080/getRoom").then((response) => {console.log("response");console.log(response.data);return response}).catch(err => {console.log("Error:");return null})
    
    return dataPromise;
};