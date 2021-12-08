#include<bits/stdc++.h>

using namespace std;
// abstract class => atleast one virtual function
// base class
class Shape{
public:
	virtual int getArea() = 0;
	void setWidth(int w){
		width = w;
	}

	void setHeight(int h){
		height = h;
	}

protected:
	int width,height;
};

// Derived Classes

class Rectangle: public Shape{
public:
	int getArea(){
		return (width * height);
	}
};

class Triangle: public Shape{
public:
	int getArea(){
		return (width*height)/2;
	}
};

int main(int argc, char const *argv[])
{
	Rectangle rect;
	Triangle tri;

	rect.setWidth(5);
	rect.setHeight(7);

	cout<<"Total Rectangler area: "<<rect.getArea()<<endl;
	tri.setWidth(5);
	tri.setHeight(6);

	//Print the area of the object.
	cout<<"Total Triangle area: "<<tri.getArea()<<endl;
	return 0;
}