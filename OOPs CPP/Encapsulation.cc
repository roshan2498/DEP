// Encapsulation = Abstraction + Datahiding
// wrapping of data member and member functions together.

#include<bits/stdc++.h>

using namespace std;

class Student{
public:
	string name;
	int rollNumber;
	float grades[5]; //grades of five subjects out of 5.0

	void display(){
		cout<<"Name: "<<name<<endl;
		cout<<"RollNumber: "<<rollNumber<<endl;
		cout<<"Grades: ";
		for(int i=0;i<5;i++){
			cout<<grades[i]<<", "[i == 4];
		}
	}
};

// in above class we have 3 members
// and one member function displa();

int main(int argc, char const *argv[])
{
	// class initialisation since members are public so they are avail later we will use constructor.
	Student s1;
	s1.name = "Roshan";
	s1.rollNumber = 22;
	float temp_grades[] = {7.0,8.0,9.0,8.2,7.9};
	for(int i=0;i<5;i++){
		s1.grades[i] = temp_grades[i];
	}


	s1.display();
	return 0;
}