import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Form from '../../components/Form';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .min(8, 'No minimo 8 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      'Confirmação de senha deve ser igual a senha'
    ),
});

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function registerUser(data) {
    console.log(data);
    reset();
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Form onSubmit={handleSubmit(registerUser)}>
      <label htmlFor='name'>Name</label>
      <input id='name' type='text' {...register('name')} />
      <p>{errors.name?.message}</p>

      <label htmlFor='email'>Email</label>
      <input id='email' type='email' {...register('email')} />
      <p>{errors.email?.message}</p>

      <label htmlFor='password'>Senha</label>
      <input id='password' type='password' {...register('password')} />
      <p>{errors.password?.message}</p>

      <label htmlFor='confirm-password'>Confirmar Senha</label>

      <div>
        <input
          id='confirm-password'
          type='password'
          {...register('confirmPassword')}
        />
        icon
      </div>
      <p>{errors.confirmPassword?.message}</p>

      <button type='submit'>Cadastrar</button>
    </Form>
  );
};

export default Home;
