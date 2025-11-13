# 🧾 BektiPayWay

**BektiPayWay** is a lightweight Node.js & TypeScript library for integrating with the **Saweria Payment Gateway API**.

---

## 📦 Installation

Install from npm:

```bash
npm i bekti-payway
```

### ⚙️ Quick Start

```
import { BektiPayWay } from "bekti-payway";
import { PaymentType } from "bekti-payway/dist/enum/payment-type";

const bpwClient = new BektiPayWay({
  merchantUUID: "yourMerchantUUID",
  username: "yourMerchantName"
});

async function createPayment() {
  const response = await bpwClient.RequestPayment({
    amount: "1000",
    orderID: "yourOrderID",
    
    /**
    ** supported payment => gopay, dana, ovo, linkaja
    **/
    payment_type: PaymentType.Gopay,
    customer_info: {
      email: "mail@mslurp.com",
      first_name: "customerName",
      phone: "6288810008989"
    }
  });


    /**
    ** use deeplink/redirect_url to complete payment
    ** enable webhook url from dashboard for automation
    **/
  console.log(response);
}
```

### 💖 Donate here

| Indonesian Citizen | World Wide |
|:------------------:|:-----------:|
| <img width="290" height="290" alt="QRIS" src="https://github.com/user-attachments/assets/d11f2d69-dfd0-49b6-8c5d-49a68cbfb8ce" /> | <img width="290" height="290" alt="Buy Me a Coffee" src="https://github.com/user-attachments/assets/12d57ac0-a5c6-4b6e-a390-75cfbe616907" /> |

---