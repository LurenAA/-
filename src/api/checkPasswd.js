/*
  passInf = {
        account
        pass
      }
*/
import url_const from "./config"
import md5 from 'js-md5'
import axios from "axios"
function postPasswd(passInf, sucHandle, errorHandle, failHandle) {
  return axios.post(url_const.checkPassword, {
    headers: {
      "contentType": "application/json"
    },
    data: {
      pass: md5(passInf.pass),
      account: passInf.account
    }
  })
  .then(response  => {
    if(sucHandle)
      sucHandle(response)
    else 
      console.log(response);
  })
  .catch(error =>  {
    if(errorHandle)
      errorHandle(error)
    else 
      console.log(error);
  });
}

export {postPasswd}