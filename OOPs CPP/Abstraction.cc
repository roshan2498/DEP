// Hiding internal details and showing functionality
// 
#include<bits/stdc++.h>

using namespace std;
#define ll long long int
// Data Hiding using access modifiers(public,protected,private(default))

class ATM{
private:
	int PIN;
public:
	ll accountNumber;
	void set(ll accountNumber,int PIN){
		this->accountNumber = accountNumber;
		this->PIN = PIN;
	}
	void displayAccountNumber(){
		cout<<"A/c No: "<<accountNumber<<endl;
	}
};
int main(int argc, char const *argv[])
{
	ATM a;
	a.set(78907432703,1928);
	// cout<<a.PIN<<endl; C.E: can't access outside class private member
	a.displayAccountNumber();
	return 0;
}