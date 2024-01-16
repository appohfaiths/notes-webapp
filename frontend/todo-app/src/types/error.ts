import { AxiosError } from "axios";

export interface CustomErrorResponse {
  detail: string;
  AxiosError: AxiosError;
}