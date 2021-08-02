interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMaps {
  private googleMap: google.maps.Map;

  constructor(divID: string, zoom: number, lat: number, lng: number) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      zoom: zoom,
      center: {
        lat: lat,
        lng: lng,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    const infoMarker = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });

    marker.addListener('click', () => {
      infoMarker.open(this.googleMap, marker);
    });
  }
}
