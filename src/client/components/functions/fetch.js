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

export const  getPublicRoom = async (id) => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    const dataPromise =  await axios.get("http://localhost:8080/getPublicRoom?id="+id).then((response) => {console.log("response");console.log(response.data);return response}).catch(err => {console.log("Error:");return null})
    
    return dataPromise;
}


export const  putCharacter = async (id,charactersName, charactersSize) => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    const dataPromise =  await axios.get("http://localhost:8080/putCharacter?id="+id, { params: { charactersName: charactersName,charactersSize:charactersSize  }}).then((response) => {console.log("response");console.log(response.data);return response}).catch(err => {console.log("Error:");return null})
    
    return dataPromise;
}

export const  getCharacters = async (id) => {
    //const promise =axios.get("/api/reviews/comments/"+userData );
    const dataPromise =  await axios.get("http://localhost:8080/getCharacters?id="+id).then((response) => {console.log("response");console.log(response.data);return response}).catch(err => {console.log("Error:");return null})
    console.log("dataPromise")
    console.log(dataPromise)
    return dataPromise;
}