import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { PlacesService } from '../../services/places';

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  // location: any;

  constructor(private placesService: PlacesService, private navCtrl: NavController, private geolocation: Geolocation) {
  }

  onAddPlace(value: {title: string}){
  	 this.placesService.addPlace(value);
     this.navCtrl.pop();
  }
  onLocateUser() {
  	this.geolocation.getCurrentPosition().then((location) => {
	 // this.location = location;
	}).catch((error) => {
	  console.log('Error getting location', error);
	});
  }
}
