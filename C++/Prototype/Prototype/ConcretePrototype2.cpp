#include "ConcretePrototype2.h"

ConcretePrototype2::ConcretePrototype2(const std::string& param)
	:_field_(param)
{

}

ConcretePrototype2::ConcretePrototype2(const ConcretePrototype2* const Origin)
	:_field_(Origin->_field_)
{

}

Prototype* ConcretePrototype2::Clone() const
{
	return new ConcretePrototype2(this);
}

const std::string& ConcretePrototype2::GetField() const
{
	return _field_;
}

ConcretePrototype2::~ConcretePrototype2()
{

}

