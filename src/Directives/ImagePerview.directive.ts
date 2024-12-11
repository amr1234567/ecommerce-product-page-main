import { Directive, effect, ElementRef, HostListener, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appImagePerview]',
  standalone: true,
})
export class ImagePerviewDirective {
  imageShow = input<boolean>(false, {
    alias: 'appImagePerview'
  })
  private template = inject(TemplateRef);
  private hostElement = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.imageShow())
        this.hostElement.createEmbeddedView(this.template);
      else
        this.hostElement.remove();
    })
  }

}
