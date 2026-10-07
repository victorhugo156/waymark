import { SearchIcon, InputContainer } from './styles'
import type { Icon } from '@phosphor-icons/react'
import { Input } from '@/components/inputs/input'


interface InputSearchProps {
  id: string
  icon: Icon
  placeholder: string
  type: string
  value: string
  name: string
  autoComplete: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputSearch({ icon: Icon, ...InputProps }: InputSearchProps) {
  return (
    <InputContainer>
      <SearchIcon>
        <Icon size={24} aria-hidden="true" />
      </SearchIcon>
      <Input {...InputProps} />
    </InputContainer>

  )
}