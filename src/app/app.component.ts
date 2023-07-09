import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'oldSkul';

  form: FormGroup = new FormGroup({
    name: new FormGroup(''),
    number: new FormGroup(''),
    className: new FormGroup(''),annualContribution: new FormGroup(''),
  });
  submitted =false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:['',[Validators.required]],
      number:[''],
      className:[ '',[Validators.required] ],
      annualContribution:[0,[Validators.minLength(1)]],
    })
  }

  onSubmit() {
    const form = this.form.value
    console.log(form.name);

    const subject = 'Toba';
    const body = `
      Name: ${form.name}
      Number: ${form.number}
      Class: ${form.className}
      Annual Contribution: ${form.annualContribution}
    `;
    const recipients ='athmanabubaker@yahoo.com, Mnkoja@gmail.com '
    const mailtoUrl = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }
}
