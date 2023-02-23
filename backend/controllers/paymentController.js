const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const STRIPE_SECRET_KEY = "pk_test_51MFHhzSJv2gwZep6oU36gQAb54TbBdR8nmOhlvUkAUV7XCySRo7G7fpljQ6vM5kmOaP03BbzZWEc0Oj96iR53XQJ00OUc2APJi";
//const stripe = require("stripe")(STRIPE_SECRET_KEY);
const stripe = require("stripe")(STRIPE_SECRET_KEY);
const STRIPE_API_KEY = "sk_test_51MFHhzSJv2gwZep6hMGuVDyuuoLagXIyV6yl0Iy2vJceoaTL02Ix39rbV7Qx1TeuS6FN4bmH3YDZF9eSNO3dOXsy00KlO9TSwV";

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: STRIPE_API_KEY , stripeSecretKey: STRIPE_SECRET_KEY});
});