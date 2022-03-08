import React, {useState,useEffect} from 'react';
import {auth} from '../utils/firebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Navigate, Link } from "react-router-dom";
const SignUpPage = () => {
  const [registerEmail,setRegisterEmail] = useState("")
  const [registerPassword,setRegisterPassword] = useState("")

  const handleSubmit = async(e) =>{
    e.preventDefault();

    try{
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch(error){
      alert("正しく入力してください");
    }
  };

  const [user,setUser] = useState("")

  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    });
  },[]);

  return (
    <div>
      {user ? (
        <Navigate to={`/`} />
      ):(
        <>
          <h1>ユーザ登録</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                value={registerEmail}
                onChange={(e)=>setRegisterEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                type="password"
                value={registerPassword}
                onChange={(e)=>setRegisterPassword(e.target.value)}
              />
            </div>
            <div>
              <button>登録</button>
              <p>ログインは<Link to={`/login/`}>こちら</Link></p>
            </div>
          </form>
        </>
      )}
    </div>
  )
};

export default SignUpPage;