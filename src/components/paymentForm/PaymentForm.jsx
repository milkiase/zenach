import { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useSelector, useDispatch} from 'react-redux';
import { clearCartItemsAction } from '../../store/cart/cart.actions';
import { selectTotalPrice } from '../../store/cart/cart.selectors';
import { selectCurrentUser } from '../../store/user/user.selectors';
import {PaymentComponent, PaymentButton} from './PaymentForm.styles';
import { BUTTON_TYPE_CLASSES } from '../button/Button'; 
import axios from 'axios';
const PaymentForm = ()=>{
    const dispatch = useDispatch()
    const stripe = useStripe()
    const elements = useElements()
    const totalPrice = useSelector(selectTotalPrice)
    const currentUser = useSelector(selectCurrentUser)
    const [isPaymentProcessing, setIsPaymentProcessing] = useState(false)

    const handlePayment = async (event)=>{
        event.preventDefault()
        if(!stripe || !elements || !totalPrice) return
        setIsPaymentProcessing(true)
        try {
            const response = await axios.post('/.netlify/functions/createPaymentIntent', JSON.stringify({amount: totalPrice * 100}), {
                headers: { 'Content-Type': 'application/json' }
            })
            const clientSecret = response.data.paymentIntent.client_secret
            
            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser?.displayName ? currentUser?.displayName : 'Guest'
                    }
                }
            })
            if(paymentResult.error) alert(paymentResult.error.message)
            else if(paymentResult.paymentIntent.status === 'succeeded'){
                alert('Payment Successful');
                dispatch(clearCartItemsAction())
            }
        } catch (error) {
            alert('Payment Failed')
            console.log(error)
        }
        setIsPaymentProcessing(false)
    }
    return (
        <PaymentComponent>
            <h2>Credit Card Payment</h2>
            <form onSubmit={handlePayment}>
                <CardElement></CardElement>
                <PaymentButton isLoading={isPaymentProcessing} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</PaymentButton>
            </form>
        </PaymentComponent>
    );
}

export default PaymentForm;