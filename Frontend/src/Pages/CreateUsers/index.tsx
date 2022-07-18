import axios, { AxiosError, AxiosPromise, AxiosRequestHeaders, AxiosResponseHeaders } from 'axios';
import React, { useState, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../Api/api';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { validEmail, validPassword } from '../../utils/regex';
import * as S from './styled';


export const Createusers = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  

  const validate = () => {
    if(!validEmail.test(form.email)) {
      setEmail(true);
    }

    if(!validPassword(form.password, form.confirmPassword)) {
      setPassword(true);
    }
  }

  const handleForn = async (event: FormEvent) => {
      event.preventDefault();
       
      const { firstName, lastName, email, password} = form;
      
          try {
            const user = await api.post('/users', {
              firstName,
              lastName,
              email,
              password
            })
            const data = await user.data;
            console.log(data);
            navigate('/login');
          } catch (error: any) {
            console.log(error.request.response);
          }

        setForm({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        })

   }

   const handleInputs: React.ChangeEventHandler<HTMLInputElement> = (event) => {
     event.preventDefault();
      setEmail(false);
      setPassword(false);

      setForm({
        ...form,
        [event.target.name]: event.target.value 
      })
   }

  return (
    <S.Wrapper>
      <S.ContainerForm onSubmit={handleForn}>
          <label htmlFor="firstName">FirstName</label>
          <Input
            id='firstName'
            name='firstName'
            type='text'
            value={form.firstName}
            onChange= { e => handleInputs(e) }
            
          />

          <label htmlFor="lastName">LastName</label>
          <Input
            id='lastName'
            name='lastName'
            type='text'
            value={form.lastName}
            onChange= { e => handleInputs(e) }
          />

          <label htmlFor="email">email</label>
          <Input
            id='email'
            name='email'
            type='text'
            value={form.email}
            onChange={e => handleInputs(e)}
          />
          
          <label htmlFor="password">Password</label>
          <Input
            id='password'
            name='password'
            type='password'
            value={form.password}
            onChange={e => handleInputs(e)}
          />
          
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Input
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            value={form.confirmPassword}
            onChange={e => handleInputs(e)}
          />
          
          {email && (<span style={{color: 'red', marginTop:'2px', display: 'block'}}>Email Invalid!</span>)}
          {password && (<span style={{color: 'red', marginTop:'2px', display: 'block'}}>Password Invalid!</span>)}
          
          <Button text='Create User' type='submit' onClick={validate}/>
      </S.ContainerForm>
    </S.Wrapper>
  )
}
