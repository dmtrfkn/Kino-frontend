export interface LoginRequestDto {
  password: string;
  email: string;
}

export interface LoginResponseDto {
  token: string;
}

export type RegistrRequestDto = LoginRequestDto & { name: string; secondName: string };
export type RegistrResponseDto = LoginResponseDto;
