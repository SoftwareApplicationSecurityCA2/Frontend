export interface PasswordReset {
  resetId: number;
  token: string;
  expiryDate: Date;
  isUsed: boolean;
}
