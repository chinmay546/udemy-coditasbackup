const data = {
  locations: [],
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim();
    this.locations.push(value.trim());
  },
};

data.location = "   Satara   ";
data.location = "  pune ";
console.log(data);
