export function calculatePace(distanceKm: number, timeMinutes: number): string {
  if (distanceKm <= 0) return "0:00";
  
  const paceDecimal = timeMinutes / distanceKm;
  const minutes = Math.floor(paceDecimal);
  const seconds = Math.round((paceDecimal - minutes) * 60);
  
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}