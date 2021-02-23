import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as PresentationComponents from './presentation-components';

@NgModule({
  imports: [CommonModule],
  declarations: [PresentationComponents.COMPONENTS],
})
export class UiModule {}
