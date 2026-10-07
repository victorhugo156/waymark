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
  ContainerToggleGroupAccessibility,
} from './styles'
import { Input } from '@/components/inputs/input'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import logo from '@/assets/logo_white.webp'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Signup() {

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: ""
  })
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Waymark" />

        <ContainerTitle>
          <Title>Join the people who keep access honest.</Title>
          <Text>Set your needs once. We use them to rank places and flag journey problems.</Text>
        </ContainerTitle>
      </Header>

      <ContainerForm>
        <Form>
          <TitleLogin>Create account</TitleLogin>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="User Name" type="text" value={value.name} autoComplete="name" onChange={(event) => setValue({ ...value, name: event.target.value })} />
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="Email" type="email" value={value.email} autoComplete="email" onChange={(event) => setValue({ ...value, email: event.target.value })} />
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" placeholder="Password" type="password" value={value.password} autoComplete="new-password" onChange={(event) => setValue({ ...value, password: event.target.value })} />
          <p id="access-preferences">Choose accessibility preferences — optional. You can skip this and update later.</p>
          <ContainerToggleGroupAccessibility>
            <ToggleGroup variant="outline" type="multiple" aria-labelledby="access-preferences" >
              <ToggleGroupItem value="transport">Wheelchair-accessible transport</ToggleGroupItem>
              <ToggleGroupItem value="stairs">Avoid stairs</ToggleGroupItem>
              <ToggleGroupItem value="hearing">Hearing information</ToggleGroupItem>
              <ToggleGroupItem value="quiet">Quiet environments</ToggleGroupItem>
            </ToggleGroup>
          </ContainerToggleGroupAccessibility>

          <Button variant="default">Create account</Button>
        </Form>
        <CreateAccount><Link to="/sign-in">Have an account? Login into my account</Link></CreateAccount>
      </ContainerForm>
    </Container>
  )
}