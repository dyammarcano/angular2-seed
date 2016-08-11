import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Github } from '../../shared/services/github.service';

@Component({
  selector: 'repo-browser',
  pipes: [],
  providers: [Github],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './repo-browser.html',
  styleUrls: ['./repo-browser.css']
})
export class RepoBrowser implements OnInit, OnDestroy {

  constructor(private router: Router, private github: Github) {}

  ngOnInit():any {
    console.info('Init Github Component');
  }

  ngOnDestroy():any {
    console.info('Destroy Github Component');
  }

  searchForOrg(orgName: string) {
    this.github.getOrg(orgName).subscribe(({name}) => {
      console.log(name);
      this.router.navigate(['/github', orgName]);
    });
  }
}
