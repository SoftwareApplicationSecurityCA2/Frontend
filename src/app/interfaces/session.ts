export interface Session {
  sessionId: string;
  createdAt: Date;
  expiresAt: Date;
  userId: number;
  ip_address:string;
}
