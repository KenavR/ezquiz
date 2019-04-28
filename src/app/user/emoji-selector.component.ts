import { Component, Input, Output, EventEmitter } from '@angular/core';
import emojis from '../../data/emojis';

@Component({
  selector: 'ezq-emoji-selector',
  template: `
    <div class="emoji-preview" (click)="setEmojiListVisibility(true)">
      <div>{{ emoji }}</div>

      <span>⚙️</span>
    </div>
    <ezq-modal *ngIf="isModalVisible">
      <div class="emoji-list">
        <h3>Choose an Emoji</h3>
        <ul>
          <li *ngFor="let emoji of emojis" (click)="selectEmoji(emoji)">
            {{ emoji }}
          </li>
        </ul>
        <span class="cancel" (click)="setEmojiListVisibility(false)"
          >Cancel</span
        >
      </div>
    </ezq-modal>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .emoji-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        height: 10rem;
        width: 10rem;
        background-color: #529570;
        position: relative;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      }

      .emoji-preview div {
        font-size: 5rem;
      }

      .emoji-preview span {
        position: absolute;
        bottom: 0.1rem;
        font-size: 1.5rem;
      }

      .emoji-list {
        display: flex;
        flex-direction: column;

        justify-content: center;
      }

      .emoji-list h3 {
        text-align: center;
        margin-top: 0;
      }

      .emoji-list ul {
        width: inherit;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      .emoji-list li {
        font-size: 1.5rem;
        padding: 0.5rem;
      }

      .emoji-list li:hover {
        cursor: pointer;
      }

      .cancel {
        text-align: center;
        font-size: 1.2rem;
        margin-top: 1rem;
      }
    `
  ]
})
export class EmojiSelectorComponent {
  @Input() emoji: string;
  @Output() emojiChanged = new EventEmitter<string>();

  emojis: string[];
  isModalVisible = false;

  constructor() {
    this.emojis = emojis;
  }

  setEmojiListVisibility(isVisible: boolean) {
    this.isModalVisible = isVisible;
  }

  selectEmoji(emoji: string) {
    this.emojiChanged.emit(emoji);
    this.isModalVisible = false;
  }
}
