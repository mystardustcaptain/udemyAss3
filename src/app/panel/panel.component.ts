import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  displayText: string = '';
  historyRecords: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onClickButton() {
    this.displayText = this.generateRandomText();
    this.historyRecords.push((new Date()).toString())
  }

  generateRandomText(maxWordLength: number = 12, maxParagraphLength: number = 100): string {
    var paragraph = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    while (paragraph.length < maxParagraphLength) {
      if (paragraph.length > 0) {
        paragraph += " "
      }

      var nRandomLength = Math.floor(Math.random() * maxWordLength);
      var text = "";

      for (var i = 0; i < nRandomLength; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      paragraph += text;
    }

    return paragraph;
  }

  getHistoryRecordBackgroundColor(index: number) {

    if (index >= 4) {
      return 'blue';
    }
  }
}
