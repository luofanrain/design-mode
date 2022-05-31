#include<iostream>
#include "Product.h"
#include <string>
#include "Creator.h"

class ConcreteProduct1 :public Product
{
public:
	std::string Operation() const override
	{
		return "Result of the ConcreteProduct1";
	}
};

class ConcreteProduct2 :public Product
{
public:
	std::string Operation() const override
	{
		return "Result of the ConcreteProduct2";
	}
};

class ConcreteCreator1 :public Creator
{
public:
	Product* FactoryMethod() const override
	{
		return new ConcreteProduct1();
	}
};

class ConcreteCreator2 :public Creator
{
public:
	Product* FactoryMethod() const override
	{
		return new ConcreteProduct2();
	}
};

void ClientCode(const Creator& creator)
{
	std::cout << creator.SomeOperation() << std::endl;
}

int main(int argc, char** argv)
{
	{
		Creator* creator = new ConcreteCreator1();
		ClientCode(*creator);
		std::cout << std::endl;

		Creator* creator2 = new ConcreteCreator2();
		ClientCode(*creator2);

		delete creator;
		delete creator2;
	}
	return 0;
}