/// Dashboard for Donator
// This will show all the donations available for the donator to choose from
// This will also show the donations that the donator has already made

import {Card, Pane, Text, Image, TextInputField, Button, Heading, Group} from 'evergreen-ui';
import { Line } from 'rc-progress';

const ReturnBox = ({title, description, progress, strokeColor}) => {
    return(
        <>
            <Pane
            elevation={3}
            float="left"
            width={330}
            height={300}
            margin={24}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            strokeColor="#09eb45"
            >
                <Image src={require('../../assets/images/camp.png')} alt="logo" height="65%"/>
                <Heading size={50 }> {title}</Heading>
                <Text size={10 }> {description}</Text>
                <Line percent={progress} strokeWidth={2} strokeColor={strokeColor} />
            </Pane>
  
        </>

        
    )
}


const DonatorDashboard = () => {
    return(
        <>
            <Heading size={900} marginTop={24} marginLeft={24}>Donator Dashboard</Heading>
            
            <Heading size={900} marginTop={22} marginLeft={22}>Available Donations</Heading>
            <ReturnBox title="Donation 1" description="Campaign by Clara" progress={80}/>
            <ReturnBox title="Donation 2" description="Campaign by John" progress={60}/>
            <ReturnBox title="Donation 3" description="Campaign by Sethu" progress={50}/>
            <ReturnBox title="Donation 4" description="This is a description of donation 4" progress={40}/>

        {/* next line should start in a new line */}
            
            
            <Heading size={900} marginTop={22} marginLeft={22}>My Donations</Heading>
            <ReturnBox title="Donation 1" description="This is a description of donation 1" progress={99} strokeColor="#2df580"/>
            <ReturnBox title="Donation 2" description="This is a description of donation 2" progress={99} strokeColor="#2df580"/>
            <ReturnBox title="Donation 3" description="This is a description of donation 3" progress={99} strokeColor="#2df580"/>
            <ReturnBox title="Donation 4" description="This is a description of donation 4" progress={99} strokeColor="#2df580"/>


         
        </>
    )
}

export default DonatorDashboard;

    