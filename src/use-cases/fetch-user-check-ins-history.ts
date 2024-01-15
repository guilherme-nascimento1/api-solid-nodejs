import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { CheckIn } from '@prisma/client'

interface FetchUserCheckinHistoryUseCaseRequest {
  userId: string
  page: number
}

interface FetchUserCheckinHistoryUseCaseResponse {
  checkIns: CheckIn[]
}

export class FetchUserCheckinHistoryUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUserCheckinHistoryUseCaseRequest): Promise<FetchUserCheckinHistoryUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
