

export function calculateDurationMinutes(departure: string | undefined, arrival: string | undefined): number | null{
    
    if (!departure || !arrival) {
        return null
      }
    const departureTime = new Date(departure).getTime()
    const arrivalTime = new Date(arrival).getTime()

    if (Number.isNaN(departureTime) || Number.isNaN(arrivalTime)) {
        return null
      }
    
      if (arrivalTime < departureTime) {
        return null
      }

    const duration = Math.floor((arrivalTime - departureTime) / 60000)

    return duration

}