export interface UsuarioModel {
  id: number;
  name: string;
  lastName: string;
  email: string;
  document?: string;
  phone_number?: string;
  description?: string;
  url_img_profile?: string;
  rating?: number;
}
