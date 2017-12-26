import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{

  @HostBinding('class.open') isDropdownOpened = false;

  @HostListener('click') toogleOpen(){
    this.isDropdownOpened = !this.isDropdownOpened
  }

}