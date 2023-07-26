import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   showContent: boolean = true;
   days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  ngOnInit() {
       setTimeout(() => {
      this.showContent = false;
    }, 1500);
  
    
    const countdownDate = new Date('2023/07/30').getTime();

    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // Calculations for days, hours, minutes, and seconds
      this.days = ('0' + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
      this.hours = ('0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
      this.minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
      this.seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);

      // Check if the countdown is finished
      if (distance < 0) {
        clearInterval(countdownTimer);
        // Perform any desired actions when the countdown finishes
      }
    }, 1000);
  }
  
}