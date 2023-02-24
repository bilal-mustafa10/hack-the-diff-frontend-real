import {useMemo, useState} from 'react';
import { Navbar } from '../../components/navbar';
import {Card, Pane, Text, TextInputField, Button, Heading, Group} from 'evergreen-ui';

const HomePage = () => {
    const [donationAmount, setDonationAmount] = useState('');
    const [donationSubmitted, setDonationSubmitted] = useState(false);
    const [selectedValue, setSelectedValue] = useState('onetime');

    const options = useMemo(
        () => [
            { label: 'One Time', value: 'onetime' },
            { label: 'Monthly', value: 'monthly' },
        ],
        []
    )


    const handleDonationSubmit = (event) => {
        event.preventDefault();
        setDonationSubmitted(true);
    };

    return (
        <>
            <Navbar />
            <Pane display="flex" flexDirection="row">
                <Pane backgroundColor={"#FFCDD9"} height={600} width={'60%'} display="flex" alignItems={"center"} justifyContent="center" paddingY={100} paddingX={60}>
                    <Heading size={900} fontWeight={600} fontFamily={"meridian"}>
                        We can break the stigma and support those struggling with mental illness. <br/><br/>
                        Your donation provides critical resources and helps us build a brighter future for mental health. <br/><br/>
                        Donate today to create a world where mental health is a priority and everyone can lead a fulfilling life.<br/>
                    </Heading>
                </Pane>
                <Pane backgroundColor={"#FFCDD9"} height={600} width={'40%'} display="flex" alignItems="center" justifyContent="center">
                    <Card height={500} width={'75%'} backgroundColor={'white'} elevation={3} padding={30} borderRadius={20}>
                        <Text fontSize={24} fontFamily={"meridian"} color={"black"} fontWeight={'500'}>
                            Donate Now<br/><br/>
                        </Text>
                        <Text fontSize={18} fontFamily={"meridian"} color={"black"} fontWeight={'300'}>
                            This holiday season, your gift will be matched to provide double the lifesaving assistance<br/><br/>
                        </Text>
                        <form onSubmit={handleDonationSubmit}>
                            <Group>
                                {options.map(({ label, value }) => (
                                    <Button key={label} isActive={selectedValue === value} onClick={() => setSelectedValue(value)}>
                                        {label}
                                    </Button>
                                ))}
                            </Group>
                            <Pane marginTop={20} display="flex" justifyContent="space-between">
                                <Button appearance="minimal" onClick={() => setDonationAmount('10')}>
                                    £10
                                </Button>
                                <Button appearance="minimal" onClick={() => setDonationAmount('20')}>
                                    £20
                                </Button>
                                <Button appearance="minimal" onClick={() => setDonationAmount('30')}>
                                    £30
                                </Button>
                                <Button appearance="minimal" onClick={() => setDonationAmount('50')}>
                                    £50
                                </Button>
                                <Button appearance="minimal" onClick={() => setDonationAmount('75')}>
                                    £75
                                </Button>
                                <Button appearance="minimal" onClick={() => setDonationAmount('100')}>
                                    £100
                                </Button>
                            </Pane>
                            <TextInputField
                                label="Other amount"
                                placeholder="Enter amount"
                                value={donationAmount}
                                onChange={(event) => setDonationAmount(event.target.value)}
                                marginTop={20}
                            />
                            <Button appearance="primary" marginTop={20}>
                                Donate Now
                            </Button>
                        </form>
                    </Card>
                </Pane>
            </Pane>
        </>
    );
};

export default HomePage;

