export interface Subject {
  registerObserver: (o: Observer) => void;
  removeObserver: (o: Observer) => void;
  notifyObservers: () => void;
}

export interface Observer {
  update: (temp: number, humidity: number, pressure: number) => void;
}

export interface DisplayElement {
  display: () => void;
}

export class ConcreteSubject implements Subject {
  registerObserver() { }
  removeObserver() { }
  notifyObservers() { }
}

export class ConcreteObserver implements Observer {
  update() { }
}

export class WeatherData implements Subject {

  observers: Observer[] = [];
  temperature: number;
  humidity: number;
  pressure: number;

  registerObserver(o: Observer) {
    this.observers.push(o);
    console.log(this.observers);
  }

  removeObserver(o: Observer) {
    const i = this.observers.indexOf(o);
    this.observers.splice(i, 1);
    console.log(this.observers);
  }

  notifyObservers() {
    for (const o of this.observers) {
      o.update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display() {
    console.log(`${this.temperature} ${this.humidity}`);
  }
}

