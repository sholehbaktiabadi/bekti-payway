import { PaymentType } from "../enum/payment-type";
import { CustomerDetail } from "./customer";

export interface PaymentRegisteredResponse {
  data: {
    amount: number;
    amount_raw: number;
    created_at: string;
    currency: string;
    donator_id: string | null;
    id: string;
    message: string;
    need_notification: boolean;
    payment_type: PaymentType;
    redirect_url: string;
    status: string;
    type: string;
    user_id: string;
    donator: CustomerDetail
    etc: {
      amount_to_display: number;
      transaction_fee_policy: string;
    };
  };
}