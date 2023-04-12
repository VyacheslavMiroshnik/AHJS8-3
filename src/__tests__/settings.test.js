import Settings from '../js/Settings';

test('test return default', () => {
  const defSetting = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  const userSetting = new Settings();
  expect(userSetting.get()).toEqual(defSetting);
});
test('test return setting with user choice', () => {
  const expectedSetting = new Map([
    ['theme', 'light'],
    ['music', 'pop'],
    ['difficulty', 'easy'],
  ]);
  const userSetting = new Settings();
  userSetting.add('theme', 'light');
  userSetting.add('music', 'pop');

  expect(userSetting.get()).toEqual(expectedSetting);
});
test('test return error incorrect value on setting', () => {
  const userSetting = new Settings();
  expect(() => userSetting.add('theme', 'li')).toThrow();
});
test('test return error incorrect parametr in setting', () => {
  const userSetting = new Settings();
  expect(() => userSetting.add('the', 'light')).toThrow();
});
