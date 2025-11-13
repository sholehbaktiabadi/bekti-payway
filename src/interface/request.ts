import { PaymentType } from "../enum/payment-type";
import { CustomerDetail } from "./customer";

export interface PaymentCalculateRequest {
  orderID: string;
  amount: string;
  payment_type: PaymentType
  customer_info: CustomerDetail
}

export interface PaymentRequest {
  orderID: string;
  amount: string;
  payment_type: PaymentType;
  customer_info: CustomerDetail
}
