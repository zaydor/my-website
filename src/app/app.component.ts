import {AfterViewInit, OnInit, Component, ElementRef} from '@angular/core';
import { HostListener } from '@angular/core';
import {delay} from 'rxjs/operators';
import {ResizeService} from './resize.service';
import { SizeDetectorComponent } from './size-detector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{
  sizeDetector: SizeDetectorComponent;
  screenSize = this.getWindowSize();
  screenWidth: number;
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

  public getWindowSize() {
    return 4;
  }

  constructor(private elementRef: ElementRef, private resizeSvc: ResizeService){
    // subscribing to the size change stream
    this.resizeSvc.onResize$.subscribe(x => {
      this.screenSize = x;
    });
  }

  ngOnInit() {
    this.colorIndex = this.getRandomInt();
    if (window.innerWidth >= 1200) {
      this.screenSize = 4;
    } else if (window.innerWidth < 1200 && window.innerWidth >= 991) {
      this.screenSize = 3;
    } else if (window.innerWidth < 991 && window.innerWidth >= 767) {
      this.screenSize = 2;
    } else if (window.innerWidth < 767 && window.innerWidth >= 575) {
      this.screenSize = 1;
    } else {
      this.screenSize = 0;
    }
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.colorGroups[this.colorIndex].bg;
  }

  getRandomInt(): number {
    return Math.floor(Math.random() * (11));
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

  getRowHeight() {
    if (this.screenSize <= 1) {
      return '1:1';
    }
    return '2:1';
  }

  getGutterSize() {
    return (this.screenSize * 10) + 10;
  }
}
