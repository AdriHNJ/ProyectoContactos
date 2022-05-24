import { UserTableModel } from "../../models/usuario/userTableModel";
import { ExpedienteModel } from "../../pages/expedientePage/models/expedienteModel";

export interface UsuarioState {
  Usuarios: UserTableModel | undefined;
}

export const ADD_USUARIOS = "@todo/ADD_USUARIOS";
export const ADD_EXPEDIENTE = "@todo/ADD_EXPEDIENTE";

interface AddUsuariosRequest {
  type: typeof ADD_USUARIOS;
  payload: UserTableModel | undefined;
}

interface AddExpedienteRequest {
  type: typeof ADD_EXPEDIENTE;
  payload: ExpedienteModel | undefined;
}

export type UsuarioActionsTypes = AddUsuariosRequest | AddExpedienteRequest;
