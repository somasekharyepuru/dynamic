import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GadgetHeaderComponent} from './gadget-header-component';
import {GadgetOperationComponent} from './gadget-operation-control-component';
import {HelpModalComponent} from './help-modal-component';
import {VisDrillDownComponent} from './vis-drill-down-component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatProgressBarModule,
        MatDialogModule,
    ],
    declarations: [
        GadgetHeaderComponent,
        GadgetOperationComponent,
        HelpModalComponent,
        VisDrillDownComponent
    ],
    exports: [
        GadgetHeaderComponent,
        GadgetOperationComponent,
        HelpModalComponent,
        VisDrillDownComponent
    ]
})
export class GadgetSharedModule {
}