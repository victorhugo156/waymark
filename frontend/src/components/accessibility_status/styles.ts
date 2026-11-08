import styled from 'styled-components'

type AccessibilityValue = 'yes' | 'no' | 'unknown'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.foreground};
`

export const StatusBadge = styled.span<{ $status: AccessibilityValue }>`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  padding: 0.25rem 0.625rem;
  border-radius: 0.5rem;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  color: ${({ $status, theme }) =>
        $status === 'yes'
            ? theme.colors.success
            : $status === 'no'
                ? theme.colors.danger
                : theme.colors.foreground};

  background-color: ${({ $status, theme }) =>
        $status === 'yes'
            ? theme.colors.successSoft
            : $status === 'no'
                ? theme.colors.dangerSoft
                : theme.colors.muted};
`