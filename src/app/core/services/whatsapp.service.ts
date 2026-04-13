import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  // Configured WhatsApp number
  private readonly phoneNumber: string = '5531991499415';

  constructor() { }

  /**
   * Opens a WhatsApp chat with the specified default message.
   * @param message Text message to be pre-filled
   */
  public openWhatsApp(message: string = 'Olá! Gostaria de saber mais sobre os benefícios do Presscard.'): void {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }
}
