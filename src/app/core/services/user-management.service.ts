import { Injectable } from '@angular/core';
import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private secondaryApp: FirebaseApp | null = null;
  private secondaryAuth: Auth | null = null;

  constructor() {}

  /**
   * Inicializa uma instância secundária do Firebase sob demanda.
   * Isso previne que a aplicação principal deslogue o Admin atual quando criarmos um novo usuário.
   */
  private initSecondaryApp(): Auth {
    if (this.secondaryAuth) return this.secondaryAuth;

    const apps = getApps();
    const existingSecondary = apps.find(a => a.name === 'SecondaryAuthApp');

    if (existingSecondary) {
      this.secondaryApp = existingSecondary;
    } else {
      this.secondaryApp = initializeApp(environment.firebase, 'SecondaryAuthApp');
    }
    
    this.secondaryAuth = getAuth(this.secondaryApp);
    return this.secondaryAuth;
  }

  /**
   * Cria um usuário no Firebase Auth com uma senha aleatória temporária e dispara o e-mail de redefinição de senha.
   * @param email Email do novo usuário
   * @returns uid do novo usuário no Firebase Auth
   */
  public async createUserInAuth(email: string): Promise<string> {
    try {
      const auth = this.initSecondaryApp();
      
      // Gera uma senha aleatória de 12 caracteres (impossível de adivinhar)
      const tempPassword = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10).toUpperCase() + '!@1aA';
      
      // Cria o usuário na instância secundária (não desloga o Admin da instância principal)
      const userCredential = await createUserWithEmailAndPassword(auth, email, tempPassword);
      
      // Envia o e-mail de redefinição de senha
      await sendPasswordResetEmail(auth, email);
      
      // Desloga da instância secundária para limpar a sessão
      await signOut(auth);

      return userCredential.user.uid;
    } catch (error) {
      console.error('Erro ao criar usuário no Auth Secundário:', error);
      throw error;
    }
  }
}
