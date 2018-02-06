import { environment } from './../../../environments/environment';
import { Team } from './../../models/Team';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  isLoading: boolean = false;
  selectedId: number = -1;
  email: string = '';
  teams: Team[] = [];
  value1: number = 5;
  value2: number = 5;
  value3: number = 5;
  error: string = 'test error';
  success: string = 'success';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTeams();
  }

  vote() {
    if (this.email.length === 0) {
      this.error = "Please provide your email address";
    } else if (this.selectedId === -1) {
      this.error = "Please select a team";
    } else {
      this.error = "";
      this.success = '';
      this.http.put(environment.apiUrl + 'vote', { email: this.email, teamID: +this.selectedId, points: 10 }, { responseType: 'text' }).subscribe(data => {
        console.log(data);
        this.success = data;
      }, err => {
        this.error = err.error;
        console.log(err);
      });
    }
  }

  getTeams() {
    this.http.get<Team[]>(environment.apiUrl + 'teams').subscribe(data => {
      console.log(data);
      this.teams = data;
    }, err => {
      console.log(err);
    });
  }
}
