export default class Settings {
  constructor() {
    this.allSettings = new Map([
      ['theme', new Set(['dark', 'light', 'grey'])],
      ['music', new Set(['trance', 'pop', 'rock', 'chillout', 'off'])],
      ['difficulty', new Set(['easy', 'normal', 'hard', 'nightmare'])],
    ]);
    this.defaultSetting = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  get() {
    const setting = new Map(this.defaultSetting);
    if (this.userSettings.size) {
      [...this.userSettings.keys()].forEach((keys) => {
        setting.set(keys, this.userSettings.get(keys));
      });
    }
    return setting;
  }

  add(nameSetting, value) {
    if (
      this.allSettings.has(nameSetting)
      && this.allSettings.get(nameSetting).has(value)
    ) {
      this.userSettings.set(nameSetting, value);
    } else {
      throw new Error('Нет таких настроек');
    }
  }
}
