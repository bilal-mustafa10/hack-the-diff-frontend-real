import {useEffect, useMemo, useState} from 'react';
import { Navbar } from '../../components/navbar';
import { loadStripe } from "@stripe/stripe-js";
import { Card, Pane, Text, Image, TextInputField, Button, Heading, Group } from 'evergreen-ui';
import * as stripe from "stripe";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const HomePage = () => {
    const stripePromise = loadStripe("pk_test_51MefTqINgIjnLCvNEbn85DG63i9TXlIMY5DF7Us7xLhUYy97KHPspxzMygS1ffw9aSiHQr4xsMgnCtBJKdaIHOep00ow5LqldU");

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:3001/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt",amount:30 }], amount: 30, currency:"gbp" }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',

        variables: {
            colorPrimary: '#0570de',
            colorBackground: '#ffffff',
            colorText: '#30313d',
            colorDanger: '#df1b41',
            borderRadius: '4px',
            // See all possible variables below
        }
    };

    const stripeOptions = {
        clientSecret,
        appearance,
    };


    const [donationAmount, setDonationAmount] = useState('');
    const [otherDonationAmount, setOtherDonationAmount] = useState('');
    const [donationSubmitted, setDonationSubmitted] = useState(false);
    const [selectedValue, setSelectedValue] = useState('onetime');

    const options = useMemo(
        () => [
            { label: 'ONE TIME', value: 'onetime' },
            { label: 'MONTHLY', value: 'monthly' },
        ],
        []
    )

    const handleDonationAmountChange = (value) => {
        setDonationAmount(value);
        setOtherDonationAmount('');
    }

    const handleOtherDonationAmountChange = (event) => {
        setOtherDonationAmount(event.target.value);
        setDonationAmount('');
    }


    const handleDonationSubmit = (event) => {
        event.preventDefault();
        setDonationSubmitted(true);

        const paymentElement = stripe.elements.create('payment', {
            payment_method_types: ['card', 'apple_pay', 'google_pay', 'klarna', 'sepa_debit'],
            automatic_payment_methods: true,
            layout: {
                type: 'tabs',
                defaultCollapsed: false,
                radios: true,
                spacedAccordionItems: false
            }
        });

        paymentElement.mount('#payment-element');
    };

    const Bard = () => {
        return(
            <Card height={500} width={"100%"} margin = {15} backgroundColor={"#8149FF"} elevation={3} borderRadius={20}>
                <Image
                    src={require('../../assets/images/camp.png')}
                    style={{
                        width:"100%",
                        borderRadius: "10px",
                        height: "undefined",
                        aspectRatio: 1.5, // add this line
                        objectFit: "cover", // add this line
                        objectPosition: "center", // add this line
                    }}
                    alt="Your image"
                />
                <br />
                <br />
                <Pane padding={30}>
                    <Text fontSize={30} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={"600"}>
                        Donate Now
                        <br />
                        <br />
                    </Text>
                    <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={"300"}>
                        This holiday season, your gift will be matched to provide double the lifesaving assistance
                        <br />
                        <br />
                    </Text>
                    <form onSubmit={handleDonationSubmit}>
                        {/* Donation options buttons */}
                        {/* ... */}
                        {/* Donation amount buttons */}
                        {/* ... */}
                        {/* Other donation amount input */}
                        {/* ... */}
                        <Button appearance="primary" marginTop={10} width={"100%"} height={50} backgroundColor={"#1300c1"} borderRadius={8}>
                            Donate Now
                        </Button>
                    </form>
                </Pane>
            </Card>
        )

    }
    return (
        <>
            <Navbar />
            <Pane display="flex" flexDirection="row">
                <Pane backgroundColor={"#1300c1"} height={650} width={'60%'} display="flex" alignItems={"center"} justifyContent="center" paddingY={100} paddingX={60}>
                    <Heading size={900} fontWeight={600} fontFamily={"meridian"} color={"#FFFFFF"}>
                        We can break the stigma and support those struggling with mental illness. <br /><br />
                        Your donation provides critical resources and helps us build a brighter future for mental health. <br /><br />
                        Donate today to create a world where mental health is a priority and everyone can lead a fulfilling life.<br />
                    </Heading>
                </Pane>
                <Pane backgroundColor={"#1300c1"} height={650} width={'40%'} display="flex" alignItems="center" justifyContent="center">
                    <Card height={550} width={'70%'} backgroundColor={'#8149FF'} elevation={3} padding={30} borderRadius={20}>
                        <Text fontSize={30} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'600'}>
                            Donate Now<br /><br />
                        </Text>

                        {donationSubmitted ?
                            <>
                                {clientSecret && (
                                    <>
                                        <Elements options={stripeOptions} stripe={stripePromise}>
                                            <CheckoutForm />
                                        </Elements>
                                        <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'300'}>
                                            Thank you for your donation of £{donationAmount || otherDonationAmount} {selectedValue === 'monthly' ? 'per month' : ''}.<br /><br /></Text>
                                    </>

                                )}


                            </>
                            :
                            <>
                                <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'300'}>
                                    This holiday season, your gift will be matched to provide double the lifesaving assistance<br /><br />
                                </Text>
                                <form onSubmit={handleDonationSubmit}>
                                    <Group display="flex" justifyContent="center" marginTop={20}>
                                        {options.map(({ label, value }) => (
                                            <Button
                                                height={50}
                                                key={label}
                                                width={200}
                                                isActive={selectedValue === value}
                                                onClick={() => setSelectedValue(value)}
                                                appearance={selectedValue === value ? 'primary' : 'minimal'}
                                                borderWidth={2}
                                                borderColor={"#FFFFFF"}
                                            >
                                                <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'500'}>
                                                    {label}
                                                </Text>
                                            </Button>
                                        ))}
                                    </Group>
                                    <Pane marginTop={20} display="flex" flexDirection="column" justifyContent="space-between">
                                        <Pane display="flex" justifyContent="space-between" paddingBottom={10}>
                                            <Button backgroundColor={donationAmount === '10' ? "#1300c1" : 'transparent'} onClick={() => handleDonationAmountChange('10')} paddingX={40} paddingY={20} border="2px solid #FFFFFF">
                                                <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'500'}>£10</Text>
                                            </Button>
                                            <Button backgroundColor={donationAmount === '20' ? "#1300c1" : 'transparent'} onClick={() => handleDonationAmountChange('20')} paddingX={40} paddingY={20} border="2px solid #FFFFFF">
                                                <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'500'}>£20</Text>
                                            </Button>
                                            <Button backgroundColor={donationAmount === '30' ? "#1300c1" : 'transparent'} onClick={() => handleDonationAmountChange('30')} paddingX={40} paddingY={20} border="2px solid #FFFFFF">
                                                <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'500'}>£30</Text>
                                            </Button>
                                        </Pane>
                                        <Pane display="flex" justifyContent="space-between" paddingTop={10}>
                                            <Button backgroundColor={donationAmount === '50' ? "#1300c1" : 'transparent'} onClick={() => handleDonationAmountChange('50')} paddingX={40} paddingY={20} border="2px solid #FFFFFF">
                                                <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'500'}>£50</Text>
                                            </Button>
                                            <Button backgroundColor={donationAmount === '75' ? "#1300c1" : 'transparent'} onClick={() => handleDonationAmountChange('75')} paddingX={40} paddingY={20} border="2px solid #FFFFFF">
                                                <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'500'}>£75</Text>
                                            </Button>
                                            <Button backgroundColor={donationAmount === '100' ? "#1300c1" : 'transparent'} onClick={() => handleDonationAmountChange('100')} paddingX={40} paddingY={20} border="2px solid #FFFFFF">
                                                <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'500'}>£100</Text>
                                            </Button>
                                        </Pane>
                                    </Pane>
                                    <TextInputField
                                        placeholder="Enter amount"
                                        inputHeight={45}
                                        value={otherDonationAmount}
                                        onChange={(event) => handleOtherDonationAmountChange(event)}
                                        marginTop={20}
                                        borderRadius={8}
                                    />
                                    <Button appearance="primary" marginTop={10} width={"100%"} height={50} backgroundColor={"#1300c1"} borderRadius={8}>
                                        Donate Now
                                    </Button>
                                </form>
                            </>
                        }

                    </Card>
                </Pane>

            </Pane>
            {/* Second bottomhalf */}
            <Pane display="flex" flexDirection="row">
                <Pane backgroundColor={"#FFFFFF"} height={1200} width={"100%"} display="flex" alignItems="center" flexWrap="wrap" justifyContent="center" >
                    <Heading size={900} marginTop={22} marginLeft={22}>Active Campaigns</Heading>
                    <Pane
                        display="flex"
                        flexDirection="row"
                        padding={10}
                    >
                        <Bard />
                        <Bard />
                        <Bard />
                        <Bard />

                    </Pane>
                    <Pane
                        display="flex"
                        flexDirection="row"
                        padding={10}
                    >
                        <Bard />
                        <Bard />
                        <Bard />
                        <Bard />

                    </Pane>
                <br></br>
                </Pane>
            </Pane>
            {/* Third bottomhalf  FAQs*/}
            <Pane display="flex" backgroundColor={"#71F5C4"} flexDirection="column" padding={16}>

                <Heading size={900} fontWeight={600} fontFamily="meridian" marginBottom={24}>
                    FAQs
                </Heading>

                <Pane backgroundColor="#1300c1" padding={24} marginBottom={24}>
                    <Heading size={700} fontWeight={600} fontFamily="meridian" color="#FFFFFF" marginBottom={16}>
                        Why choose to support a mental health charity?
                    </Heading>
                    <Text color="#FFFFFF" marginBottom={16}>
                        There are many reasons why someone might choose to support a mental health charity, including the fact that mental health affects everyone, there is often stigma and discrimination surrounding mental health issues, there is an increased need for mental health services, many people have personal experience with mental health issues, and supporting a charity can make a tangible difference in the lives of others.
                    </Text>
                </Pane>

                <Pane backgroundColor="#1300c1" padding={24} marginBottom={24}>
                    <Heading size={700} fontWeight={600} fontFamily="meridian" color="#FFFFFF" marginBottom={16}>
                        Why choose to support NPT Mind?
                    </Heading>
                    <Text color="#FFFFFF" marginBottom={16}>
                        NPT Mind is a local mental health charity that works for the better mental health of people in Neath Port Talbot by providing a range of services. If you want to fundraise for them, they will support you by providing you with fundraising materials, advice, and guidance. You can contact them by phone or email to get started.
                    </Text>
                </Pane>

                <Pane backgroundColor="#1300c1" padding={24} marginBottom={24}>
                    <Heading size={700} fontWeight={600} fontFamily="meridian" color="#FFFFFF" marginBottom={16}>
                        Can I choose which projects my money funds?
                    </Heading>
                    <Text color="#FFFFFF">
                        Yes, you can! You can choose to fundraise for a specific project or for the charity as a whole. If you want to fundraise for a specific project, you can select a specific project on the NPT Mind website and donate however much you want to.
                    </Text>
                </Pane>

            </Pane>

        </>
    );
};


export default HomePage;

