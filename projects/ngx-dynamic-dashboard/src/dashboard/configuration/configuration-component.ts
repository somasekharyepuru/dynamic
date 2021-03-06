/**
 * Created by jayhamilton on 1/24/17.
 */
import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {tabsModel} from './tabs.model';
import {environment} from '../../environments/environment'
import {MatDialogRef} from '@angular/material/dialog';


declare var jQuery: any;

/**
 * Message Modal - clasable modal with message
 *
 * Selector message-modal
 *
 * Methods
 *      popMessageModal - display a message modal for a sepcified duration
 *      showMessageModal - show the message modal
 *      hideMessageModal - hide the message modal
 */
@Component({
    selector: 'dashboard-configuration-modal',
    moduleId: module.id,
    templateUrl: './view.html',
    styleUrls: ['./styles.css'],
    animations: [
        trigger('contentSwitch', [
            state('inactive', style({
                opacity: 0
            })),
            state('active', style({
                opacity: 1
            })),
            transition('inactive => active', animate('750ms ease-in')),
            transition('active => inactive', animate('750ms ease-out'))
        ])
    ]


})
export class ConfigurationComponent {

    @Output() dashboardCreateEvent: EventEmitter<any> = new EventEmitter();
    @Output() dashboardEditEvent: EventEmitter<any> = new EventEmitter();
    @Output() dashboardDeleteEvent: EventEmitter<any> = new EventEmitter();
    @Input() dashboardList: any [];


    newDashboardItem = '';


    modalicon: string;
    modalheader: string;
    modalconfig: string;
    env: any;

    configModal: any;
    currentTab: string;
    tabsModel: any[];

    constructor() {

        Object.assign(this, {tabsModel});
        this.setCurrentTab(0);
        this.env = environment;
    }


    showConfigurationModal(header: string) {
        this.modalheader = header;
        this.configModal.modal('show');
    }

    hideMessageModal() {
        this.modalicon = '';
        this.modalheader = '';
        this.modalconfig = '';
        this.configModal.modal('hide');
    }

    createBoard(name: string) {
        if (name !== '') {
            this.dashboardCreateEvent.emit(name);
            this.newDashboardItem = '';
        }
        console.log('Creating new board event from configuration component: ' + name);
    }

    editBoard(name: string) {
        this.dashboardEditEvent.emit(name);
    }

    deleteBoard(name: string) {
        this.dashboardDeleteEvent.emit(name);
    }




    setCurrentTab(tab_index) {
        this.currentTab = this.tabsModel[tab_index].displayName;
    }
}
