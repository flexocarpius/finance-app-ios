import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedTabsComponent } from './animated-tabs.component';
import { IonicModule } from '@ionic/angular';
import { AnimatedTabComponent } from './animated-tab/animated-tab.component';

@NgModule({
    declarations: [AnimatedTabsComponent, AnimatedTabComponent],
    imports: [ CommonModule, IonicModule.forRoot() ],
    exports: [AnimatedTabsComponent, AnimatedTabComponent],
    providers: [],
})
export class AnimatedTabsModule {}