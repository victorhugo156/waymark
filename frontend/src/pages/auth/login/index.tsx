import {
  Container,
  Header,
  ContainerTitle,
  ContainerForm,
  Logo,
  Title,
  Text,
  Form,
  Label,
  TitleLogin,
  CreateAccount,
  Errors,
  SpinnerContainer,
} from './styles'
import { Input } from '@/components/inputs/input'
import { Button } from '@/components/ui/button'
import logo from '@/assets/logo_white.webp'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { ApiError } from '@/errors/ApiError'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signin } from '@/services/auth'
import Spinner from '@/components/spinner'


const signinFormSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must have at least 8 characters").max(30, "Password cannot exceed 30 characters"),
})

export type SigninFormSchema = z.infer<typeof signinFormSchema>;

export function Login() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const { register, handleSubmit, setError, formState: { errors } } = useForm<SigninFormSchema>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  async function handleSignin(data: SigninFormSchema) {
    setIsLoading(true)
    try {

      await signin(data)
      navigate('/')

    } catch (error: any) {
      if (error instanceof ApiError && error.status === 409) {
        setError('email', {
          type: 'server',
          message: 'This email is already registered. Try signing in.',
        });
      } else {
        setError('root.server', {
          type: 'server',
          message: 'We could not create your account. Please try again.',
        });
      }
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Waymark" />
        <ContainerTitle>
          <Title>Find the way. Know the access.</Title>
          <Text>Set your needs once. We use them to rank places and flag journey problems.</Text>
        </ContainerTitle>
      </Header>

      <ContainerForm>
        <Form onSubmit={handleSubmit(handleSignin)}>
          <TitleLogin>Login</TitleLogin>
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register('email')} placeholder="Email" type="email" autoComplete="email" />
          {errors.email && <Errors id="email-error" role="alert">
            {errors.email.message}
          </Errors>}

          <Label htmlFor="password">Password</Label>
          <Input id="password" {...register('password')} placeholder="Password" type="password"  autoComplete="current-password" />
          {errors.password && <Errors role="alert">{errors.password.message}</Errors>}

          <Button variant="default">Login</Button>
        </Form>
        <CreateAccount><Link to="/sign-up">New here? Create an account</Link></CreateAccount>
      </ContainerForm>
      {isLoading && <SpinnerContainer><Spinner label="Signin you up..." /></SpinnerContainer>}
    </Container>
  )
}