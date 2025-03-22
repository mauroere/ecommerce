module.exports = {
    getOAuthUrl: (clientId, redirectUri) => {
        return `https://oauth.provider.com/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
    },

    getAccessToken: async (code, clientId, clientSecret, redirectUri) => {
        const response = await fetch('https://oauth.provider.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            }),
        });
        return response.json();
    },

    getUserInfo: async (accessToken) => {
        const response = await fetch('https://api.provider.com/userinfo', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        return response.json();
    },
};