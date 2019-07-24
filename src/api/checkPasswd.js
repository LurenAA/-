/*
  passInf = {
        account
        pass,
        token
      }
*/
import url_const from "./config"
import md5 from 'js-md5'
import axios from "axios"
function postPasswd(passInf, sucHandle, errorHandle) {
  return axios.post(url_const.checkPassword, {
    passwd: md5(passInf.pass),
    account: passInf.account
  },{
    headers: {
      "token": passInf.token
    }
  })
  .then(response  => {
    if(sucHandle)
      sucHandle.call(this,response)
    else 
      console.log(response);
  })
  .catch(error =>  {
    if(errorHandle)
      errorHandle.call(this,error)
    else 
      console.log(error);
  });
}

export {postPasswd}