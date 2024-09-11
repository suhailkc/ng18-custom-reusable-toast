import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const TOAST_STATE = {
  success: 'success-toast',
  warning: 'warning-toast',
  danger: 'danger-toast'
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  // The boolean that drives the toast's 'open' vs 'close' behavior
  // for preview the toast change the value from false to true
  public showsToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // $ suffix is used to indicate that the variable is an Observable.

  // The message string that'll bind display on the toast
  public toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>('Default Toast Message');

  // The state that will add a style class to the component
  public toastState$: BehaviorSubject<string> = new BehaviorSubject<string>(TOAST_STATE.success);

  constructor() { }

  showToast(toastState: string, toastMsg: string): void {
    // Observables use '.next()' to indicate what they want done with observable
    // This will update the toastState to the toastState passed into the function
    this.toastState$.next(toastState);

    // This will update the toastMessage to the toastMessage passed into the function
    this.toastMessage$.next(toastMsg);

    // This will update the showsToast trigger to 'true'
    this.showsToast$.next(true);
  }

  dismissToast(): void {
    this.showsToast$.next(false);
  }

}
