import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { api } from '../../Api/api';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import * as S from './styled';

export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [ flawed, setFlawed ] = useState<boolean>(false);


  const navigate = useNavigate();
  
  const handleForn = async (e: FormEvent) => {
    e.preventDefault(); 

    try {
      const sendData = await api.post('/login', {
        email: form.email,
        password: form.password
      })
  
      const {token , user } = sendData.data;
  
      console.log("token: " + token);
      console.log("user: " + JSON.stringify(user));
  
      navigate('/home');
    } catch (error) {
      setFlawed(true);
    }
  }

  const handleInputs: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setFlawed(false);
    setForm({
      email: '',
      password: ''
    })
    
    setForm({
      ...form,
      [event.target.name]: event.target.value 
    })
  }

  return (
        <S.WrapperLogin>
        <S.Context>
          <S.Form onSubmit={handleForn}>
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <Input 
              name="email" 
              type="text" 
              placeholder='put your email' 
              id='email' 
              onChange={e => handleInputs(e)}
              value={form.email}
            />
      
            <label htmlFor="password">Password</label>
            <Input 
              name="password" 
              type="password" 
              placeholder='put your password' 
              id='password' 
              onChange={e => handleInputs(e)}
              value={form.password}
            />

            <Button text='Login' type='submit'/>
            {flawed && 
            <span>
              login error 😢
            </span>}
            <Link to="/create">Create account</Link>
          </S.Form>
        </S.Context>
      </S.WrapperLogin>  
  )
}
