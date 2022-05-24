export const PhoneValidator = {
  mask: '+1 (X00) 000-0000',
  maskRules: {
    X: /[02-9]/,
  },
  useMaskedValue: true,
  maskInvalidMessage: 'El telefono debe tener un formato correcto',
}

export const NIFValidator = {
  mask: '00000000A' || 'A00000000',
  maskRules: {
    X: /^([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])$/,
  },
  useMaskedValue: false,
  maskInvalidMessage:
    'El numero de identificacion tiene que tener un formato valido.',
}
export const EmailValidator = {
  mask: '+1 (X00) 000-0000',
  maskRules: {
    X: /[02-9]/,
  },
  useMaskedValue: true,
  maskInvalidMessage:
    'El Email tiene que tener un formato valido, ex: test@test.com',
}
