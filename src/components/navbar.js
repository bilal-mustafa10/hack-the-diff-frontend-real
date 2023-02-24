import { Pane, Heading, Button, Image } from 'evergreen-ui'

export const Navbar = () => {
    return (
        <Pane display="flex" padding={16} borderRadius={3} alignItems="center">
            <Pane flex={1} alignItems="center" display="flex">
                <Image src={require('../assets/images/logo.png')} alt="logo" height={40}/>
            </Pane>
            <Pane display="flex" alignItems="center">
                <Button borderColor={"#1300c1"} borderWidth={2} marginRight={16} height={44} borderRadius={8} alignSelf={"center"} appearance={"minimal"} color={"black"}>
                    Log in
                </Button>
                <Button marginRight={12} height={44} borderRadius={8} backgroundColor={"#1300c1"} color={"white"}>
                    Sign up
                </Button>
            </Pane>
        </Pane>
    )
}
