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
} from './styles'
import { Input } from '@/components/inputs/input'
import { Button } from '@/components/ui/button'
import logo from '@/assets/logo_white.webp'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Login() {

  const [value, setValue] = useState({
    email: "",
    password: ""
  })
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
        <Form>
          <TitleLogin>Login</TitleLogin>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="Email" type="email" value={value.email} autoComplete="email" onChange={(event) => setValue({ ...value, email: event.target.value })} />

          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" placeholder="Password" type="password" value={value.password} autoComplete="current-password" onChange={(event) => setValue({ ...value, password: event.target.value })} />
          <Button variant="default">Login</Button>
        </Form>
        <CreateAccount><Link to="/sign-up">New here? Create an account</Link></CreateAccount>
      </ContainerForm>
    </Container>
  )
}