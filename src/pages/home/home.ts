import { Component, style } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { DatasProvider } from '../../providers/datas/datas';
import { DetailsPage } from '../details/details';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash=true;
  tabsBarElement:any;
  alldata:any;

  constructor(public navCtrl: NavController,public datalink:DatasProvider,public modalCtrl:ModalController) {
    this.tabsBarElement=document.querySelector('.tabbar');

    //console.log(this.datalink.datas);

  }
  ionViewDidLoad(){
    console.log(this.datalink.datas);
      this.tabsBarElement.style.display='none';
    setTimeout(() =>{
    this.splash=false;
    this.tabsBarElement.style.display='flex';
    },3000);
    this.datalink.getData().subscribe(data=>{
      //console.log(data);
      this.alldata=data;

    })


  }
  next(){
    //this.navCtrl.push(DetailsPage,this.alldata);
    let modal=this.modalCtrl.create(DetailsPage,{data:this.alldata});
    modal.onDidDismiss((data)=>{
      console.log(data);
    })
    modal.present();
  }

}
