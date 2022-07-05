#pragma once

class Memento
{
public:
	virtual std::string GetName() const = 0;
	virtual std::string date() const = 0;
	virtual std::string state() const = 0;
};
