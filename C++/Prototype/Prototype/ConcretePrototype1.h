#pragma once

#include "Prototype.h"

class ConcretePrototype1 :public Prototype
{
public:
	ConcretePrototype1(float param);
	~ConcretePrototype1();
	ConcretePrototype1(const ConcretePrototype1* const Origin);
	Prototype* Clone() const override;

	float GetField() const;

private:
	float _field_ = 0.0f;
};

