import { CheckCircleIcon, XCircleIcon, QuestionIcon, } from '@phosphor-icons/react'
import { Container, Label, StatusBadge } from './styles'


type AccessibilityValue = 'yes' | 'no' | 'unknown'

interface AccessibilityStatusProps {
  label: string
  status: AccessibilityValue
}

export function AccessibilityStatus({ label, status, }: AccessibilityStatusProps) {

    const statusConfig = {
        yes: {
          text: 'Reported available',
          icon: CheckCircleIcon,
        },
        no: {
          text: 'Reported unavailable',
          icon: XCircleIcon,
        },
        unknown: {
          text: 'Not confirmed',
          icon: QuestionIcon,
        },
      }
      
      const config = statusConfig[status]
      const StatusIcon = config.icon
      return (
        <Container>
          <Label>{label}</Label>
      
          <StatusBadge $status={status}>
            <StatusIcon size={18} aria-hidden="true" />
            {config.text}
          </StatusBadge>
        </Container>
      )
  }