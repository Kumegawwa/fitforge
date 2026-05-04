import { calculatePace } from './paceCalculator';

describe('Cálculo de Pace de Corrida', () => {
  test('deve calcular o pace correto para uma maratona (42.195km) em 225 min', () => {
    // 3h45m = 225 min. Pace esperado: ~5:20/km
    const pace = calculatePace(42.195, 225);
    expect(pace).toBe('5:20');
  });

  test('deve retornar 0:00 se a distância for zero', () => {
    expect(calculatePace(0, 30)).toBe('0:00');
  });
});