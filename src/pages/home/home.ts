import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HomeModel } from '../../model/Home-model';
import { ShowmePage } from '../showme/showme';
import { WholookmePage } from '../wholookme/wholookme'
import { GoodsinfoPage } from '../goodsinfo/goodsinfo';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider:Slides;
  @ViewChild('progress') progress:ElementRef;
  mySlideOptions={
    autoplay:0,
    initialSlide:0,
    pager:false,
    loop:true,
    speed:300
  };
  public List:Array<{title:string}>;
  constructor(public navCtrl: NavController,public homemodel: HomeModel) {
    this.List = [
    ]
  }
  ionViewDidLoad(){
      // this.homemodel.getAllList(456,(res)=>{
      //     console.log(res);
      //     // this.List = res.list;
      // })
  }

  goToPage(ev, page){
    ev.stopPropagation();
    switch (page){
      case 'showme':
        this.navCtrl.push(ShowmePage, {id:1});
      break;
      case 'wholookme':
        this.navCtrl.push(WholookmePage, {id:1});
      break;
      case 'goodsinfo':
        this.navCtrl.push(GoodsinfoPage)
    }
  }

  isac(){
    console.log(11111)
  }
  ngOnInit(){//页面加载完成后自己调用
    this.progress.nativeElement.style.width = '60%';
  }

}
