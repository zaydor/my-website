import {AfterViewInit, OnInit, Component, ElementRef} from '@angular/core';
import { HostListener } from '@angular/core';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{
  screenHeight: number;
  screenWidth: number;
  goodFont = '48px';
  colorIndex: number;
  colorGroups = [
    {bg: '#343837', title: '#03719C'},
    {bg: '#C6FCFF', title: '#9900FA'},
    {bg: '#FDC1C5', title: '#107AB0'},
    {bg: '#070D0D', title: '#B30049'},
    {bg: '#7BC8F6', title: '#FEB2D0'},
    {bg: '#475F94', title: '#FDDC5C'},
    {bg: '#8F8CE7', title: '#D8DCD6'},
    {bg: '#3E82FC', title: '#FE2C54'},
    {bg: '#825F87', title: '#2DFE54'},
    {bg: '#FF7052', title: '#fff'},
    {bg: '#5D1451', title: '#04D9FF'}
  ];

  constructor(private elementRef: ElementRef){
    this.onResize();
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.changeSize(this.screenWidth);
    this.colorIndex = this.getRandomInt();
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.colorGroups[this.colorIndex].bg;
    document.getElementById('openTitle').style.fontSize = this.goodFont;
    this.screenWidth = window.innerWidth;
    this.changeSize(this.screenWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    (async () => {
      await delay(1000);
      this.changeSize(this.screenWidth);
    })();
  }

  getRandomInt(): number {
    return Math.floor(Math.random() * (11));
  }

  changeSize(width) { // openTitle initially 48, openMessage initially 40
    if (width < 1420 && width > 1300) {
      // tslint:disable-next-line:max-line-length
      document.getElementById('title1').style.fontSize = '46px'; // todo: to remove redundancy, send to a function changeFontSize(id, Fontsize)
      document.getElementById('title2').style.fontSize = '46px';
      document.getElementById('title3').style.fontSize = '46px';
    } else if (width < 1330 && width > 1230) {
      document.getElementById('title1').style.fontSize = '42px';
      document.getElementById('title2').style.fontSize = '42px';
      document.getElementById('title3').style.fontSize = '42px';
    } else if (width < 1230 && width > 1200) {
      document.getElementById('openTitle').style.fontSize = '46px';
      document.getElementById('openMessage').style.fontSize = '38px';
    } else if (width < 1200 && width > 1120) {
      document.getElementById('openTitle').style.fontSize = '44px';
      document.getElementById('openMessage').style.fontSize = '36px';
      document.getElementById('title1').style.fontSize = '38px';
      document.getElementById('title2').style.fontSize = '38px';
      document.getElementById('title3').style.fontSize = '38px';
    } else if (width < 1120 && width > 1075) {
      document.getElementById('openTitle').style.fontSize = '42px';
      document.getElementById('openMessage').style.fontSize = '34px';
      document.getElementById('title1').style.fontSize = '36px';
      document.getElementById('title2').style.fontSize = '36px';
      document.getElementById('title3').style.fontSize = '36px';
    } else if (width < 1075 && width > 1000) {
      document.getElementById('openTitle').style.fontSize = '40px';
      document.getElementById('openMessage').style.fontSize = '32px';
      document.getElementById('title1').style.fontSize = '34px';
      document.getElementById('title2').style.fontSize = '34px';
      document.getElementById('title3').style.fontSize = '34px';
    } else if (width < 1000 && width > 930) {
      document.getElementById('openTitle').style.fontSize = '38px';
      document.getElementById('openMessage').style.fontSize = '30px';
      document.getElementById('title1').style.fontSize = '32px';
      document.getElementById('title2').style.fontSize = '32px';
      document.getElementById('title3').style.fontSize = '32px';
      document.getElementById('sub1').style.fontSize = '16px';
      document.getElementById('sub2').style.fontSize = '16px';
    } else if (width < 930 && width > 870) {
      document.getElementById('openTitle').style.fontSize = '36px';
      document.getElementById('openMessage').style.fontSize = '28px';
      document.getElementById('title1').style.fontSize = '30px';
      document.getElementById('title2').style.fontSize = '30px';
      document.getElementById('title3').style.fontSize = '30px';
      document.getElementById('sub1').style.fontSize = '14px';
      document.getElementById('sub2').style.fontSize = '14px';
    } else if (width < 870 && width > 820) {
      document.getElementById('openTitle').style.fontSize = '34px';
      document.getElementById('openMessage').style.fontSize = '26px';
      document.getElementById('title1').style.fontSize = '28px';
      document.getElementById('title2').style.fontSize = '28px';
      document.getElementById('title3').style.fontSize = '28px';
      document.getElementById('sub1').style.fontSize = '13px';
      document.getElementById('sub2').style.fontSize = '13px';
    } else if (width < 820 && width > 770) {
      document.getElementById('openTitle').style.fontSize = '32px';
      document.getElementById('openMessage').style.fontSize = '24px';
      document.getElementById('title1').style.fontSize = '26px';
      document.getElementById('title2').style.fontSize = '26px';
      document.getElementById('title3').style.fontSize = '26px';
      document.getElementById('sub1').style.fontSize = '12px';
      document.getElementById('sub2').style.fontSize = '12px';
    } else if (width < 770 && width > 720) {
      document.getElementById('openTitle').style.fontSize = '30px';
      document.getElementById('openMessage').style.fontSize = '22px';
      document.getElementById('title1').style.fontSize = '26px';
      document.getElementById('title2').style.fontSize = '26px';
      document.getElementById('title3').style.fontSize = '26px';
      document.getElementById('sub1').style.fontSize = '12px';
      document.getElementById('sub2').style.fontSize = '12px';
    } else if (width < 720 && width > 670) {
      document.getElementById('openTitle').style.fontSize = '28px';
      document.getElementById('openMessage').style.fontSize = '20px';
      document.getElementById('title1').style.fontSize = '22px';
      document.getElementById('title2').style.fontSize = '22px';
      document.getElementById('title3').style.fontSize = '22px';
      document.getElementById('sub1').style.fontSize = '12px';
      document.getElementById('sub2').style.fontSize = '12px';
    } else if (width < 670 && width > 620) {
      document.getElementById('openTitle').style.fontSize = '26px';
      document.getElementById('openMessage').style.fontSize = '18px';
      document.getElementById('title1').style.fontSize = '22px';
      document.getElementById('title2').style.fontSize = '22px';
      document.getElementById('title3').style.fontSize = '22px';
      document.getElementById('sub1').style.fontSize = '12px';
      document.getElementById('sub2').style.fontSize = '12px';
    } else if (width < 620) {
      document.getElementById('openTitle').style.fontSize = '24px';
      document.getElementById('openMessage').style.fontSize = '16px';
      document.getElementById('title1').style.fontSize = '18px';
      document.getElementById('title2').style.fontSize = '18px';
      document.getElementById('title3').style.fontSize = '18px';
      document.getElementById('sub1').style.fontSize = '10px';
      document.getElementById('sub2').style.fontSize = '10px';
    }

  }

  mobileSize(id) {
    this.goodFont = '24px';
    document.getElementById('openTitle').style.fontSize = this.goodFont;
    document.getElementById('openMessage').style.fontSize = '20px';
  }

  desktopSize(id) {
    this.goodFont = '48px';
    document.getElementById('openTitle').style.fontSize = this.goodFont;
    document.getElementById('openMessage').style.fontSize = '40px';
  }

  scrollToBottom() {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    });
  }

  getTitleColor() {
    return this.colorGroups[this.colorIndex].title;
  }

  getBGColor() {
    return this.colorGroups[this.colorIndex].bg;
  }
}
