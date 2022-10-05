import { useState } from 'react';
import Form from '../../components/Form';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function registerUser(event) {
    event.preventDefault();

    console.log(name, email);
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Form onSubmit={registerUser}>
      <label htmlFor='name'>Name</label>
      <input id='name' type='text' onChange={(e) => setName(e.target.value)} />

      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='text'
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type='submit'>Cadastrar</button>
    </Form>
  );
};

export default Home;
