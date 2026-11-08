import { Link } from 'react-router-dom'
import type { Icon } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import {
  Action,
  Content,
  Description,
  Eyebrow,
  IconBadge,
  Page,
  Title,
} from './styles'

interface ComingSoonProps {
  icon: Icon
  featureLabel: string
  title: string
  description: string
  eyebrow?: string
}

export function ComingSoon({
  icon: FeatureIcon,
  featureLabel,
  title,
  description,
  eyebrow = 'Coming in MVP 2',
}: ComingSoonProps) {
  return (
    <Page>
      <Content>
        <IconBadge role="img" aria-label={featureLabel}>
          <FeatureIcon size={40} weight="regular" aria-hidden="true" />
        </IconBadge>

        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <Action>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </Action>
      </Content>
    </Page>
  )
}
