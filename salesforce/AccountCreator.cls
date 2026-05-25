public with sharing class AccountCreator {
    public class AccountRequest {
        public String name;
        public String phone;
        public String website;
        public String industry;
    }

    public static Id createAccount(AccountRequest requestData) {
        if (requestData == null || String.isBlank(requestData.name)) {
            throw new AuraHandledException('Account name is required.');
        }

        Account newAccount = new Account(
            Name = requestData.name,
            Phone = requestData.phone,
            Website = requestData.website,
            Industry = requestData.industry
        );

        insert newAccount;
        return newAccount.Id;
    }
}
