export interface Language {
  code: string,
  name: string,
}

export interface UserStatus {
  status: string,
  date: string,
  requests: number,
  bytes: number,
  plan: string,
  plan_expires?: string,
  daily_rquests_limit: number,
  daily_bytes_limit: number,
}
