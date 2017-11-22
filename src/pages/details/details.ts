import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
details:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  //let details=(this.navParams.data);
  this.details=(this.navParams.get('data'));
  }
  close(){
    let data=
      {
        'title':'satej',
        "id":"SSArker"
      }

    this.viewCtrl.dismiss(data);
  }

}
