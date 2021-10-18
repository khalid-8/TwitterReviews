import { axiosInstance } from "./axiosInstance";
// const key = process.env.REACT_APP_TWAPI_KEY
// const sec = process.env.REACT_APP_TWAPI_SEC
// const token = process.env.REACT_APP_EX_TWAPI_ACCTOKEN
// const tokenSec = process.env.REACT_APP_EX_TWAPI_ACCTOKEN_SEC

class API {
  //Return content from the DB
  
  Search = async (query, lan) => {
    return await axiosInstance
      .get(`/tweets/search/30day/dev.json?query=${query}`, {
        headers:{
          authorization: "Bearer AAAAAAAAAAAAAAAAAAAAACsx%2BQAAAAAAoJ3g9mYIwaeZMfxBIi12q9XCSDU%3DUp1biGZIlrCoFuaVvrRPaNh2LeYxndVlaUuahwhXkNsCOIwOPt",
        },
        params:{}
      }).then((response) => {
        return response.data;
      }).catch((err) => {
        return err;
      });
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
