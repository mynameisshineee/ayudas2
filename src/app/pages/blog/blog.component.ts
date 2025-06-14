import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto py-16">
      <h1 class="text-4xl font-bold text-center mb-8">Blog</h1>
      <p class="text-center text-gray-600">Próximamente: artículos sobre financiación y ayudas públicas</p>
    </div>
  `,
  styles: []
})
export class BlogComponent {}