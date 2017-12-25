import { Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[betterStyle]'
})
export class BetterStyleDirective implements OnInit{
  
  @Input() defaultColor: string =  'transparent';
  @Input() highlightColor: string = 'yellowgreen';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  
  constructor(private elRef: ElementRef, private renderer: Renderer2){
  }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellowgreen');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    // console.log(event);
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellowgreen');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // console.log(event);
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}