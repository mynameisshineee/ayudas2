import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen">
      <h1 class="text-4xl font-bold text-center py-20 text-[#009447]">
        BIA - Agente inteligente de ayudas públicas
      </h1>
      <p class="text-center text-gray-600 max-w-2xl mx-auto px-4">
        Tu agente de IA especializado en encontrar las mejores ayudas y subvenciones para tu empresa.
      </p>
    </div>
  `,
  styles: []
})
export class HomeComponent {}