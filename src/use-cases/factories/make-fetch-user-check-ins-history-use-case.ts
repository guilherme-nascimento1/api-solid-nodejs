import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckinHistoryUseCase } from '../fetch-user-check-ins-history'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInRepository()
  const useCase = new FetchUserCheckinHistoryUseCase(checkInsRepository)

  return useCase
}
