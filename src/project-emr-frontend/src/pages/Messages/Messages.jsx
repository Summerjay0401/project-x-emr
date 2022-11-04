import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

//Firebase Imports
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD5wk2SxXk3EECk2NakoY97DcHIto-jxEU",
  authDomain: "macaroni-penguins.firebaseapp.com",
  projectId: "macaroni-penguins",
  storageBucket: "macaroni-penguins.appspot.com",
  messagingSenderId: "713715198941",
  appId: "1:713715198941:web:10cb08b41851c58fada434",
  measurementId: "G-14R00NW6SE",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

const Messages = () => {
  const [user] = useAuthState(auth);

  function Chat() {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
      db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);
    return (
      <div>
        <SignOut />
        <div className="msgs">
          {messages.map(({ id, text, photoURL, uid }) => (
            <div>
              <div
                key={id}
                className={`msg ${
                  uid === auth.currentUser.uid ? "sent" : "received"
                }`}
              >
                <img src={photoURL} alt="" />
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
        <SendMessage scroll={scroll} />
        <div ref={scroll}></div>
      </div>
    );
  }

  function SignIn() {
    function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            padding: "30px",
            fontSize: "20px",
            borderRadius: "0",
            fontWeight: "600",
          }}
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>
      </div>
    );
  }

  function SignOut() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          width: "100%",
          backgroundColor: "#FAFAFA",
          top: 0,
          borderBottom: "solid 1px lightgray",
          zIndex: "10",
        }}
      >
        <Button
          style={{
            padding: "20px",
            fontSize: "15px",
            borderRadius: "0",
            fontWeight: "600",
          }}
          onClick={() => auth.signOut()}
        >
          Sign Out
        </Button>
      </div>
    );
  }

  function SendMessage({ scroll }) {
    const [msg, setMsg] = useState("");

    async function sendMessage(e) {
      e.preventDefault();
      const { uid, photoURL } = auth.currentUser;

      await db.collection("messages").add({
        text: msg,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMsg("");
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
    return (
      <div>
        <form onSubmit={sendMessage}>
          <div className="sendMsg">
            <TextField
              style={{
                width: "78%",
                fontSize: "15px",
                fontWeight: "550",
                marginLeft: "5px",
                marginBottom: "-3px",
              }}
              placeholder="Message..."
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <Button
              style={{
                width: "18%",
                fontSize: "15px",
                fontWeight: "550",
                margin: "4px 5% -13px 5%",
                maxWidth: "200px",
              }}
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <>{user ? <Chat /> : <SignIn />}</>
    </div>
  );
};

export default Messages;
