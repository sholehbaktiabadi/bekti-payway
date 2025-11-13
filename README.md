# 🧾 BektiPG

**BektiPG** is a lightweight Node.js & TypeScript library for integrating with the **Saweria Payment Gateway API**.

---

## 📦 Installation

Install from npm:

```bash
npm i bekti-pg
```

### ⚙️ Quick Get started

```
import BektiPG from "bekti-pg";
import { PaymentType } from "bekti-pg/interface/request";

const bpgClient = new BektiPG({
  merchantID: "yourMerchantID",
  username: "yourMerchantName"
});

async function createPayment() {
  const response = await bpgClient.RequestPayment({
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
    **/
  console.log(response);
}
```

### 💖 Donate here

| Indonesian Citizen | World Wide |
|:------------------:|:-----------:|
| <img width="290" height="290" alt="QRIS" src="https://github.com/user-attachments/assets/d11f2d69-dfd0-49b6-8c5d-49a68cbfb8ce" /> | <img width="290" height="290" alt="Buy Me a Coffee" src="https://github.com/user-attachments/assets/12d57ac0-a5c6-4b6e-a390-75cfbe616907" /> |

---