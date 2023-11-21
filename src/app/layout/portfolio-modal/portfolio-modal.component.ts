import { ChangeDetectionStrategy, Component, Input  } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent {
  @Input() modalData: any;

  tagColors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-dark'];
  usedIndices: number[] = [];

  constructor() {}





  getRandomColorClass(): string {
    if (this.usedIndices.length === this.tagColors.length) {
      // All colors have been used, reset the list
      this.usedIndices = [];
    }
  
    const availableIndices = this.tagColors
      .map((_, index) => index)
      .filter(index => !this.usedIndices.includes(index));
  
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    this.usedIndices.push(randomIndex);
  
    return this.tagColors[randomIndex];
  }

  isGitHubLink(link: string): boolean{
    return link.includes('https://www.github.com') || link.includes('https://github.com');
  }
  
}
