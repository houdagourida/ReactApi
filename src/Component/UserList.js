import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./List";

const UserList = () => {
    const [test, setTest] = useState([])
    const [tesst, setTesst] = useState()
  useEffect(() => {
    const getUsers = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          setTest(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };getUsers()
  }, []);


  return (
  <div>
  <h1>{test.map(user=>{return <List  user={user} key={user.id}/>})}</h1> 

  </div>
);}

export default UserList;
