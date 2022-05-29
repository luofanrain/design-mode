#pragma once

#include <unordered_map>
#include "Prototype.h"
#include <type_traits>

class PrototypeFactory
{
public:
	void Register(const std::string& Type, Prototype* Proto);
	Prototype* CreatePrototype(const std::string& Type);

private:
	std::unordered_map<std::string, Prototype*> Prototypes_;
};

