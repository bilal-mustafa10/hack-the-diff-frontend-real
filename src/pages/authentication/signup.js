// React component for the sign in page

// Place this in the middle of the page
import {Button, Card, ChevronLeftIcon, Group, IconButton, Pane, Text} from 'evergreen-ui'
import { TextInputField } from 'evergreen-ui'
import {Navbar} from "../../components/navbar";
import {useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState({value: '', error: ''});
    const [password, setPassword] = useState({value: '', error: ''});
    const [firstName, setFirstName] = useState({value: '', error: ''});
    const [lastName, setLastName] = useState({value: '', error: ''});
    const [role, setRole] = useState('fundraiser');
    const [phoneNumber, setPhoneNumber] = useState({value: '', error: ''});
    const navigate = useNavigate();

  // options without useMemo
    const options = [
        { label: 'Fundraising', value: 'fundraiser' },
        { label: 'Donating', value: 'donater' },
    ]


    /*const options = useMemo(
        () => [
            { label: 'Fundraising', value: 'fundraiser' },
            { label: 'Donating', value: 'donater' },
        ],
        []
    )*/

    return(
        <>
            <Navbar/>
            <Pane display="flex" flexDirection="row" height={900} width={'100%'}>
                <Pane backgroundColor={"#1300c1"} width={"100%"} display="flex" justifyContent="center" padding={100}>
                    <Card height={600} width={'50%'} backgroundColor={'#FFFFFF'} elevation={10} padding={40} borderRadius={20}>
                        <IconButton onClick={()=>{navigate('/')}} icon={ChevronLeftIcon}  />
                        <Pane marginTop={20}>
                            <Text fontSize={30} fontFamily={"meridian"} color={"black"} fontWeight={'600'}>
                                Sign Up
                            </Text>
                        </Pane>

                        <form onSubmit={()=>{}}>
                            <Group display="flex" justifyContent="flex-start" marginTop={20}>
                                {options.map(({ label, value }) => (
                                    <Button
                                        height={50}
                                        key={label}
                                        width={200}
                                        isActive={role === value}
                                        onClick={() => setRole(value)}
                                        appearance={role === value ? 'primary' : 'minimal'}
                                        borderWidth={2}
                                        borderColor={"#FFFFFF"}
                                    >
                                        <Text fontSize={18} fontFamily={"meridian"} color={role === value ? "#FFFFFF" : 'black'} fontWeight={'500'}>
                                            {label}
                                        </Text>
                                    </Button>
                                ))}
                            </Group>
                            <Pane display={"flex"} flexDirection={'row'}>
                                <TextInputField
                                    onChange={e => setFirstName({value: e.target.value, error: ''})}
                                    value={firstName.value}
                                    marginTop={40}
                                    label="First Name"
                                    placeholder="John"
                                    fontFamily={"meridian"}
                                    fontSize={18}
                                    inputHeight={50}
                                    width={"50%"}
                                    marginRight={30}
                                />

                                <TextInputField
                                    onChange={e => setLastName({value: e.target.value, error: ''})}
                                    value={lastName.value}
                                    marginTop={40}
                                    label="Last Name"
                                    placeholder="Doe"
                                    fontFamily={"meridian"}
                                    fontSize={18}
                                    inputHeight={50}
                                    width={"50%"}
                                />
                            </Pane>

                            <Pane display={"flex"} flexDirection={'row'}>
                                <TextInputField
                                    onChange={e => setPhoneNumber({value: e.target.value, error: ''})}
                                    value={phoneNumber.value}
                                    label="Phone Number"
                                    placeholder="XXXX-XXXX-XXXXX"
                                    fontFamily={"meridian"}
                                    fontSize={18}
                                    inputHeight={50}
                                    width={"50%"}
                                    marginRight={30}
                                />


                                <TextInputField
                                    onChange={e => setEmail({value: e.target.value, error: ''})}
                                    value={email.value}
                                    label="Email Address"
                                    placeholder="johndoe@mail.com"
                                    fontFamily={"meridian"}
                                    fontSize={18}
                                    inputHeight={50}
                                    width={"50%"}
                                />
                            </Pane>



                            <TextInputField
                                onChange={e => setPassword({value: e.target.value, error: ''})}
                                value={password.value}
                                label="Password"
                                placeholder="Password"
                                type="password"
                                fontFamily={"meridian"}
                                fontSize={18}
                                inputHeight={50}

                            />

                            <Pane display="flex" margin={0} marginBottom={20} borderRadius={3}>
                                <Pane flex={1} alignItems="center" display="flex">
                                    <Button
                                        color={"black"}
                                        height={45}
                                        width={"50%"}
                                        borderRadius={5}
                                        justifyContent={"center"}
                                        onClick={() => { navigate('/signin')}}

                                    >
                                        <Text fontSize={18} fontFamily={"meridian"} color={"black"} fontWeight={'600'}>Sign
                                            In</Text>
                                    </Button>
                                </Pane>
                                <Button
                                    backgroundColor={"#1300c1"} color={"white"}
                                    height={45}
                                    borderRadius={5}
                                    onClick={() => { navigate('/signin')}}
                                >
                                    <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'600'}>Sign Up</Text>
                                </Button>
                            </Pane>
                        </form>
                    </Card>
                </Pane>

            </Pane>
        </>
    )

}


export default SignUp;
