import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'ng-bootstrap-ext';
import { ActivatedRoute } from '@angular/router';
import { Paper } from 'src/app/Paper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user = "";
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

    /*this.http.get<Paper[]>('http://localhost:3100/query/products').subscribe(
      answer => this.handleQueryResponse(answer),
    );*/
  }

  handleQueryResponse(answer: any[]) {
    this.papers = [];
    for (const paper of answer) {
      this.papers.push(paper);
    }
  }
}
