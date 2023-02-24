import { useMemo, useState } from 'react';
import { Navbar } from '../../components/navbar';
import { Card, Pane, Text, Image, TextInputField, Button, Heading, Group } from 'evergreen-ui';

const HomePage = () => {
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
    };

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
                    </Card>
                </Pane>

            </Pane>
            {/* Second bottomhalf */}
            <Pane display="flex" flexDirection="row">
                <Pane backgroundColor={"#71F5C4"} height={650} width={"100%"} display="flex" alignItems="center" justifyContent="center">
                    <Card
                        height={550}
                        width={"30%"}

                        backgroundColor={"#8149FF"}
                        elevation={3}
                        padding={0}
                        borderRadius={20}
                    >
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
                </Pane>
            </Pane>

        </>
    );
};

export default HomePage;

