#pragma once
#include <string>

class AbstractProductA
{
public:
	virtual ~AbstractProductA() {}
	virtual std::string UsefulFunctionA() const = 0;
};

class AbstractProductB
{
public:
	virtual ~AbstractProductB() {}
	virtual std::string UsefulFunctionB() const = 0;
	virtual std::string AnotherUsefulFunctionB(const AbstractProductA& ProductA) const = 0;
};
