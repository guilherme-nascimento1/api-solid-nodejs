import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckinUseCase } from '../validate-check-in'

export function makeValidateCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInRepository()
  const useCase = new ValidateCheckinUseCase(checkInsRepository)

  return useCase
}
