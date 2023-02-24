/// Dashboard for Donator
// This will show all the donations available for the donator to choose from
// This will also show the donations that the donator has already made

import {Pane, Text, Image, Heading, Button, Card, Avatar} from 'evergreen-ui';
import { Line } from 'rc-progress';
import { useMemo, useState } from 'react';
import { Navbar } from '../../components/navbar';
import {Progress} from "react-sweet-progress";

const completedData = [
    { image: require('../../assets/images/camp6.png'), title: "Mums Matter", description: "Help us offer a supportive space for new mothers", amountTarget: 25000, amountReceived: 25000 },
    { image: require('../../assets/images/camp2.png'), title: "Ysgol Bae Baglan Fun Day", description: "Help us offer free emotional and mental health support for Children and Young People", amountTarget: 5000, amountReceived: 2500 },
]

const availableData = [
    { image: require('../../assets/images/camp3.png'), title: "In It Together", description: "Help us fund a festival focused on wellness and meditation", amountTarget: 2600, amountReceived: 2000 },
    { image: require('../../assets/images/camp4.png'), title: "Retreat", description: "Help us fund events based on wellness and meditation", amountTarget: 24000, amountReceived: 15000 },
    { image: require('../../assets/images/camp5.png'), title: "Young Minds Project", description: "Help us offer a range of free emotional and mental health support for young adults", amountTarget: 18000, amountReceived: 15000 },
    { image: require('../../assets/images/camp.png'), title: "ASICS Couch to 5k", description: "Help us fun runners for better mental health and support them", amountTarget: 2566, amountReceived: 500 },
    { image: require('../../assets/images/camp6.png'), title: "Mums Matter", description: "Help us offer a supportive space for new mothers", amountTarget: 25000, amountReceived: 6000 },
    { image: require('../../assets/images/camp2.png'), title: "Ysgol Bae Baglan Fun Day", description: "Help us offer free emotional and mental health support for Children and Young People", amountTarget: 5000, amountReceived: 2500 }
]

const DonatorDashboard = () => {
    return(
        <>
            <Navbar />
            <Pane height={650} display="flex" flexDirection="row">
                <Pane padding={30} backgroundColor={"#1300c1"} width={"100%"} display="flex" flexWrap="wrap">
                    <Heading padding={5} size={900} fontFamily={"meridian"} textAlign={"left"} color={"white"}>My Donations</Heading>
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
                                height={465}
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
                                <Pane marginTop={30} padding={10}>
                                    <Avatar name="Steve Jobs" size={30} marginRight={5} />
                                    <Avatar name="Bill Gates" size={30} marginRight={5} />
                                    <Avatar name="Elon Musk" size={30} marginRight={5} />
                                    <Avatar name="Allen Kleiner" color="green" size={30}/>
                                </Pane>
                            </Card>

                        ))}
                    </Pane>

                </Pane>
            </Pane>
            <Pane height={1100} display="flex" flexDirection="row">
                <Pane padding={30} backgroundColor={"#71F5C4"} width={"100%"} display="flex" flexWrap="wrap">
                    <Heading padding={5} size={900} fontFamily={"meridian"} textAlign={"left"} color={"white"}>Available Donations</Heading>
                    <Pane
                        display="flex"
                        flexDirection="row"
                        padding={5}
                        width={"100%"}
                        flexWrap="wrap"
                    >
                        {availableData.map((campaign) => (
                            <Card
                                key={campaign.id}
                                height={465}
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
                                <Pane marginTop={30} padding={10}>
                                    <Avatar name="Steve Jobs" size={30} marginRight={5} />
                                    <Avatar name="Bill Gates" size={30} marginRight={5} />
                                    <Avatar name="Elon Musk" size={30} marginRight={5} />
                                    <Avatar name="Allen Kleiner" color="green" size={30}/>
                                </Pane>
                            </Card>

                        ))}
                    </Pane>

                </Pane>
            </Pane>
        </>
    )
}

export default DonatorDashboard;

