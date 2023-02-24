export const login = async (emailAddress, password) => {

    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "emailAddress": emailAddress,
            "password": password
        })
    });

    return await loggedInResponse.json();

};
