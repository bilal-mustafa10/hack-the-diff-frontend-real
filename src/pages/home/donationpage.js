import {Button, Card, ChevronLeftIcon, Heading, IconButton, Image, Pane, Text, TextInputField} from 'evergreen-ui'
import {Navbar} from "../../components/navbar";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {login} from "../../auth/service";
import {useDispatch} from "react-redux";
import {setLogin} from "../../state";
import {Progress} from "react-sweet-progress";

const DonationPage = () => {
   const [donationId, setDonationId] = useState(null);
   const [trackClicked, setTrackClicked] = useState(false);

    return (
        <>
            <Navbar/>
            <Pane display="flex" flexDirection="row" height={900} width={'100%'}>
                <Pane backgroundColor={"#1300c1"} width={"100%"} display="flex" justifyContent="center" padding={100}>

                    <Card height={trackClicked ? 675: 350} width={'35%'} backgroundColor={'#FFFFFF'} elevation={10} padding={40}
                          borderRadius={20}>
                        {trackClicked &&
                            <IconButton onClick={() => {
                                setTrackClicked(false)
                            }} icon={ChevronLeftIcon}/>
                        }


                        {trackClicked ?
                            <>
                                <Heading size={400} marginTop={22} fontFamily={"meridian"} textAlign={"center"}>Thank you for your generous donation, your kindness makes a difference in the lives of those in need!</Heading>
                                <Card
                                    height={425}
                                    width={"100%"}
                                    margin={10}
                                    backgroundColor={"#8149FF"}
                                    elevation={3}
                                    borderRadius={20}
                                >
                                    <Image
                                        src={require('../../assets/images/camp6.png')}
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
                                            Mums Matter
                                        </Text>
                                        <Text
                                            fontSize={14}
                                            fontFamily={"meridian"}
                                            color={"#FFFFFF"}
                                            fontWeight={"300"}
                                            textAlign={"left"}
                                        >
                                            Help us offer a supportive space for new mothers
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
                                                25000
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
                                            percent={(25000 / 25000) * 100}
                                            color={"#8149FF"}
                                            height={30}
                                            borderRadius={20}
                                            style={{ position: "absolute", left: 0, bottom: 0 }}
                                        />
                                    </Pane>
                                </Card>

                                <Button
                                    margin={10}
                                    backgroundColor={"#1300c1"} color={"white"}
                                    height={45}
                                    width={"100%"}
                                    borderRadius={5}
                                    justifyContent={"center"}
                                    onClick={()=>{setTrackClicked(true)}}
                                >
                                    <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'600'}>Share on Social Media</Text>
                                </Button>

                            </>:
                            <>
                                <Pane marginTop={20}>
                                    <Text fontSize={30} fontFamily={"meridian"} color={"black"} fontWeight={'600'}>
                                        Track your donation
                                    </Text>
                                </Pane>
                                <TextInputField
                                    onChange={e => setDonationId(e.target.value)}
                                    value={donationId}
                                    marginTop={40}
                                    label="Donation ID"
                                    placeholder="XXXX-XXXX-XXXX-XXXX"
                                    fontFamily={"meridian"}
                                    fontSize={18}
                                    inputHeight={50}
                                />

                                <Button
                                    backgroundColor={"#1300c1"} color={"white"}
                                    height={45}
                                    width={"100%"}
                                    borderRadius={5}
                                    justifyContent={"center"}
                                    onClick={()=>{setTrackClicked(true)}}
                                >
                                    <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'600'}>Track</Text>
                                </Button>
                            </>
                        }
                    </Card>
                </Pane>

            </Pane>
        </>
    )

}


export default DonationPage;
