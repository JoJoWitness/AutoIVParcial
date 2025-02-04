import {useEffect, useState} from "react";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

import { app } from '../../layouts/LayoutLog.astro';

import logo from '../../assets/BakeryLogo.svg';

import type { User } from 'firebase/auth';

export default function Auth(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    const [error, setError] = useState<string | null>(null);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    

    
    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Usuario autenticado: ', user);
            window.location.href = '/';
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEmailSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = '/';
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return(
        
        <div className="container max-w-sm mx-auto py-6 px-6 bg-white rounded-[35px] shadow-lg flex flex-col items-center justify-center  gap-4">

        <img src={logo.src} alt="Logo" className="mb-[30px]" style={{ height: '230px' }} />

        {/* inicio de sesion con correo */}
        <form onSubmit={handleEmailSignIn} className="space-y-4 w-full flex flex-col items-center">
            <div>
                <input
                    type="email"
                    placeholder="user@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-[225px] p-2 text-center border-2 border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-[225px] p-2 text-center border-2 border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-brown"
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className="rounded-[30px] border border-secondary font-bold text-secondary w-[225px] border-3 p-2 hover:border-tertiary hover:bg-tertiary hover:text-background cursor-pointer active:scale-98 mt-[30px]"
            >
                Iniciar sesión
            </button> 
        </form>
        
        <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="rounded-[30px] border border-secondary font-bold text-secondary w-[225px] border-3 p-2 hover:border-tertiary hover:bg-tertiary hover:text-background cursor-pointer active:scale-98"
        >
            Iniciar con Google
        </button>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
        
    )
}

