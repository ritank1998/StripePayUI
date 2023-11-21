import express from "express"
import CircularJSON from "circular-json"
import Stripe from "stripe"
const STRIPE_KEY = 'sk_test_51Nv0dVSHUS8UbeVicJZf3XZJf72DL9Fs3HP1rXnQzHtaXxMKXwWfua2zi8LQjmmboeNJc3odYs7cvT9Q5YIChY5I00Pocly1O1'
const HOST_KEY = 'sk_test_51OEpcJSD13T9V6q5WlrcLh9n7ty3chdb9G23w5UGdeeKjzUZjay8Dp3ukT2O8A2jIeYdUwcj7M72Yokt0r05Rhac00KRsQAAVR'

//to create a product completely we need to create a product then create its price then pass its priceId as a Meta data to update the product
// export const createProduct = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)

//     try {
//         const {
//             name,
//             unit_amount,
//             currency
//         } = req.body
//         const product = await strPay.products.create({
//             name,
//         });
//         const productId = product.id
//         console.log(productId)
//         const price = await strPay.prices.create({
//             product: productId, // ID of the product created in the previous step
//             unit_amount, // amount in cents
//             currency,
//         });
//         const priceId = price.id
//         console.log(priceId)
//         await strPay.products.update(productId, {
//             metadata: {
//                 priceId: priceId,
//             },
//         });
//         res.status(200).json(CircularJSON.stringify({ product }))
//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ error: error.message }))
//     }
// }

// //some issue with the update price stuff
// export const updateProduct = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY);

//     try {
//         const {
//             productId,
//             priceId,
//             name,
//             unit_amount,
//             currency
//         } = req.body;

//         console.log(req.body); // Log the request body to the console

//         // Update the product name
//         const updatedProductName = await strPay.products.update(
//             productId,
//             {
//                 name,
//             }
//         );

//         // Archives the Price
//         const archivedPrice = await strPay.prices.update(priceId, {
//             active: false,
//         });
//         //Creates the new Price
//         const updatedPrice = await strPay.prices.create({
//             product: productId, // ID of the product created in the previous step
//             unit_amount, // amount in cents
//             currency,
//         })
//         res.status(200).json({
//             updatedProductName,
//             archivedPrice,
//             updatedPrice,
//         });
//     } catch (error) {
//         console.error(error); // Log the error for debugging
//         res.status(500).json({ message: error.message });
//     }
// };

// export const listAllProducts = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     try {
//         const products = await strPay.products.list({
//             limit: 5,
//         });
//         res.status(200).json(CircularJSON.stringify({ products }))
//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ message: error.message }))
//     }
// }
// //product can only be deleted when it has no proce attached to it and A price can only be archived when it has a default price attached to it .
// //In short if a product is created and get attached wit a price then it has to has to have a default price .

// export const delProd = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     const {
//         //priceId,
//         prodId
//     } = req.body
//     try {
//         // const archivedPrice = await strPay.prices.update(priceId, {
//         //     active: false,
//         // });
//         const deletedProd = await strPay.products.del(prodId);
//         res.status(200).json(CircularJSON.stringify({ deletedProd }))
//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ message: error.message }))
//     }
// }


// export const searchProd = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     const { name } = req.body
//     try {
//         const products = await strPay.products.search({
//             query: name,
//         });
//         res.status(200).json(CircularJSON.stringify({ products }))
//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ message: error.message }))
//     }
// }
// //coupon and its promotion code
// export const createCoupon = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     const {
//         duration,
//         duration_in_months,
//         percent_off
//     } = req.body
//     try {
//         const coupon = await strPay.coupons.create({
//             duration,
//             duration_in_months,
//             percent_off
//         });
//         res.status(200).json(CircularJSON.stringify({ coupon }))
//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ message: error.message }))
//     }
// }

// export const getCoupon = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     const { limit } = req.body
//     try {
//         const coupons = await strPay.coupons.list({
//             limit
//         });
//         res.status(200).json(CircularJSON.stringify({ coupons }))
//     } catch (error) {
//         res.status(500).json(CircularJSON.stringify({ message: error.message }))
//     }
// }

// export const delCoupon = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     const { coupId } = req.body
//     try {
//         const deleted = await strPay.coupons.del(coupId);
//         res.status(200).json(CircularJSON.stringify({ deleted }))
//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ message: error.message }))
//     }
// }

// export const createPromotionCode = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     const { coupon } = req.body
//     try {
//         const promotionCode = await strPay.promotionCodes.create({
//             coupon
//         });
//         res.status(200).json(CircularJSON.stringify({ promotionCode }))
//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ message: error.message }))
//     }
// }

// export const createSessions = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     const { quantity, price } = req.body
//     try {
//         const session = await strPay.checkout.sessions.create({
//             success_url: 'https://example.com/success',
//             line_items: [
//                 {
//                     price,
//                     quantity
//                 },
//             ],
//             mode: 'subscription',
//         });
//         res.status(200).json(CircularJSON.stringify({ session }))
//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ message: error.message }))
//     }
// }

