// Responsavel por mandar os dados para o banco e fazer a logica e si

import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest {
  name: string
  email: string
  password: string
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    // Verificar se ele enviou um email
    if (!email) {
      throw new Error('Email incorreto!!!')
    }

    // Verificar se esse email ja possui cadastro
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    })

    if (userAlreadyExists) {
      throw new Error('Email já cadastrado!!!')
    }

    // Criptografando a senha do usuario para salvar no banco
    const passwordHash = await hash(password, 8)

    // Cadastrar o usuario ...
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      // select = Selecionar oque quero que o user retorne ...
      select: {
        id: true,
        name: true,
        email: true,
      },
    })

    return user
  }
}

export { CreateUserService }
