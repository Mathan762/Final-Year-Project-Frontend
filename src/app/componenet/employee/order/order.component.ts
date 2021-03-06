import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  reload(){
    window.location.reload();
  }
  signOut(): void {
    this.router.navigateByUrl('/login');
  }
}
