#include "ConcretePrototype1.h"

ConcretePrototype1::ConcretePrototype1(const ConcretePrototype1* const Origin)
	:_field_(Origin->_field_)
{

}

ConcretePrototype1::ConcretePrototype1(float param)
	:_field_(param)
{

}

ConcretePrototype1::~ConcretePrototype1()
{

}

Prototype* ConcretePrototype1::Clone() const
{
	return new ConcretePrototype1(this);
}

float ConcretePrototype1::GetField() const
{
	return _field_;
}
