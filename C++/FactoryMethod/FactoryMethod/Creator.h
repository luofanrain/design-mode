#pragma once
#include "Product.h"

class Creator
{
public:
	~Creator() {}
	virtual Product* FactoryMethod() const = 0;

	std::string SomeOperation() const
	{
		Product* product = this->FactoryMethod();
		std::string result = "Creator: The same creator's code has just worked with " + product->Operation();
		delete product;
		return result;
	}
};
