import { InputField } from './styles'
import type { ComponentPropsWithRef } from 'react';

type InputProps = ComponentPropsWithRef<"input">

export function Input(props: InputProps) {
  return (
    <>
        <InputField {...props}/>
    </>
  )
}