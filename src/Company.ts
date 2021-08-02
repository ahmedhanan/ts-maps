import faker from 'faker';
export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `${this.companyName} is located at ${this.location.lat}, ${this.location.lng}. 
    It's catch phrase is <strong><em>${this.catchPhrase}</em></strong>.`;
  }
}
