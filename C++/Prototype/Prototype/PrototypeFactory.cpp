#include "PrototypeFactory.h"

void PrototypeFactory::Register(const std::string& Type, Prototype* Proto)
{
	Prototypes_[Type] = Proto;
}

Prototype* PrototypeFactory::CreatePrototype(const std::string& Type)
{
	return Prototypes_[Type]->Clone();
}
