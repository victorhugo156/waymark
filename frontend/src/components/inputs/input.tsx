import { InputField } from './styles'

interface InputProps {
    id: string;
    placeholder: string;
    type: string;
    value: string;
    name: string;
    autoComplete: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({id, placeholder, type, value, name, autoComplete, onChange }: InputProps) {
  return (
    <>
        <InputField id={id} type={type} value={value} placeholder={placeholder} name={name} autoComplete={autoComplete} onChange={onChange} />
    </>
  )
}