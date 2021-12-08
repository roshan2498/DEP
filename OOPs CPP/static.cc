#include<bits/stdc++.h>

using namespace std;

class Box {
   public:
      static int objectCount;
      
      // Constructor
      Box(double l = 2.0, double b = 2.0, double h = 2.0) {
         cout <<"Constructor called." << endl;
         length = l;
         breadth = b;
         height = h;
         
         // increment every time obj is created
         objectCount++;
      }
      double Volume() {
         return length * breadth * height;
      }
      
   private:
      double length;     // Length
      double breadth;    // Breadth
      double height;     // Height of a box
};

// Initialize static member of class Box
int Box::objectCount = 0;

int main(int argc, char const *argv[])
{
   Box Box1(3.3, 1.2, 1.5);    // Declare box1
   Box Box2(8.5, 6.0, 2.0);    // Declare box2

   // Print total number of objects.
   cout << "Total objects: " << Box::objectCount << endl;

   return 0;
}