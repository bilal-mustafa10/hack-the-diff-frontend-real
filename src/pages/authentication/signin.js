import {Button, Card, ChevronLeftIcon, IconButton, Pane, Text, TextInputField} from 'evergreen-ui'
import {Navbar} from "../../components/navbar";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {login} from "../../auth/service";
import {useDispatch} from "react-redux";
import {setLogin} from "../../state";

const SignIn = () => {
    const [email, setEmail] = useState({value: '', error: ''});
    const [password, setPassword] = useState({value: '', error: ''});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        console.log("email:", email.value);

        const loggedIn  = await login(email.value, password.value);

        if (loggedIn){
            dispatch(
                setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token,
                })
            );

            if (loggedIn.user.role === 'Donor'){
                navigate('/dashboard/donater')
            }else{
                navigate('/dashboard/fundraiser')
            }
        }
    }


    return (
        <>
            <Navbar/>
            <Pane display="flex" flexDirection="row" height={900} width={'100%'}>
                <Pane backgroundColor={"#1300c1"} width={"100%"} display="flex" justifyContent="center" padding={100}>

                    <Card height={550} width={'35%'} backgroundColor={'#FFFFFF'} elevation={10} padding={40}
                          borderRadius={20}>
                        <IconButton onClick={() => {
                            navigate('/')
                        }} icon={ChevronLeftIcon}/>
                        <Pane marginTop={20}>
                            <Text fontSize={30} fontFamily={"meridian"} color={"black"} fontWeight={'600'}>
                                Sign In
                            </Text>
                        </Pane>

                        <TextInputField
                            onChange={e => setEmail({value: e.target.value, error: ''})}
                            value={email.value}
                            marginTop={40}
                            label="Email Address"
                            placeholder="johndoe@mail.com"
                            fontFamily={"meridian"}
                            fontSize={18}
                            inputHeight={50}
                        />

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
                                    height={40}
                                    borderRadius={5}
                                    onClick={() => {
                                        console.log("hello")
                                    }}
                                >
                                    <Text fontSize={14} fontFamily={"meridian"} color={"black"} fontWeight={'500'}>Forgot
                                        your password?</Text>
                                </Button>
                            </Pane>
                            <Button
                                backgroundColor={"#1300c1"} color={"white"}
                                height={40}
                                borderRadius={5}
                                onClick={handleLogin}
                            >
                                <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'600'}>Sign
                                    In</Text>
                            </Button>
                        </Pane>
                        <Pane display={"flex"} justifyContent={"center"} margin={30}>
                            <Text fontSize={18} fontFamily={"meridian"} color={"black"} fontWeight={'600'}
                                  alignSelf={"center"}>OR</Text>
                        </Pane>
                        <Button
                            backgroundColor={"#1300c1"} color={"white"}
                            height={45}
                            width={"100%"}
                            borderRadius={5}
                            justifyContent={"center"}
                            onClick={() => {
                                navigate('/signup')
                            }}
                        >
                            <Text fontSize={18} fontFamily={"meridian"} color={"#FFFFFF"} fontWeight={'600'}>Sign
                                Up</Text>
                        </Button>

                    </Card>
                </Pane>

            </Pane>
        </>
    )

}


export default SignIn;
