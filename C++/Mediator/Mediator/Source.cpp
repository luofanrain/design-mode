#include<iostream>
#include "BaseComponent.h"
#include "Mediator.h"
#include <string>

class Component1 : public BaseComponent
{
public:
	void DoA()
	{
		std::cout << "Component 1 does A.\n";
		this->mediator_->Notify(this, "A");
	}

	void DoB()
	{
		std::cout << "Component 1 does B.\n";
		this->mediator_->Notify(this, "B");
	}
};

class Component2 : public BaseComponent
{
public:
	void DoC()
	{
		std::cout << "Component 2 does C.\n";
		this->mediator_->Notify(this, "C");
	}

	void DoD()
	{
		std::cout << "Component 2 does D.\n";
		this->mediator_->Notify(this, "D");
	}
};

class ConcreteMediator : public Mediator
{
public:
	ConcreteMediator(Component1* c1, Component2* c2) :component1_(c1), component2_(c2)
	{
		this->component1_->set_mediator(this);
		this->component2_->set_mediator(this);
	}

	void Notify(BaseComponent* sender, std::string event) const override
	{
		if ("A" == event)
		{
			std::cout<<"Mediator reacts on A and triggers following operations:\n";
			this->component2_->DoC();
		}
		if ("D" == event)
		{
			std::cout<<"Mdiator reacts on D and triggers following operations:\n";
			this->component1_->DoB();
			this->component2_->DoC();
		}
	}

private:
	Component1* component1_;
	Component2* component2_;
};

void ClientCode()
{
	Component1* c1 = new Component1;
	Component2* c2 = new Component2;
	ConcreteMediator* mediator = new ConcreteMediator(c1,c2);
	std::cout<<"Client triggers operation A.\n";
	c1->DoA();
	std::cout<<"\n";
	std::cout<<"Client triggers operation D.\n";
	c2->DoD();

	delete c1;
	delete c2;
	delete mediator;
}

int main(int argc, char** argv)
{
	{
		ClientCode();
	}
	return 0;
}
