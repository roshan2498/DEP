#include<bits/stdc++.h>

using namespace std;

class Base{
public:
	Base(){
		cout<<"Object Created!!\n";
	}
	~Base(){
		cout<<"Object Destroyed!!\n";
	}
	virtual void show() = 0;
};

class Derived: public Base{
public:
	void show(){
		cout<<"Implementation of Virtual Derived in Derived Class\n";
	}
};

int main(int argc, char const *argv[])
{
	// Base obj; error cannot declare object here
	Base *b;
	Derived d;
	b = &d;

	b->show();
	return 0;
}