import { Component, OnInit,  VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  public sampleFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.sampleFormGroup = this.formBuilder.group({
      taskNumber: ['', [Validators.required]],
      wo: [{value: '', disabled: true}],
      wc: [{value: '', disabled: true}]

    })
  }


}
