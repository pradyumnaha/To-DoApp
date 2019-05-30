export class LoginService{
    private loginCredentials= [
        {
            userName: 'Pradyu',
            email: 'xyz1@abc.com',
            password: '123'
        },
        {
            userName: 'Belli',
            email: 'xyz2@abc.com',
            password: '1234'
        }
    ];

    getCredentials(){
        return this.loginCredentials.slice();
    }

}