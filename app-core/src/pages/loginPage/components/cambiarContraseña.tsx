import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import logoLogin from '../../../assets/newlogo.png'

import { RootState } from '../../../redux/combineReducers'

import { getParameters } from 'shared-utils'
import { useClearCache } from 'react-clear-cache'
import { checkScreenSize } from 'shared-utils'
import { addLoggedUser, addUnLoggedUser } from '../redux/authActions'
import { CambiarContraseñaCall, LoginUser } from '../service/authService'
import { NotifyType, showToast } from '../../../utils/sharedUitls'

interface Props {}

const ChangePassword: React.FC<Props> = ({}) => {
  let history = useHistory()

  const [nuevaContraseña, setNuevaContraseña] = useState('')
  const [repetirNuevaContraseña, setRepetirNuevaContraseña] = useState('')
  //Control del versiones
  const { isLatestVersion, emptyCacheStorage } = useClearCache()

  const rootState = useSelector((state: RootState) => state.user)

  const dispatch = useDispatch()
  //variable para el popup

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      //Recupera contraseña
      var Username = getParameters('user')
      var Code = getParameters('code')

      if (Username && Code) {
        if (nuevaContraseña === repetirNuevaContraseña) {
          var CambiaContraseña = await CambiarContraseñaCall(
            Username!,
            nuevaContraseña!,
            Code,
          )
        } else {
          showToast(
            'Las contraseñas no coinciden, Prueba de nuevo.',
            NotifyType.info,
            5000,
          )
        }
      }
      if (CambiaContraseña == 'OK') {
        history.push('/login')
        /*        var usuarioLogeado = await LoginUser(Username!, nuevaContraseña)
        //Borro la config de recuperar contraseña del storage
        localStorage.removeItem('recuperarPasswd')
        usuarioLogeado == undefined
          ? dispatch(addUnLoggedUser(usuarioLogeado))
          : dispatch(addLoggedUser(usuarioLogeado)) */
      }
    } catch (e) {
      console.error(e)
    }
  }

  const onNuevacontraseñaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNuevaContraseña(e.target.value)
  }
  const onRepetirNuevaContraseñaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRepetirNuevaContraseña(e.target.value)
  }

  //copyrigth
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.ruano.com/">
          Ruano Informática, S.L.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      // backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundImage: 'url(https://source.unsplash.com/collection/277386)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light'
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: formResponsiveWidth,
      height: formResponsiveHeight, // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    media: {
      height: 140,
    },
  }))

  if (rootState!.isLoggedIn == true) {
    history.push('/ExpedientePage')
  }

  const formResponsiveHeight = () => {
    if (!checkScreenSize()) {
      return 400
    } else {
      return '70%'
    }
  }
  const formResponsiveWidth = () => {
    if (!checkScreenSize()) {
      return '100%'
    } else {
      return '100%'
    }
  }

  const classes = useStyles()
  return (
    <>
      {/*  <Box> */}
      <div className={classes.paper}>
        <img
          src={logoLogin}
          style={{ display: 'block', margin: 'auto', marginTop: '2%' }}
          width="200px"
          height="20%"
        />
        <form className={classes.form} onSubmitCapture={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nuevaContraseña"
            label="Nueva contraseña"
            name="nuevaContraseña"
            autoComplete="nuevaContraseña"
            type="password"
            autoFocus
            value={nuevaContraseña}
            onChange={onNuevacontraseñaChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="repetirNuevaContraseña"
            label="Repetir nueva contraseña"
            type="password"
            id="repetirNuevaContraseña"
            autoComplete="repetirNuevaContraseña"
            value={repetirNuevaContraseña}
            onChange={onRepetirNuevaContraseñaChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => handleSubmit}
          >
            Enviar
          </Button>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>
      {/*  </Box> */}
    </>
  )
}

export default ChangePassword
