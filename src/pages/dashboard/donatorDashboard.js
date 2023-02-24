/// Dashboard for Donator
// This will show all the donations available for the donator to choose from
// This will also show the donations that the donator has already made

import {Card, Pane, Text, Image, TextInputField, Button, Heading, Group} from 'evergreen-ui';
import { Line } from 'rc-progress';
import { useMemo, useState } from 'react';
import { Navbar } from '../../components/navbar';

    
const ReturnBox = ({title, description, progress, strokeColor}) => {
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

    return(
        <>
            <Pane display="flex" flexDirection="row">
                <Pane backgroundColor={"#71F5C4"} height={650} width={"100%"} display="flex" alignItems="center" justifyContent="center">
                    <Card
                        height={550}
                        width={"100%"}
                        margin = {15}
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

        
    )
}


const DonatorDashboard = () => {
    return(
        <>
            <Heading size={900} marginTop={24} marginLeft={24}>Donator Dashboard</Heading>
            
            <Heading size={900} marginTop={22} marginLeft={22}>Available Donations</Heading>
            <Pane
                display="flex"
                flexDirection="row"
                padding={10}
                
            >
                <ReturnBox  title="Donation 1"  description="Campaign by Clara"  progress={80}/>
                <ReturnBox title="Donation 2" description="Campaign by John" progress={60}/>

                <ReturnBox title="Donation 3" description="Campaign by Sethu" progress={50}/>
                <ReturnBox  title="Donation 4" description="This is a description of donation 4" progress={40}/>
            </Pane>



        {/* next line should start in a new line */}
            
            
            <Heading size={900} marginTop={22} marginLeft={22}>My Donations</Heading>
            <Pane
                display="flex"
                flexDirection="row"
                padding={10}
                
            >
                <ReturnBox  title="Donation 1"  description="Campaign by Clara"  progress={80}/>
                <ReturnBox title="Donation 2" description="Campaign by John" progress={60}/>

                <ReturnBox title="Donation 3" description="Campaign by Sethu" progress={50}/>
                <ReturnBox  title="Donation 4" description="This is a description of donation 4" progress={40}/>
            </Pane>

         
        </>
    )
}

export default DonatorDashboard;

    