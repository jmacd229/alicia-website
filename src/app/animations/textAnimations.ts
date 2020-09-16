import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('100ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('100ms', style({ opacity: 0 }))
  ])
]);

export const growIn = trigger('growIn', [
  transition(':enter', [
    style({ width: 0, overflow: 'hidden' }),
    animate('250ms', style({ width: '100px' })),
  ]),
  // transition(':leave', [
  //   animate('100ms', style({ opacity: 0 }))
  // ])
]);

export const allAnimations = [fadeInOut, growIn];
