import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router, route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
  }

  onLogout(){
    this.dataService.setLoggedIn(false);
    this.router.navigate(['/']);

  }

}