// export const retrieveSession = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     try {
//         const session = await strPay.checkout.sessions.retrieve(
//             'cs_test_a1gOTh3NLjChmt4AbARFVUxhSGANPuOOrTuAdPvJJHZojeMZvbVuDGVyh0'
//         );
//         res.status(200).json(CircularJSON.stringify({ session }))
//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ error: error.message }))
//     }
// }

// export const listOfCheckoutSessions = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     const { limit } = req.body
//     try {
//         const sessions = await strPay.checkout.sessions.list({
//             limit,
//         });
//         res.status(200).json(CircularJSON.stringify({ sessions }))
//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ message: error.message }))
//     }
// }

// export const createPaymentLink = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     const { price, quantity } = req.body
//     try {
//         const paymentLink = await strPay.paymentLinks.create({
//             line_items: [
//                 {
//                     price,
//                     quantity
//                 },
//             ],
//         });
//         res.status(200).json(CircularJSON.stringify({ paymentLink }))
//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ error: error.message }))
//     }
// }

// export const createInvoice = async (req, res) => {
//     const strPay = Stripe(STRIPE_KEY)
//     try {
//         const invoiceItem = await strPay.invoiceItems.create({
//             customer: 'cus_P1RN4McGJxHQbU',
//             price: 'price_1ODKsCSHUS8UbeViDO8RYTrR',
//         });

//         const invoiceId = invoiceItem.id
//         console.log(invoiceId)
//         // const sendInvoice = await strPay.invoices.sendInvoice('in_1ODOY2SHUS8UbeViJAQF9Cyb')
//         res.status(200).json(CircularJSON.stringify({ invoiceItem, }))

//     }
//     catch (error) {
//         res.status(500).json(CircularJSON.stringify({ message: error.message }))
//     }
// }

//subscription Item
export const createSubscription = async (req, res) => {
    const strPay = Stripe(STRIPE_KEY)
    try {
        const {
            name,
            unit_amount,
            currency,
            quantity,
            email,
            cName
        } = req.body

        const customer = await strPay.customers.create({
            name: cName,
            email: email,
        });
        const c_Id = customer.id
        const product = await strPay.products.create({
            name,
        });
        const productId = product.id
        console.log(productId)
        const final_amt = unit_amount*100
        const price = await strPay.prices.create({
            product: productId, // ID of the product created in the previous step
            unit_amount:final_amt, // amount in cents
            currency,
            recurring: {
                interval: 'month',
            }
        });
        const priceId = price.id
        // const invoice = await strPay.invoices.create({
        //     customer: c_Id,
        //   });
        const invoice = await strPay.invoices.create({
            customer: c_Id,
        });
        const invoice_id = invoice.id
        
        const session = await strPay.checkout.sessions.create({
            success_url: 'http://localhost:3000/success',
            line_items: [
                {
                    price: priceId,
                    quantity
                },
            ],
            mode: 'subscription',
        });
        const inv = await strPay.invoices.retrieve(invoice_id);
        console.log(inv.lines.url)
        // const invoice = await strPay.invoices.create({
        //     customer: c_Id,
        // });
        // const invoice_id = invoice.id
        // await strPay.invoices.pay(invoice_id);
        res.status(200).json(CircularJSON.stringify({ session }))
    }
    catch (error) {
        res.status(500).json(CircularJSON.stringify({ message: error.message }))
        
    }
}


//create Product Item
export const createProductPayment = async(req,res)=>{
    const strPay = Stripe(STRIPE_KEY)
    
    try{
        const {
            name,
            unit_amount,
            currency,
            quantity
        } = req.body
        const product = await strPay.products.create({
            name,
        });
        const productId = product.id
        console.log(productId)
        const final_amt = unit_amount*100
        const price = await strPay.prices.create({
            product: productId, // ID of the product created in the previous step
            unit_amount: final_amt, // amount in cents
            currency,
        });
        const priceId = price.id
        console.log(priceId)
        const session = await strPay.checkout.sessions.create({
            success_url: 'http://localhost:3000/success',
            line_items: [
                {
                    price: priceId,
                    quantity
                },
            ],
            mode: 'payment',
        });
        res.status(200).json(CircularJSON.stringify({session}))
    }
    catch(error){
        res.status(500).json(CircularJSON.stringify({message :error.message}))
    }
}

//split subscription payment
export const splitPay = async(req,res)=>{
    const strPay = Stripe(STRIPE_KEY)
    
    try{
        const paymentIntent = await strPay.paymentIntents.create({
            amount: 1000,
            currency: 'usd',
            automatic_payment_methods: {
              enabled: true,
            },
            transfer_data: {
              amount: 877,
              destination: '{{CONNECTED_ACCOUNT_ID}}',
            },
          });
          res.status(200).json(CircularJSON.stringify({paymentIntent}))
    }
        catch(error){
        res.status(500).json(CircularJSON.stringify({message : error.message}))
    }
}

