#include <iostream>
#include "PrototypeFactory.h"
#include "ConcretePrototype1.h"
#include "ConcretePrototype2.h"

int main(int argc, char** argv)
{
	{
		PrototypeFactory* prototype_factory = new PrototypeFactory();

		ConcretePrototype1* concrete_prototype1_1 = new ConcretePrototype1(5.0f);
		std::cout << concrete_prototype1_1->GetField() << std::endl;

		ConcretePrototype2* concrete_prototype2_1 = new ConcretePrototype2("huanglachuan");
		std::cout << concrete_prototype2_1->GetField() << std::endl;

		prototype_factory->Register("ConcretePrototype1", concrete_prototype1_1);
		prototype_factory->Register("ConcretePrototype2", concrete_prototype2_1);
		ConcretePrototype1* concrete_prototype1_2 = dynamic_cast<ConcretePrototype1*>(concrete_prototype1_1->Clone());
		std::cout << concrete_prototype1_2->GetField() << std::endl;
		ConcretePrototype2* concrete_prototype2_2 = dynamic_cast<ConcretePrototype2*>(concrete_prototype2_1->Clone());
		std::cout << concrete_prototype2_2->GetField() << std::endl;

		delete concrete_prototype2_2;
		delete concrete_prototype2_1;

		delete concrete_prototype1_2;
		delete concrete_prototype1_1;
		delete prototype_factory;
	}
	return 0;
}