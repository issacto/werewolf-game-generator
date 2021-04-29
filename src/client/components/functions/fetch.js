import axios from 'axios';


export const  getRoom = async (productName) => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    const dataPromise =  await axios.get("http://localhost:8080/getRoom").then((response) => {console.log("response");console.log(response.data);return response}).catch(err => {console.log("Error:");return null})
    
    return dataPromise;
};


export const  hasRoom = async (productName) => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    const dataPromise =  await axios.get("http://localhost:8080/hasRooms").then((response) => {console.log("response");console.log(response.data);return response}).catch(err => {console.log("Error:");return null})
    
    return dataPromise;
}