import { axiosInstance } from "./axiosInstance";
// const key = process.env.REACT_APP_TWAPI_KEY
// const sec = process.env.REACT_APP_TWAPI_SEC
// const token = process.env.REACT_APP_EX_TWAPI_ACCTOKEN
// const tokenSec = process.env.REACT_APP_EX_TWAPI_ACCTOKEN_SEC

class API {
  // static baseURL = `${process.env.REACT_APP_BASE_URL}/1.1/`
  //Return content from the DB
  
  Search = async (query) => { 
      // headers: {
      //   Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAACsx%2BQAAAAAA2%2F9Onm5ZIzMJotHeoJQpCFtJV10%3DSK9tQfBsNZirwauxiFzDXl80sB7M0xMGLaAbtGZkhReYFBA1Rz"
      // },
    //   const requestOptions = {
    //     method: 'POST',
    //     redirect: 'follow',
    //     body: query,
    //   };
    
    // const req = await fetch(`${process.env.REACT_APP_BASE_URL}/twitter/`, requestOptions)
    //   .then((response) => console.log(JSON.parse(response)))
    //   // .then(result => console.log(result))
    //   .catch((error) => console.log(error))
    // await axiosInstance.post()
    return await axiosInstance.post(`${process.env.REACT_APP_BASE_URL}/twitter/`, query)
    .then((res) =>{
      console.log(res.data.results);
      return res.data;
    })
    .catch((err) =>{
      console.log(err)
    })
  };

  //Create a new content to the DB
  addContent = async (objToAdd) => {
    return await axiosInstance.post("insertContent", objToAdd).then((response) => {
      return response.data;
    }).catch((err) => {
      return err;
    });
  };

  //Delete a content from the DB
  deleteContent = async (objToDelete) => {
    return await axiosInstance.delete("deleteContent", {data: {objToDelete}}).then((response) => {
      return response.data;
    }).catch((err) => {
      return err;
    });
  };

   //Edit a content in the DB
    editContent = async (objToEdit) => {
    return await axiosInstance.put("editContent", objToEdit).then((response) => {
      return response.data;
    }).catch((err) => {
      return err;
    });
  };

}

const instance = new API();
export default instance;
