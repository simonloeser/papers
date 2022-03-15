import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'ng-bootstrap-ext';
import { ActivatedRoute } from '@angular/router';
import { BuildEvent } from 'src/app/common/BuildEvent';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user = "";
  public amount = 0;
  public papers: any[] = [];

  constructor(
    private http: HttpClient,
    private toastService: ToastService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['user']) {
        this.user = params['user']
      }
    })

    this.http.get<BuildEvent[]>(environment.baseurl + 'query/events').subscribe(
      answer => this.handleQueryResponse(answer),
    );
  }

  handleQueryResponse(answer: any[]) {
    this.papers = [];
    for (const paper of answer) {
      this.papers.push(paper);
      if (paper.user == this.user) {
        this.amount += 1;
      }
    }
  }
}
