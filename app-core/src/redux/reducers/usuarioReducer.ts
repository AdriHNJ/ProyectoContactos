import {
  ADD_USUARIOS,
  UsuarioActionsTypes,
  UsuarioState,
} from '../types/usuarioType'

const initialState: UsuarioState = {
  Usuarios: undefined,
}

export const usuarioReducerOLD = (
  state = initialState,
  action: UsuarioActionsTypes,
): UsuarioState => {
  switch (action.type) {
    case ADD_USUARIOS: {
      return { ...state, Usuarios: action.payload }
    }

    default:
      return state
  }
}
