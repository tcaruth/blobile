import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DiamondComponentModule } from '../diamond/diamond.module';
import { GameDetailPageRoutingModule } from './game-detail-routing.module';
import { GameDetailPage } from './game-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiamondComponentModule,
    GameDetailPageRoutingModule,
  ],
  declarations: [GameDetailPage]
})
export class GameDetailPageModule {}
