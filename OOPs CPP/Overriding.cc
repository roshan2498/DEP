#include<bits/stdc++.h>

using namespace std;

class Base{
public:
	void print(){
		cout<<"Base Print Function...\n";
	}
};

class Derived : public Base{
public:
	//override
	void print(){
		cout<<"Derived Print Function...\n";
	}
};

int main(int argc, char const *argv[])
{
	Derived d1,d2;
	d1.print();
	d2.Base::print();

	// call overriden function using pointer
	Base *b = &d1;
	b->print();
	// pointer points to derived it is of the type base
	return 0;
}