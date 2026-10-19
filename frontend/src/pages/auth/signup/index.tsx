import {
  Container,
  Header,
  ContainerTitle,
  ContainerForm,
  Logo,
  Title,
  Text,
  Form,
  Field,
  Label,
  TitleLogin,
  CreateAccount,
  ContainerToggleGroupAccessibility,
  Errors
} from './styles'
import { Input } from '@/components/inputs/input'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import logo from '@/assets/logo_white.webp'
import { Link } from 'react-router-dom'
import { z } from "zod"
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { signup } from '@/services/auth'


const signupFormSchema = z.object({
  username: z.string().min(3, "Username must have at least 3 characters").max(30, "Username must have at most 30 characters"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must have at least 8 characters").max(30, "Password cannot exceed 30 characters"),
  accessibilityPreferences: z.array(
    z.enum([
      'wheelchair_transport',
      'avoid_stairs',
      'hearing_information',
      'quiet_environment',
    ])
  )
})

export type SignUpFormSchema = z.infer<typeof signupFormSchema>;


export function Signup() {

  const { register, handleSubmit, control, formState: { errors } } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      accessibilityPreferences: [],
    }
  })


  async function handleSignup(data: SignUpFormSchema) {

    try{
      const result = await signup(data)

      console.log(result);

    }catch(error){
      console.error('Signup failed:', error)
    }
  }

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
        <Form onSubmit={handleSubmit(handleSignup, (errors) => console.log('Validation errors:', errors))}>
          <TitleLogin>Create account</TitleLogin>

          <Field>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register('username', { required: "Campo Senha é obrigatória" })} placeholder="User Name" type="text" autoComplete="name" />
            {errors.username && <Errors>{errors.username.message}</Errors>}
          </Field>

          <Field>
            <Label htmlFor="email">Email</Label>
            <Input id="email" {...register('email')} placeholder="Email" type="email" autoComplete="email" />
            {errors.email && <Errors>{errors.email.message}</Errors>}
          </Field>

          <Field>
            <Label htmlFor="password">Password</Label>
            <Input id="password" {...register('password')} placeholder="Password" type="password" autoComplete="new-password" />
            {errors.password && <Errors>{errors.password.message}</Errors>}
          </Field>

          <p id="access-preferences">Choose accessibility preferences — optional. You can skip this and update later.</p>
          <ContainerToggleGroupAccessibility>
            <Controller
              name="accessibilityPreferences"
              control={control}
              render={({ field }) => (
                <ToggleGroup
                  type="multiple"
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <ToggleGroupItem value="wheelchair_transport">
                    Wheelchair-accessible transport
                  </ToggleGroupItem>

                  <ToggleGroupItem value="avoid_stairs">
                    Avoid stairs
                  </ToggleGroupItem>
                  <ToggleGroupItem value="hearing_information">
                    Hearing information
                  </ToggleGroupItem>
                  <ToggleGroupItem value="quiet_environment">
                    Quiet environment
                  </ToggleGroupItem>
                </ToggleGroup>
              )}
            />
          </ContainerToggleGroupAccessibility>

          <Button type='submit' variant="default">Create account</Button>
        </Form>
        <CreateAccount><Link to="/sign-in">Have an account? Login into my account</Link></CreateAccount>
      </ContainerForm>
    </Container>
  )
}