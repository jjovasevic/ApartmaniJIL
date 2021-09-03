import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'site';
  
  onActivate(event) {
    // window.scroll(0,0);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
}

  ngOnInit(): void {
  }
}
