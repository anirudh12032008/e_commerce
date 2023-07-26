const { NextRequest, NextResponse } = require("next/server");

import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function POST(request) {
  const body = await request.json();
  try {
    if (body.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        billing_address_collection: "auto",
        invoice_creation: {
          enabled: true,
        },
        line_items: body.map((item) => {
          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.product.name,
                images: [item.product.imageUrl]
              },
              unit_amount: item.product.price ,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(err.message);
  }
}
