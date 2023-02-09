import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {

  private themes = [
    "theme-default",
    "theme-light-green",
    "theme-orange",
  ];

  private currentIndex = 0;

  @Output() currentTheme = new EventEmitter();

  switchTheme() {
    if(++this.currentIndex === this.themes.length) {
      this.currentIndex = 0;
    }
    this.currentTheme.emit(this.themes[this.currentIndex]);
  }
}
