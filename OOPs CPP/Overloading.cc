#include <bits/stdc++.h>

using namespace std;

class printData
{
public:
	void print(int i)
	{
		cout << "Printing int: " << i << endl;
	}
	void print(double f)
	{
		cout << "Printing float: " << f << endl;
	}
	void print(string s)
	{
		cout << "Printing Character: " << s << endl;
	}
};

int main(int argc, char const *argv[])
{
	printData pd;

	pd.print(1);
	pd.print(1.0);
	pd.print("Hello");
	return 0;
}