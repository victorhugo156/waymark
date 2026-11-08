import styled from 'styled-components'

export const Page = styled.main`
  width: 100%;
  min-height: 70vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem 1.5rem 4rem;

  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 768px) {
    padding: 4rem 2rem 5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 2.5rem 6rem;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const IconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.5rem;
  height: 4.5rem;
  margin-bottom: 1.5rem;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.ink};
  border-radius: 1rem;

  @media (min-width: 768px) {
    width: 5.5rem;
    height: 5.5rem;
  }
`

export const Eyebrow = styled.p`
  margin: 0 0 0.75rem;

  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.caps};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`

export const Title = styled.h1`
  margin: 0 0 1rem;

  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.snug};
  line-height: 1.15;
  text-wrap: balance;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    line-height: 1.05;
  }
`

export const Description = styled.p`
  max-width: 38rem;
  margin: 0 0 2rem;

  color: ${({ theme }) => theme.colors.mutedForeground};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`

export const Action = styled.div`
  display: flex;
  justify-content: center;
`
