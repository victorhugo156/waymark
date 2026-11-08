export function getInitials(username: string): string {
    const name = username.trim().split(/\s+/)

    const firstInitial = name[0]?.[0] ?? ''
    const secondInitial = name[1]?.[0] ?? ''

    const initials = (firstInitial + secondInitial).toUpperCase()

    return initials

  }