import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto py-16">
      <h1 class="text-4xl font-bold text-center mb-8">Artículo del Blog</h1>
      <p class="text-center text-gray-600">Contenido del artículo próximamente</p>
    </div>
  `,
  styles: []
})
export class BlogPostComponent {}