@IsTest
private class AccountCreatorTest {
    @IsTest
    static void createAccount_insertsNewAccount() {
        AccountCreator.AccountRequest requestData = new AccountCreator.AccountRequest();
        requestData.name = 'Acme Demo Account';
        requestData.phone = '1234567890';
        requestData.website = 'https://example.com';
        requestData.industry = 'Technology';

        Test.startTest();
        Id accountId = AccountCreator.createAccount(requestData);
        Test.stopTest();

        Account savedAccount = [
            SELECT Id, Name, Phone, Website, Industry
            FROM Account
            WHERE Id = :accountId
        ];

        System.assertEquals('Acme Demo Account', savedAccount.Name);
        System.assertEquals('1234567890', savedAccount.Phone);
        System.assertEquals('https://example.com', savedAccount.Website);
        System.assertEquals('Technology', savedAccount.Industry);
    }

    @IsTest
    static void createAccount_throwsWhenNameMissing() {
        AccountCreator.AccountRequest requestData = new AccountCreator.AccountRequest();

        try {
            AccountCreator.createAccount(requestData);
            System.assert(false, 'Expected an exception when account name is missing.');
        } catch (Exception ex) {
            System.assert(ex.getMessage().contains('Account name is required.'));
        }
    }
}
