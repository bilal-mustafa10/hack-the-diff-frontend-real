import {Button, Image, Pane} from 'evergreen-ui';
import {useLocation, useNavigate} from "react-router-dom";


export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname);
    return (
        <Pane display="flex" padding={16} borderRadius={3} alignItems="center">
            <Pane flex={1} alignItems="center" display="flex">
                <Image onClick={() => {
                    navigate('/')
                }} src={require('../assets/images/logo.png')} alt="logo" height={40}/>
            </Pane>

            {location.pathname !== '/login' && location.pathname !== '/authentication/signup' && (
                <Pane display="flex" alignItems="center">
                    <Button borderColor={"#1300c1"} borderWidth={2} marginRight={16} height={44} borderRadius={8}
                            alignSelf={"center"} appearance={"minimal"} color={"black"} onClick={() => {
                        navigate('/login')
                    }}>
                        Log in
                    </Button>
                    <Button marginRight={12} height={44} borderRadius={8} backgroundColor={"#1300c1"} color={"white"}>
                        Sign up
                    </Button>
                </Pane>
            )}

        </Pane>
    )
}
