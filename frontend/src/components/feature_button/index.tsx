import { Button } from "@/components/ui/button";
import type { Icon } from "@phosphor-icons/react";

export function FeatureButton({ icon: Icon, children }: { icon: Icon; children: string }) {
  return (
      <Button className="h-auto w-fit max-w-full min-w-0 shrink whitespace-normal rounded-3xl bg-[#E7F3EC] px-4 py-2 text-center text-[#1F6B4A] md:whitespace-nowrap md:px-3 md:text-xs lg:px-4 lg:text-base">
        <Icon size={24} aria-hidden="true" className="size-4 lg:size-6" />
        {children}
      </Button>

  )
}