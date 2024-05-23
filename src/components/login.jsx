import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import './login.css'
import { useState } from 'react'


const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Tela de login</h1>
            <div className="input_field">
                <div>
                    <input type="email" 
                    placeholder='Digite seu email' 
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                <input type="password" 
                placeholder='Digite sua senha' 
                onChange={(e) => setPassword(e.target.value)}/>

            </div>
                </div>
                <div className="recall_forget">
                    <label htmlFor="">
                        <input type="checkbox"onChange={(e) => setRemember(e.target.value)}/>
                        Lembrar-me
                    </label>
                    <a href="">Esqueci minha senha</a>
                </div>
                <button type='submit'>Entrar</button>
                <div className="criar_conta">
                    <p>Não tem conta? 
                    <a href=""> Crie uma</a>
                    </p>
                </div>
           
        </form>
    </div>
  )
}

export default login