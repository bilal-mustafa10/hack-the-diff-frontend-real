/// Dashboard for Donator
// This will show all the donations available for the donator to choose from
// This will also show the donations that the donator has already made

import {Card, Pane, Text, Image, TextInputField, Button, Heading, Group, Avatar} from 'evergreen-ui';
import { Line } from 'rc-progress';
import { useMemo, useState } from 'react';
import { Navbar } from '../../components/navbar';
import {Progress} from "react-sweet-progress";

const completedData = [
    { image: require('../../assets/images/camp6.png'), title: "Mums Matter", description: "Help us offer a supportive space for new mothers", amountTarget: 25000, amountReceived: 25000 },
    { image: require('../../assets/images/camp2.png'), title: "Ysgol Bae Baglan Fun Day", description: "Help us offer free emotional and mental health support for Children and Young People", amountTarget: 5000, amountReceived: 2500 },
]


const FundraiserDashboard = () => {
    return(
        <>
            <Navbar/>
            <Pane height={650} display="flex" flexDirection="row">
                <Pane padding={30} backgroundColor={"#1300c1"} width={"100%"} display="flex" flexWrap="wrap">
                    <Pane width={"100%"} display="flex" padding={10}>
                        <Pane flex={1} alignItems="center" display="flex">
                            <Heading padding={5} size={900} fontFamily={"meridian"} textAlign={"left"} color={"white"}>My Campaigns</Heading>
                        </Pane>
                        <Pane alignItems="center">
                            <Button
                                backgroundColor={"#FF0071"}
                                color={"white"}
                                height={45}
                                borderRadius={5}
                            >
                                <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'600'}>New Campaign</Text>
                            </Button>

                        </Pane>
                    </Pane>


                    <Pane
                        display="flex"
                        flexDirection="row"
                        padding={5}
                        width={"100%"}
                        flexWrap="wrap"
                    >
                        {completedData.map((campaign) => (
                            <Card
                                key={campaign.id}
                                height={450}
                                width={"calc(25% - 30px)"}
                                margin={15}
                                backgroundColor={"#8149FF"}
                                elevation={3}
                                borderRadius={20}
                            >
                                <Image
                                    src={campaign.image}
                                    style={{
                                        width: "100%",
                                        borderRadius: "10px",
                                        height: "undefined",
                                        aspectRatio: 1.5,
                                        objectFit: "cover",
                                        objectPosition: "center",
                                    }}
                                    alt="Your image"
                                />
                                <Pane
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    padding={20}
                                >
                                    <Text
                                        textAlign={"center"}
                                        fontSize={20}
                                        fontFamily={"meridian"}
                                        color={"#FFFFFF"}
                                        fontWeight={"600"}
                                        marginBottom={10}
                                    >
                                        {campaign.title}
                                    </Text>
                                    <Text
                                        fontSize={14}
                                        fontFamily={"meridian"}
                                        color={"#FFFFFF"}
                                        fontWeight={"300"}
                                        textAlign={"left"}
                                    >
                                        {campaign.description}
                                    </Text>
                                </Pane>
                                <Pane
                                    position="relative"
                                    height={30}
                                    borderRadius={20}
                                    paddingX={10}
                                    marginX={15}
                                >
                                    <Pane position="absolute" left={0} bottom={-25}>
                                        <Text
                                            fontSize={14}
                                            fontFamily={"meridian"}
                                            color={"#FFFFFF"}
                                            fontWeight={"300"}
                                        >
                                            0
                                        </Text>
                                    </Pane>
                                    <Pane position="absolute" right={0} bottom={-25}>
                                        <Text
                                            fontSize={14}
                                            fontFamily={"meridian"}
                                            color={"#FFFFFF"}
                                            fontWeight={"300"}
                                        >
                                            {campaign.amountTarget}
                                        </Text>
                                    </Pane>
                                    <Progress
                                        theme={{
                                            success: {
                                                symbol: '🎉',
                                                color: '#71F5C4'
                                            },
                                            active: {
                                                symbol: '😀',
                                                color: '#FF0071'
                                            },
                                            default: {
                                                symbol: '😱',
                                                color: '#fbc630'
                                            }
                                        }}
                                        percent={(campaign.amountReceived / campaign.amountTarget) * 100}
                                        color={"#8149FF"}
                                        height={30}
                                        borderRadius={20}
                                        style={{ position: "absolute", left: 0, bottom: 0 }}
                                    />
                                </Pane>
                                <Pane marginTop={25} padding={10}>
                                    <Avatar name="Steve Jobs" size={40} marginRight={5} />
                                    <Avatar name="Bill Gates" size={40} marginRight={5} />
                                    <Avatar name="Elon Musk" size={40} marginRight={5} />
                                    <Avatar name="Allen Kleiner" color="green" size={40}/>
                                </Pane>
                            </Card>

                        ))}
                    </Pane>

                </Pane>
            </Pane>
        </>
    )
}

export default FundraiserDashboard;

