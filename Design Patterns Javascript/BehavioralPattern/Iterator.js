// It presents a way to access the elements of an object without exposing the underlying presentation.

class RadioStation {
  constructor(frequency) {
    this.frequency = frequency;
  }

  getFrequency() {
    return this.frequency;
  }
}

class StationList {
  constructor() {
    this.stations = [];
  }

  addStation(station) {
    this.stations.push(station);
  }

  removeStation(toRemove) {
    const toRemoveFrequency = toRemove.getFrequency();
    this.stations = this.stations.filter((station) => {
      return station.getFrequency() !== toRemoveFrequency;
    });
  }
}

const stationList = new StationList();

stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));
stationList.addStation(new RadioStation(104));

stationList.stations.forEach((station) =>
  console.log(`Current Station : ${station.getFrequency()}`)
);

stationList.removeStation(new RadioStation(89));

console.log(stationList);
