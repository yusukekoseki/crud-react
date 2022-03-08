import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLogin } from '../AuthUserContext'
import { Navigate,Link } from 'react-router-dom';
import {auth} from '../utils/firebaseConfig';
import { signInWithEmailAndPassword,onAuthStateChanged
} from "firebase/auth";
const LoginPage = () => {
  const [loginEmail,setLoginEmail] = useState("")
  const [loginPassword,setLoginPassword] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch(error){
      alert("メールアドレスまたはパスワードが間違っています");
    }
  };
  const [user,setUser]=useState();

  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    });
  });

  return (
    <>
      {user ? (
        <Navigate to={`/`} />
      ):(
      <div>
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>メールアドレス</label>
            <input name="email" type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
          </div>
          <div>
            <label>パスワード</label>
            <input name="password" type="password" placeholder="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
          </div>
          <div>
            <button>ログイン</button>
          </div>
          <div>
            ユーザ登録は<Link to={'/signup'}>こちら</Link>から
          </div>
        </form>
      </div>
      )}
    </>
  );
};

export default LoginPage