export type UserService = {
  status: number;
  code: string;
  data: any;
  error: { type: string; data: string } | null;
  debug: string | null;
};
