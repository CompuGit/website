import { Component, Input } from '@angular/core';
import {
  Highlight,
  HighlightAuto,
} from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import 'highlight.js/styles/androidstudio.min.css';
import 'zone.js';

@Component({
  selector: 'app-code-highlight',
  standalone: true,
  imports: [Highlight, HighlightAuto, HighlightLineNumbers],
  templateUrl: './code-highlight.component.html',
  styleUrl: './code-highlight.component.css'
})

export class CodeHighlightComponent{
  _codeForHighlightAuto: any;
  @Input() lang: string = 'plain';
  @Input()
  set codeForHighlightAuto( data ) {
    if (this.lang === 'plain') {
      this._codeForHighlightAuto = this.escapeHtml(data);
    } else {
      this._codeForHighlightAuto = JSON.stringify(data, null, 2);
    }
  };
  get codeForHighlightAuto(){
    return this._codeForHighlightAuto;
  };

  escapeHtml(text: string) {
    return text;
  }
  

  copyCode(codeBlock: HTMLElement) {
    const textarea = document.createElement('textarea');
    textarea.value = codeBlock.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    // alert('Code copied to clipboard!');
  }

}
