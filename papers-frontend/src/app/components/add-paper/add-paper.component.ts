import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ToastService } from 'ng-bootstrap-ext';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-paper',
  templateUrl: './add-paper.component.html',
  styleUrls: ['./add-paper.component.scss']
})
export class AddPaperComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
  ) { }

  debugName = ''
  debugDate = ''
  debugUser = ''

  ngOnInit(): void {
    this.formGroup.get('id')?.setValue(uuidv4())
    this.toastService.add({
      title: 'Are you Hendrik though?',
      body: 'This application is only designed for Lord Ruben at the moment',
      class: 'bg-primary text-white',
      delay: 5000,
    });
  }

  formGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    paper: new FormControl('', [Validators.required]),
    reading: new FormControl('', [Validators.required]),
    user: new FormControl('', [Validators.required]),
  })

  addPaper() {
    const newPaper = {
      id: this.formGroup.get('id')?.value,
      name: this.formGroup.get('paper')?.value,
      date: this.formGroup.get('reading')?.value,
      user: this.formGroup.get('user')?.value,
    }

    const newCmd = {
      opCode: 'storePaper',
      parameters: newPaper,
    }

    this.toastService.success('Store Paper', 'Paper has been stored');
    this.router.navigate(['home', this.formGroup.get('user')?.value]);

    /*this.http.post<any>('http://localhost:3000/cmd/', newCmd).subscribe(
      () => {
        this.toastService.success('Store Paper', 'Paper has been stored');
        this.router.navigate(['home', this.formGroup.get('user')?.value]);
      },
      (error) => {
        this.toastService.error('Store paper', `problem: ${JSON.stringify(error, null, 3)}`);
      }
    )*/
  }
}
