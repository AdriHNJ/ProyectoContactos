import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Popup } from 'devextreme-react/popup'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useClearCache } from 'react-clear-cache'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import logoLogin from '../../assets/newlogo.png'
import PwaInstallPopupIOSComponent from '../../components/pwaIos/pwaIos'
import { RootState } from '../../redux/combineReducers'
import { getCookie, checkScreenSize } from 'shared-utils'
import './login.css'
import clsx from 'clsx'
import {
  addLoggedUser,
  addRestablecerContraseña,
  addUnLoggedUser,
} from './redux/authActions'
import { RecuperarContraseña, restablecerContraseñaCall } from 'shared-services'
import CircularProgress from '@material-ui/core/CircularProgress'
import { NotifyType, showToast } from '../../utils/sharedUitls'
import { LoginUser, RestorePassword } from './service/authService'

interface Props {}

const Login: React.FC<Props> = ({}) => {
  let history = useHistory()

  const [username, setUsername] = useState(getCookie('UsuarioRecordado'))
  const [password, setPassword] = useState(getCookie('passwdRecordado'))
  const [UsuarioResetPasswd, setUsuarioResetPasswd] = useState('')
  const [emailResetPasswd, setEmailResetPasswd] = useState('')
  const [checkedIsTrue, setCheckedIsTrue] = useState(false)
  const userState = useSelector((state: RootState) => state.user)
  //Control del versiones
  const { isLatestVersion, emptyCacheStorage } = useClearCache()

  //recordar usuario
  let recordarFalse = 'false'
  localStorage.setItem('recordarUsuario', recordarFalse)
  var recordarUsuario = localStorage.getItem('recordarUsuario')
  const rootState = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  //variable para el popup
  const [isVisiblePop, setIsVisiblePop] = useState(false)
  const [isVisiblePopEmail, setIsVisiblePopEmail] = useState(false)
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const timer = React.useRef<number>()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!loading) {
      setSuccess(false)
      setLoading(true)
      timer.current = window.setTimeout(() => {
        setSuccess(true)
        setLoading(false)
      }, 2000)
    }
    try {
      let usuarioLogeado = await LoginUser(username, password)

      if (usuarioLogeado == undefined || usuarioLogeado.Token == '') {
        dispatch(addUnLoggedUser(undefined))
      } else {
        showToast(
          '¡Usuario Correcto! Iniciando sesión...',
          NotifyType.success,
          5000,
        )

        dispatch(addLoggedUser(usuarioLogeado))

        /* history.push('/Companies') */
      }
      if (checkedIsTrue) {
        let recordarTrue = 'true'
        localStorage.setItem('recordarUsuario', recordarTrue)
        setCheckedIsTrue(false)
      }
      history.push('/expedientePage')
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmitResetaContraseña = async () => {
    try {
      var recuperarPasswd = localStorage.getItem('recuperarPasswd')
      let recuperarPasswdObj = JSON.parse(recuperarPasswd!)
      let Username = recuperarPasswdObj!.Usuario
      let Auth = recuperarPasswdObj!.Auth!

      let respuesta = await restablecerContraseñaCall(
        Username,
        emailResetPasswd,
        Auth,
      )
      if (respuesta == 'OK') {
        setIsVisiblePopEmail(false)
        setIsVisiblePop(false)
      }
    } catch (e) {
      console.error(e)
    }
  }
  const handleSubmitRecuperarContraseña = async () => {
    console.log(RestorePassword(UsuarioResetPasswd))
    /*  document.getElementById('mensaje')!.innerHTML = await getUsuarioByUserName(
      UsuarioResetPasswd,
    ) */
    // try {
    //   var puedeRecuperar = await RecuperarContraseña(UsuarioResetPasswd)
    //   var nodeOK = document.createElement('P')
    //   var textnode: Text
    //   var mensaje: string =
    //     'El usuario no existe, compruebe que esta bien escrito.'
    //   console.log(puedeRecuperar!)
    //   if (puedeRecuperar === undefined) {
    //     mensaje = 'El usuario no existe, compruebe que esta bien escrito.'
    //     document.getElementById('mensaje')!.innerHTML = mensaje!
    //   }
    //   if (puedeRecuperar?.Permitir!) {
    //     dispatch(addRestablecerContraseña(puedeRecuperar))
    //     localStorage.setItem('recuperarPasswd', JSON.stringify(puedeRecuperar!))
    //     setIsVisiblePopEmail(true)
    //     mensaje = puedeRecuperar?.Mensaje!
    //     document.getElementById('mensajeRecuperarPasswd')!.innerHTML = mensaje!
    //   } else if (puedeRecuperar === undefined) {
    //     mensaje = 'El usuario no existe, compruebe que esta bien escrito.'
    //     document.getElementById('mensaje')!.innerHTML = mensaje!
    //   } else if (puedeRecuperar != undefined && !puedeRecuperar?.Permitir!) {
    //     mensaje = puedeRecuperar?.Mensaje!
    //     document.getElementById('mensaje')!.innerHTML = mensaje!
    //   }
    // } catch (e) {
    //   console.error(e)
    // }
  }

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const onUsuarioResetPasswdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsuarioResetPasswd(e.target.value)
  }
  const onEmailResetPasswdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailResetPasswd(e.target.value)
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
      //backgroundImage: "url(https://source.unsplash.com/collection/277386)",
      backgroundRepeat: 'no-repeat',
      /*  backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900], */
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    paperRecuperarContraseña: {
      margin: theme.spacing(0, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: 'auto', // Fix IE 11 issue.
      maxWidth: '360px',
      marginTop: theme.spacing(1),
      padding: '5%',
    },
    formRecuperarPass: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    media: {
      height: 140,
    },
    olvideContraseñaButton: {
      fontSize: '7pt',
    },
    buttonSuccess: {
      backgroundColor: 'blue',
      '&:hover': {
        backgroundColor: 'blue',
      },
    },
    buttonProgress: {
      color: 'blue',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }))

  const cerrarPopup = () => {
    setIsVisiblePop(false)
    setUsuarioResetPasswd('')
    document.getElementById('mensaje')!.innerHTML = ''
    window.location.reload()
  }
  const cerrarPopupEmail = () => {
    setIsVisiblePopEmail(false)
  }
  if (rootState?.user!) {
  }

  const popUpResponsiveHeight = () => {
    if (!checkScreenSize()) {
      return 400
    } else {
      return '70%'
    }
  }
  const popUpResponsiveWidth = () => {
    if (!checkScreenSize()) {
      return 300
    } else {
      return '30%'
    }
  }
  var shadow = {
    boxShadow: '1px 3px 1px #9E9E9E',
  }
  const classes = useStyles()
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  })

  return (
    <>
      {isLatestVersion
        ? console.log(
            'Estas en la ultima versión, ' +
              'Estado de la aplicacion: ' +
              process.env.NODE_ENV +
              ' Numero de versión: ' +
              process.env.REACT_APP_SECRET_CODE,
          )
        : console.log(
            'No Estas en la ultima versión, ' +
              'Estado de la aplicacion: ' +
              process.env.NODE_ENV +
              ' Numero de versión: ' +
              process.env.REACT_APP_SECRET_CODE,
          )}
      {/*  <div>{!isLatestVersion && emptyCacheStorage()}</div> */}
      <div>
        {!isLatestVersion && (
          <p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                emptyCacheStorage()
              }}
              rel="noopener noreferrer"
            >
              Actualizar versión
            </a>
          </p>
        )}
      </div>
      <PwaInstallPopupIOSComponent />
      <Grid container justifyContent="center" direction="row">
        <Grid item style={{ width: 'auto' }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            className="login-form"
            style={{ width: '100%' }}
          >
            <Paper
              variant="elevation"
              elevation={12}
              className="login-background"
              style={{ width: '100%' }}
            >
              <img
                src={logoLogin}
                style={{ display: 'block', margin: 'auto', marginTop: '2%' }}
                width="200px"
                height="20%"
                alt="LogoLogin"
              />

              <Grid item>
                <form className={classes.form} onSubmitCapture={handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Usuario"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={username}
                    onChange={onUsernameChange}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="Contraseña"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={onPasswordChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={buttonClassname}
                    disabled={loading}
                  >
                    Acceder
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                  {/* <p style={{ color: 'gray' }}>
                    Al hacer clic en 'Acceder', usted está de acuerdo con el{' '}
                    <a
                      href="https://www.ruano.com/aviso-legal/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Aviso Legal
                    </a>{' '}
                    y las{' '}
                    <a
                      href="https://www.ruano.com/condiciones-generales/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Condiciones Generales de Contratación.
                    </a>
                  </p> */}
                  <Grid container>
                    <Grid item xs>
                      <Button
                        onClick={() => {
                          setIsVisiblePop(!isVisiblePop)
                        }}
                        className={classes.olvideContraseñaButton}
                      >
                        Olvidé mi contraseña
                      </Button>
                      <Popup
                        visible={isVisiblePop}
                        onHiding={cerrarPopup}
                        dragEnabled={false}
                        closeOnOutsideClick={false}
                        showTitle={true}
                        width={popUpResponsiveWidth}
                        height={popUpResponsiveHeight}
                      >
                        <div
                          className={classes.paperRecuperarContraseña}
                          id="mensajeRecuperarPasswd"
                        >
                          <img
                            src={logoLogin}
                            width="70%"
                            height="70%"
                            alt="LogoLogin"
                          />
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Usuario"
                            label="Usuario"
                            name="Usuario"
                            autoComplete="Usuario"
                            autoFocus
                            value={UsuarioResetPasswd}
                            onChange={onUsuarioResetPasswdChange}
                          />
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmitRecuperarContraseña}
                          >
                            Enviar
                          </Button>

                          <Box mt={5}>
                            <Copyright />
                          </Box>
                          <h3 id="mensaje"></h3>
                        </div>
                      </Popup>
                      <Popup
                        visible={isVisiblePopEmail}
                        onHiding={cerrarPopupEmail}
                        dragEnabled={false}
                        closeOnOutsideClick={false}
                        showTitle={true}
                        width={popUpResponsiveWidth}
                        height={popUpResponsiveHeight}
                      >
                        <div
                          className={classes.paperRecuperarContraseña}
                          id="mensajeRecuperarPasswd"
                        >
                          <img src={logoLogin} width="70%" height="70%" />
                          <p style={{ fontSize: '0.8em' }}>
                            {' '}
                            Introduzca un email valido. Le enviaremos el enlace
                            para restablecer su contraseña.
                          </p>
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={emailResetPasswd}
                            onChange={onEmailResetPasswdChange}
                          />
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmitResetaContraseña}
                          >
                            Enviar
                          </Button>

                          <Box mt={5}>
                            <Copyright />
                          </Box>
                          <p id="mensaje"></p>
                        </div>
                      </Popup>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Login
