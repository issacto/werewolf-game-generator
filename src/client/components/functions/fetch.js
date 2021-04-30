import axios from 'axios';


export const  getRoom = async (numberOfPeople) => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    const dataPromise =  await axios.get("http://localhost:8080/getRoom?size="+numberOfPeople).then((response) => {console.log("response");console.log(response.data);return response}).catch(err => {console.log("Error:");return null})
    
    return dataPromise;
};


export const  hasRoom = async (id) => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    const dataPromise =  await axios.get("http://localhost:8080/hasRoom?id="+id).then((response) => {console.log("response");console.log(response.data);return response}).catch(err => {console.log("Error:");return null})
    
    return dataPromise;
}


export const  getRoomSize = async (id) => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    const dataPromise =  await axios.get("http://localhost:8080/getRoomSize?id="+id).then((response) => {console.log("response");console.log(response.data);return response}).catch(err => {console.log("Error:");return null})
    
    return dataPromise;
}