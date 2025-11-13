import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { SaweriaConfig } from './interface/config';
import { PaymentRegisteredResponse } from './interface/response';
import { PaymentCalculateRequest, PaymentRequest } from './interface/request';

export class BektiPG {
    private client: AxiosInstance;
    private config: SaweriaConfig;

    constructor(config: SaweriaConfig) {
        this.config = config;

        this.client = axios.create({
            baseURL: 'https://backend.saweria.co',
            timeout: config.timeout || 10000,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    /**
     * Request Payment bektipg
     * @returns Promise with PaymentRegisteredResponse 
     */
    async RequestPayment(dto: PaymentRequest): Promise<PaymentRegisteredResponse> {
        const payload = { ...dto, agree: true, notUnderage: true, currency: 'IDR', message: dto.orderID }
        try {
            const response: AxiosResponse<PaymentRegisteredResponse> = await this.client.post('/donations/' + this.config.merchantID, payload);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Failed to create payment: ${error.response?.status} - ${error.response?.data?.message || error.message}`);
            }
            throw new Error(`Failed to create payment: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    /**
     * Calculate Payment to check pg fee, platform fee, etc
     * @returns Promise with PaymentRegisteredResponse 
     */
    async CalculatePayment(dto: PaymentCalculateRequest): Promise<PaymentRegisteredResponse> {
        const payload = { ...dto, agree: true, notUnderage: true, currency: 'IDR', message: dto.orderID }
        try {
            const response: AxiosResponse<PaymentRegisteredResponse> = await this.client.post(`/donations/${this.config.username}/calculate_pg_amount`, payload);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Failed to calculate payment: ${error.response?.status} - ${error.response?.data?.message || error.message}`);
            }
            throw new Error(`Failed to calculate payment: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }    
}

export default BektiPG;