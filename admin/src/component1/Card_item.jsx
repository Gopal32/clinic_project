import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	}
}

const Card_item = () => {

    async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: "rzp_test_01GaCZQAiE5gCv",
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

    return (
        <>
        <CardContent>
            <Typography className="your_order">
            Your Order
            </Typography>
            <Typography className="add_item">
            Add Item +
            </Typography>
            <div className="order_layout">
            <Typography className="item_amount">
                2
            </Typography>
            <div className="item">
                <Typography className="item_name">
                Margarita A
                </Typography>
                <Typography className="crab">
                crab & cucumber
                </Typography>
            </div>
            <Typography className="price">
                ₹412.00
            </Typography>
            </div>
            <div className="order_layout">
            <Typography className="item_amount">
                1
            </Typography>
            <div className="item">
                <Typography className="item_name">
                Margarita B
                </Typography>
                <Typography className="crab">
                tuna & cucumber
                </Typography>
            </div>
            <Typography className="price">
                ₹112.00
            </Typography>
            </div>
            <div className="order_layout">
            <Typography className="item_amount">
                3
            </Typography>
            <div className="item">
                <Typography className="item_name">
                Margarita C
                </Typography>
                <Typography className="crab">
                tuna & cucumber
                </Typography>
            </div>
            <Typography className="price">
                ₹1236.00
            </Typography>
            </div>
            <Typography variant="h6" className="summary">
            <b>Summary</b>
            </Typography>
            <hr className="hr" />
            <div className="total">
            <Typography className="subtotal">
                Subtotal
            </Typography>
            <Typography className="price">
                ₹1760.00
            </Typography>
            </div>
            <div className="total">
            <Typography className="subtotal">
                Discount
            </Typography>
            <Typography className="price" style={{color: '#5A8CD7'}}>
                ₹759.50
            </Typography>
            </div>
            <div className="total">
            <Typography className="subtotal">
                Delivery Fee
            </Typography>
            <Typography className="price">
                ₹12.00
            </Typography>
            </div>
            <div className="total">
            <Typography className="subtotal">
                Taxes
            </Typography>
            <Typography className="price">
                ₹46.15
            </Typography>
            </div>
            <div className="totals">
            <Typography className="total">
                Total
            </Typography>
            <Typography className="price">
                ₹ 1058.65
            </Typography>
            </div>
        </CardContent>
        {/* <NavLink to="/pay" > */}
            <div className="place" onClick={displayRazorpay}>
                <Typography className="txt">
                    Place Order
                </Typography>
            </div>        
        </>
    )
}

export default Card_item;