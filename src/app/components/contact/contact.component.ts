import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
@Input() address:string = 'address'
@Input() contactArray:string[] = ['contact info 1', 'contact info 2', 'contact info 3', 'contact info 4']
@Output() firstNameChange = new EventEmitter<string>();
@Output() lastNameChange = new EventEmitter<string>();
@Output() messageChange = new EventEmitter<string>();
@Output() submit = new EventEmitter();
@Output() chat = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeName(event:Event){
    const target = event.target as HTMLInputElement
    this.firstNameChange.emit(target.value)
  }

  changeLastName(event:Event){
    const target = event.target as HTMLInputElement
    this.lastNameChange.emit(target.value)
  }

  changeMessage(event:Event){
    const target = event.target as HTMLInputElement
    this.messageChange.emit(target.value)
  }

  onSubmit(){
    this.submit.emit()
  }
  onChat(){
    this.chat.emit()
  }
}
