import { UserTableModel } from "../../models/usuario/userTableModel";
import { UsuarioActionsTypes, ADD_USUARIOS } from "../types/usuarioType";

export const addUsuarios = (
  usuarios: UserTableModel | undefined
): UsuarioActionsTypes => ({
  type: ADD_USUARIOS,
  payload: usuarios,
});
