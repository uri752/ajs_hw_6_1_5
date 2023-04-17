/* import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});
*/

import sortByOrder from '../app';

test('should sort', () => {
  // дан объект
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  // дан порядок сортировки
  const sort = ['name', 'level'];
  // После обработки вашей функцией:
  const resultExpected = [
    { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
    { key: 'level', value: 2 }, // порядок взят из массива с ключами
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ];

  const result = sortByOrder(obj, sort);
  // expect(result).toBe(resultExpect);
  expect(result).toStrictEqual(resultExpected);
});
