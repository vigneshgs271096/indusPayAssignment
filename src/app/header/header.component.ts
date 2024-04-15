import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(public renderer: Renderer2) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = event.target.innerWidth;
    const navItems = document.getElementsByClassName("nav-item");
    const containerElement = document.getElementsByClassName("container-fluid");

    // Iterate over the collection and apply changes to each element
    for (let i = 0; i < navItems.length; i++) {
      const navItem = navItems[i];
      console.log("NavItem:", navItem)
      // Example logic: add or remove a CSS class based on screen width
      if (screenWidth > 992) {
        this.renderer.addClass(navItem, 'px-3');
      } else {
        this.renderer.removeClass(navItem, 'px-3');
      }
    }

    // Example logic: add or remove a CSS class based on screen width
    if (screenWidth > 992) {
      this.renderer.addClass(containerElement, 'ms-5');
      // this.renderer.addClass(containerElement, 'justify-content-start');
    } else {
      this.renderer.removeClass(containerElement, 'ms-5');
      // this.renderer.removeClass(containerElement, 'justify-content-start');
    }
  }

}
