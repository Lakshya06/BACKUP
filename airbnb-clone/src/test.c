#include<stdio.h>
int main()
{
extern int i;
    i = 20;
    printf("%d", sizeof(i));
    return 0;
}

class ChildClass extends ParentClass{
    void showData(){
        System.out.println("Inside ChildClass showData() method");
        System.out.println("num = "+num);
    }
}

public class PurePolymorphism{

    public static void main(String[] args){
        ParentClass obj = new ParentClass();
        obj.showData();
        obj = new ChildClass();
        obj.showData();
    }
}