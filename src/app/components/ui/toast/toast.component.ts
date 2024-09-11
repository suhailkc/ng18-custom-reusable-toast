import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  animations: [
    trigger('toastTrigger', [ // This refers to the @trigger we created in the template
      state('open', style({ transform: 'translateY(0%)' })), // This is how the 'open' state is styled
      state('close', style({ transform: 'translateY(-200%)'})), // This is how the 'close' state is styled
      transition('open <=> close', [ // This is how they're expected to transition from one to the other
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ToastComponent implements OnInit {
  toastClass!: string[];
  toastMessage!: string;
  showsToast!: boolean;

  constructor(public toast: ToastService) {} // We inject the toast.service here as 'public'

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.showsToast = true;
    //   setTimeout(() => {
    //     this.showsToast = false;
    //   }, 1000);
    // }, 1000);
  }

  // We'll add this to the dismiss button in the template
  dismiss(): void {
    this.toast.dismissToast();
  }

}
