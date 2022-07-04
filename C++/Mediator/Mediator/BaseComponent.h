#pragma once

class Mediator;

class BaseComponent
{
public:
	BaseComponent(Mediator* mediator = nullptr) : mediator_(mediator) {}

	void set_mediator(Mediator* mediator)
	{
		this->mediator_ = mediator;
	}

protected:
	Mediator* mediator_;
};
