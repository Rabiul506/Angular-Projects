import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  standalone: true,
  imports: [],
  templateUrl: './tab-container.component.html',
  styleUrl: './tab-container.component.scss'
})
export class TabContainerComponent {
  @Input()
  headerTemplate!: TemplateRef<any>;
}
