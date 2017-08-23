import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	results;

	findCharacter(name) {
		this.http.get('http://swapi.co/api/people?search=' + name)
		.toPromise()
		.then(response => this.results = response.json().results)
		.then(response => console.log(this.results));
	}

  constructor(
  	public navCtrl: NavController,
  	private http: Http) { }

}
