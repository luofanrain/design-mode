#pragma once

class Prototype
{
public:
	Prototype() {}
	~Prototype() {}

	virtual Prototype* Clone() const = 0;
};
