// React component for the sign in page

// Place this in the middle of the page
import { Button } from 'evergreen-ui'
import { TextInputField } from 'evergreen-ui'

const SignUp = () => {
    return(
        <>
            <TextInputField
            label="First Name"
            placeholder="First Name"
            fontFamily={"meridian"}
            fontSize={18}
            />
            <TextInputField
            label="Last Name"
            placeholder="Last Name"
            fontFamily={"meridian"}
            fontSize={18}
            />
            <TextInputField
            label="Email"
            placeholder="Email"
            fontFamily={"meridian"}
            fontSize={18}
            />
            <TextInputField
            label="Password"
            placeholder="Password"
            type="password"
            fontFamily={"meridian"}
            fontSize={18}
            />

            <TextInputField
            label="Phone Number"
            placeholder="Phone Number"
            type="number"
            fontFamily={"meridian"}
            fontSize={18}
            />

            <Button marginRight={16} appearance="primary">
                Submit
            </Button>

        </>



        // submit button    

    )

}


export default SignUp;