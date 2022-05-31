#pragma once

#include "AbstractProduct.h"

class AbstractFactory
{
public:
	virtual AbstractProductA* CreateProductA() const = 0;
	virtual AbstractProductB* CreateProductB() const = 0;
};
