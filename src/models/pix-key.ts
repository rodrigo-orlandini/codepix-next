export interface PixKey {
  id: string;
  kind: PixKeyKind;
  key: string;
}

export enum PixKeyKind {
  cpf = "cpf",
  email = "email",
}