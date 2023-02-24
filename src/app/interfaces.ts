export interface Menu {
    id?: number;
    nombre?: string;
    categoria?:string;
    descripcion?:string;
    estado?:string;
    valor?: number;
    fotos:MenuFoto[];
   
  }
  export interface MenuFoto {
    id_menu?: number;
    foto: string;
}
  export interface Menus {
    menu: Menu[];
}
export interface Categorias{
    categorias:Categoria[];
}
export interface Categoria {
    id?: number;
    tipo?: string;
    categoria?: string;
  }