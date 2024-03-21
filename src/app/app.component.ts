import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password:string = '';
  length = 0;

  onChangeLetters (){
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers (){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols (){
    this.includeSymbols = !this.includeSymbols;
  }

  
  onChangeLength(value:string){
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }
  onButtonClick(){
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '~!@#$%^&*()';

    let validChar = '';
    if (this.includeLetters){
      validChar += letters ;
    }

    if (this.includeNumbers){
      validChar += numbers ;
    }

    if (this.includeSymbols){
      validChar += symbols ;
    }

    let generatedPassword = '';
    for (let i=0; i < this.length;i ++){
      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];

    }

    this.password = generatedPassword;
  }
  
}
