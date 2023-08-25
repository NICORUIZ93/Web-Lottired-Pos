export interface ChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface RecoveryPassword {
  email: string;
  telephone: string;
}
