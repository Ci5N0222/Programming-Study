'use client'

import { Session } from "next-auth"
import { signIn, signOut } from "next-auth/react"

export default function LoginBtn({ login } : { login: Session | null}){
    return (
        <>
            {
                login == null ?
                <button onClick={() => signIn()}>Login</button>
                :
                <button onClick={() => signOut()}>Logout</button>

            }
        </>
    )
}