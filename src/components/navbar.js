import {Button, Image, Pane} from 'evergreen-ui';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setLogin, setLogout} from "../state";


export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.token);

    const signOut = () => {
        dispatch(setLogout());
        navigate('/');
    }

    const handleDashboard = () => {
        navigate('/dashboard/donater')
        /*if (isAuth.role === 'Donor'){
            navigate('/dashboard/donater')
        }else{
            navigate('/dashboard/fundraiser')
        }*/
    }

    return (
        <Pane display="flex" padding={16} borderRadius={3} alignItems="center">
            <Pane flex={1} alignItems="center" display="flex">
                <Image onClick={() => {
                    navigate('/')
                }} src={require('../assets/images/logo.png')} alt="logo" height={40}/>
            </Pane>

            {location.pathname !== '/signin' && location.pathname !== '/signup' && (
                <>
                    {isAuth ?
                        <>
                            <Pane display="flex" alignItems="center">
                                <Button borderColor={"#1300c1"} borderWidth={2} marginRight={16} height={44}
                                        borderRadius={8}
                                        alignSelf={"center"} appearance={"minimal"} color={"black"} onClick={()=>{navigate('/dashboard/fundraiser')}}>
                                    Fundraiser
                                </Button>
                                <Button borderColor={"#1300c1"} borderWidth={2} marginRight={16} height={44}
                                        borderRadius={8}
                                        alignSelf={"center"} appearance={"minimal"} color={"black"} onClick={()=>{navigate('/donation')}}>
                                    Track your donation
                                </Button>
                                <Button borderColor={"#1300c1"} borderWidth={2} marginRight={16} height={44}
                                        borderRadius={8}
                                        alignSelf={"center"} appearance={"minimal"} color={"black"} onClick={handleDashboard}>
                                    Dashboard
                                </Button>
                                <Button onClick={signOut} marginRight={12} height={44} borderRadius={8} backgroundColor={"#1300c1"}
                                        color={"white"}>
                                    Sign out
                                </Button>
                            </Pane>

                        </>
                        :
                        <Pane display="flex" alignItems="center">
                            <Button borderColor={"#1300c1"} borderWidth={2} marginRight={16} height={44}
                                    borderRadius={8}
                                    alignSelf={"center"} appearance={"minimal"} color={"black"} onClick={()=>{navigate('/donation')}}>
                                Track your donation
                            </Button>
                            <Button borderColor={"#1300c1"} borderWidth={2} marginRight={16} height={44}
                                    borderRadius={8}
                                    alignSelf={"center"} appearance={"minimal"} color={"black"} onClick={() => {
                                navigate('/signin')
                            }}>
                                Sign in
                            </Button>
                            <Button onClick={() => {
                                navigate('/signup')
                            }} marginRight={12} height={44} borderRadius={8} backgroundColor={"#1300c1"}
                                    color={"white"}>
                                Sign up
                            </Button>
                        </Pane>
                    }
                </>

            )}

        </Pane>
    )
}
