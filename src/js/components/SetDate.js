export default class SetDate {
  constructor(days = -7) {
    this.days = days;
    this.date = new Date();
  }

  _calcDate() {
    return this.date.valueOf() + 24 * 60 * 60 * 1000 * this.days
  }

  _newDate() {
    return new Date(this._calcDate())
  }

  getIso() {
    return this._newDate().toISOString().substr(0, 10);
  }

  getNow() {
    return this.date.toISOString().substr(0, 10);
  }
}