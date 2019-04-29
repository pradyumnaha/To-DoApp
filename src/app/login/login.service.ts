export class LoginService{
    private loginCredentials= [
        {
            userName: 'Pradyu',
            email: 'pradyu@gmail.com',
            password: '123'
        },
        {
            userName: 'Belli',
            email: 'belli@gmail.com',
            password: '1234'
        }
    ];

    getCredentials(){
        return this.loginCredentials.slice();
    }

}