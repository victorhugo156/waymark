import { Button } from "@/components/ui/button";
import type { Icon } from "@phosphor-icons/react";

export function FeatureButton({ icon: Icon, children }: { icon: Icon; children: string }) {
  return (
      <Button className=" w-fit h-auto rounded-full bg-[#E7F3EC] px-6 py-4 text-[#1F6B4A]">
        <Icon size={24} aria-hidden="true" />
        {children}
      </Button>

  )
}