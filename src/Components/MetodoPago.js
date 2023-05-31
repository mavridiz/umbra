import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useParams, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { toast } from 'react-hot-toast';

import axios from 'axios';


const stripePromeise = loadStripe("pk_test_51NBB0pJCJQXy5vS8g9pqiKFimwwR9mQNSo2SAjIyCNbAkRb99mU6bAwnW9nonbLo6QQh4PpoTqth0NYmakA6aWz700KSLV2DKT");

const CheckoutForm = () => {

    const par = useParams();
    var precio = 0;
    var precioC = 0;
    var tipo = "";

    if (par.id === "1") {
        precio = 99.99;
        precioC = 9999;
        tipo = "Soft";
    } else if (par.id === "2") {
        precio = 499.99;
        precioC = 49999;
        tipo = "Empresarial"
    } else {
        precio = 999.99;
        precioC = 99999;
        tipo = "X";
    }

    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
        setLoading(true)

        if (!error) {
            const { id } = paymentMethod;

            try {

                const { data } = await axios.post('http://localhost:3001/Comprar/checkout', {
                    id,
                    amount: 10000 //centavos xd
                })

                console.log(data)

                elements.getElement(CardElement).clear();

                toast.success('Pago realizado con éxito', {
                    position: "bottom-right",
                    style: {
                        background: "#101010",
                        color: "#fff"
                    }
                })

            } catch (error) {
                console.log(error)
                toast.error('Hubo un error al realizar el pago', {
                    position: "bottom-right",
                    style: {
                        background: "#101010",
                        color: "#fff"
                    }
                })
            }
            setLoading(false)

            navigate("/Licencias")
        }
    }

    return <form onSubmit={handleSubmit} className="card card-body">

        <h2 align="center">Usted está a punto de aquirir nuestro plan <br/> {tipo}</h2>
        <h3 className="text-center">Precio: ${precio}</h3>
        <br/>
        <h5 className="text-center">Datos bancarios</h5>
        <p align="center">Por favor, ingrese los datos de su tarjeta de crédito.</p>
        <div className="form-group my-2">
            <CardElement className="form-control" />
        </div>
        <button className="btn btn-success" disabled={!stripe}>
            {loading ? (
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                "Comprar"
            )}
        </button>
    </form>
}

export function PagoForm() {

    return (
        <Elements stripe={stripePromeise}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <CheckoutForm />
                    </div>
                </div>
            </div>
        </Elements>
    );
}