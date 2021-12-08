// Constructor Overloading

#include<bits/stdc++.h>

using namespace std;

class Complex{
	float real,img; //private

public:
	Complex():real(0),img(0){}; //c++ member intialized list
	Complex(float a){
		real = img = a;
	}
	Complex(float real,float img){
		this->real = real;
		this->img = img;
	}
	
	void display(){
		cout<<this->real<<" + j"<<this->img<<endl;
	}

	Complex sum(Complex c1,Complex c2){
		return Complex(c1.real+c2.real,c1.img + c2.img);
	}
};



int main(int argc, char const *argv[])
{
	Complex c1 = Complex(1,2);
	Complex c2 = Complex(3,4);

	Complex result;
	result = result.sum(c1,c2);
	result.display();
	
	return 0;
}