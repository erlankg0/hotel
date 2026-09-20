export enum ContractStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  EXPIRED = 'EXPIRED',
}

export enum BoardType {
  RO = 'RO',
  BB = 'BB',
  HB = 'HB',
  FB = 'FB',
  AI = 'AI',
  UAI = 'UAI',
}

export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
  TRY = 'TRY',
  RUB = 'RUB',
  KGZ = 'KGZ',
  KZ = 'KZ',
}

export enum PaymentType {
  CASH = 'CASH',
  PREPAYMENT = 'PREPAYMENT',
  CREDIT = 'CREDIT',
  CASH_BY_GUEST = 'CASH_BY_GUEST',
}

export enum AgencyType {
  AGENCY = 'AGENCY',
  COMPAMNY = 'COMPAMNY',
  INVIDUAL = 'INVIDUAL',
  SOURCE = 'SOURCE',
  WALKIN = 'WALKIN',
}

export enum AvailabilityStatus {
  BOOKABLE = 'BOOKABLE',
  STOP_SELL = 'STOP_SELL',
  CLOSED = 'CLOSED',
}

export const availabilityStatusLabel: Record<AvailabilityStatus, string> = {
  [AvailabilityStatus.BOOKABLE]: 'Доступно для бронирования',
  [AvailabilityStatus.STOP_SELL]: 'Продажи остановлены',
  [AvailabilityStatus.CLOSED]: 'Закрыто',
};

export const contractStatusLabels: Record<ContractStatus, string> = {
  [ContractStatus.DRAFT]: 'Черновик',
  [ContractStatus.ACTIVE]: 'Активный',
  [ContractStatus.SUSPENDED]: 'Приостановлен',
  [ContractStatus.EXPIRED]: 'Истёк',
};

export const boardTypeLabels: Record<BoardType, string> = {
  [BoardType.RO]: 'Только проживание',
  [BoardType.BB]: 'Завтрак',
  [BoardType.HB]: 'Полупансион',
  [BoardType.FB]: 'Полный пансион',
  [BoardType.AI]: 'Всё включено',
  [BoardType.UAI]: 'Ультра всё включено',
};

export const currencyLabels: Record<Currency, string> = {
  [Currency.EUR]: 'Евро',
  [Currency.USD]: 'Доллар США',
  [Currency.TRY]: 'Турецкая лира',
  [Currency.RUB]: 'Российский рубль',
  [Currency.KGZ]: 'Кыргызский сом',
  [Currency.KZ]: 'Казахстанский тенге',
};

export const paymentTypeLabels: Record<PaymentType, string> = {
  [PaymentType.CASH]: 'Наличные',
  [PaymentType.PREPAYMENT]: 'Предоплата',
  [PaymentType.CREDIT]: 'Кредит',
  [PaymentType.CASH_BY_GUEST]: 'Оплата гостем',
};

export const agencyTypeLabels: Record<AgencyType, string> = {
  [AgencyType.AGENCY]: 'Агентство',
  [AgencyType.COMPAMNY]: 'Компания',
  [AgencyType.INVIDUAL]: 'Физическое лицо',
  [AgencyType.SOURCE]: 'Источник',
  [AgencyType.WALKIN]: 'Прямой клиент',
};