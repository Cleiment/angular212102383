import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private renderer: Renderer2) {
    this.renderer.removeClass(document.body, 'login-page');
    this.renderer.addClass(document.body, 'sidebar-mini');
    this.renderer.addClass(document.body, 'layout-fixed');
    this.renderer.addClass(document.body, 'layout-navbar-fixed');
    this.renderer.addClass(document.body, 'layout-footer-fixed');
    this.renderer.addClass(document.body, 'sidebar-closed');
    this.renderer.addClass(document.body, 'sidebar-collapse');

    let scriptEl = document.createElement('script');
    scriptEl.src = 'assets/dist/js/pages/dashboard2.js';
    this.renderer.appendChild(document.body, scriptEl);
  }

  ngOnInit(): void {}
}
