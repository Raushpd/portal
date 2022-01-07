import React, { useRef } from 'react'
import { auth } from './firebase';

const Signup = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="signup">

            <form action="">
                <h1>Sign Up</h1>
                <input ref={emailRef} type="email" />
                <input ref={passwordRef} type="password" />
                <button onClick={signIn}>Sign Up </button>

            </form>
        </div>
    )


}
export default Signup