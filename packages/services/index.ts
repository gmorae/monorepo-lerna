export async function signin(document: string, password: string) {
  if (!document || !password) {
    return {
      data: {
        message: 'Os campos são obrigatórios'
      }
    }
  }

  if (document === '12345678900' && password === 'Valido123') {
    return {
      data: {
        message: 'Bem vindo'
      }
    }
  }

  return {
    data: {
      message: 'Usuário ou senha inválidos'
    }
  }
}
