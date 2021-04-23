import { Injectable } from '@angular/core';
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';
const { StatusBar } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StatusBarService {

  constructor() { }

  setLightStatusBar() {
    StatusBar.setStyle({
      style: StatusBarStyle.Light
    });
  }

  setDarkStatusBar() {
    StatusBar.setStyle({
      style: StatusBarStyle.Dark
    });
  }
}
