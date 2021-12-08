// Class and Objects

// Class => Logical Construct (Blueprint)
// Objects => Instance of a class

#include<bits/stdc++.h>
using namespace std;

class Rectangle{
	// default private
	int length,breadth;

public:
	void setLength(int length){
		this->length = length;
	}

	void setBreadth(int breadth){
		this->breadth = breadth;
	}

	int getLength(){
		return length;
	}

	int getBreadth(){
		return breadth;
	}

	void display(){
		cout<<"Rectangle with length = "<<length<<" and breadth = "<<breadth<<endl;
	}
};

int main(int argc, char const *argv[])
{
	Rectangle r;
	// Class Rectangle, Object r
	r.setLength(20);
	r.setBreadth(10);

	r.display();https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/

	return 0;
}