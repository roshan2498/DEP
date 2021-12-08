#include<bits/stdc++.h>

using namespace std;

class Complex{
	int real,img;

public:
	Complex(int real=0,int img=0){
		this->real = real;
		this->img = img;
	}

	void print(){
		cout<<this->real<<" + "<<this->img<<"j"<<endl;
	}

	// Overloading + operator
	// c1 + c2
	Complex operator +(Complex const &c2){
		return Complex(this->real + c2.real, this->img + c2.img);
	}

	friend istream &operator >>(istream &in,Complex &c){
		in>>c.real>>c.img;
		return in;
	}
};


int main(int argc, char const *argv[])
{
	Complex c1(1,2);
	Complex c2(2,3);
	Complex result = c1 + c2;
	result.print();

	Complex d;
	cin>>d;
	d.print();
	return 0;
}