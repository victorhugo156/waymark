import { Button } from "@/components/ui/button";
import { CheckIcon  } from "@phosphor-icons/react";
import {Text} from './styles'

export function VerifiedButton({ children }: { children: string }) {
  return (
      <Button className=" w-fit h-auto rounded-full bg-[#121212] px-8 py-2 text-[#F5C400 ]">
        <CheckIcon size={24} aria-hidden="true" color="#F5C400" />
        <Text>{children}</Text>
      </Button>

  )
}