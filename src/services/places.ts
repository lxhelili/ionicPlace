import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class PlacesService {
	private places:{title: string}[] = [];

	constructor(private storage: Storage) {}
	addPlace(place: {title: string}){
		this.places.push(place);
		this.storage.set('places', this.places);
	}

	getPlaces() {
		return this.places = this.storage.get('places')
			.then(
				(places) => {
					this.places = places == null ? [] : places;
					return this.places.slice();
				}
			);
	}
}