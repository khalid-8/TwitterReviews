import { axiosInstance } from "./axiosInstance";
// const key = process.env.REACT_APP_TWAPI_KEY
// const sec = process.env.REACT_APP_TWAPI_SEC
// const token = process.env.REACT_APP_EX_TWAPI_ACCTOKEN
// const tokenSec = process.env.REACT_APP_EX_TWAPI_ACCTOKEN_SEC

class API {
  // static baseURL = `${process.env.REACT_APP_BASE_URL}/1.1/`
  //Return content from the DB
  
  Search = (query) => { 
    return axiosInstance.post(`twitter/`, query).then((res) =>{
      console.log(res);
      return res.data;
    })
    .catch((err) =>{
      console.log(err)
      return -1;
    })
  };
  
  GetIpAddress = () => {
    return axiosInstance.get('https://geolocation-db.com/json/').then((res) =>{
      console.log(res.data);
      return res.data;
    }).catch((err) =>{
      console.log(err)
      return -1;
    })
    // console.log(res.data);
    // setIP(res.data.IPv4)
  }
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
