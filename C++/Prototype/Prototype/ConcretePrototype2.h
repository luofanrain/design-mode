#pragma once

#include "Prototype.h"
#include <string>

class ConcretePrototype2 :public Prototype
{
public:
	ConcretePrototype2(const std::string& param);
	~ConcretePrototype2();
	ConcretePrototype2(const ConcretePrototype2* const Origin);
	Prototype* Clone() const override;
	const std::string& GetField() const;

public:
	std::string _field_;
};

