import express from "express"
import {createProductPayment,createSubscription,splitPay} from "../routing/route.js"
const router = express.Router()



//subscription
router.post("/createsubs" , createSubscription)
router.post("/payproduct" , createProductPayment)
router.post("/split" , splitPay)







export default router