#include<iostream>
#include <time.h>
#include "Memento.h"
#include <vector>

class ConcreteMomento : public Memento
{
public:
	ConcreteMomento(std::string state) : state_(state)
	{
		time_t now = time(NULL);
		char str[26];
		this->date_ = ctime_s(str, sizeof str, &now);
	}

	std::string state() const override
	{
		return this->state_;
	}

	std::string GetName() const override
	{
		return this->date_ + "/(" + this->state_.substr(0, 9) + "...)";
	}

	std::string date() const override
	{
		return this->date_;
	}

private:
	std::string state_;
	std::string date_;
};

class Originator
{
public:
	Originator(std::string state) : state_(state)
	{
		std::cout << "Originator: My initial state is: " << this->state_ << "\n";
	}

	void DoSomething()
	{
		std::cout << "Originator: I'm doing something important.\n";
		this->state_ = this->GenerateRandomString(30);
		std::cout << "Originator: and my state has changed to: " << this->state_ << "\n";
	}

	Memento* Save()
	{
		return new ConcreteMomento(this->state_);
	}

	void Restore(Memento* memento)
	{
		this->state_ = memento->state();
		std::cout << "Originator: My state has changed to: " << this->state_ << "\n";
	}

private:
	std::string GenerateRandomString(int length = 10)
	{
		const char alphanum[] =
			"0123456789"
			"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
			"abcdefghijklmnopqrstuvwxyz";

		int stringLength = sizeof(alphanum) - 1;

		std::string random_string;
		for (int i = 0; i < length; i++)
		{
			random_string += alphanum[std::rand() % stringLength];
		}
		return random_string;
	}

private:
	std::string state_;
};

class Caretaker
{
public:
	Caretaker(Originator* originator) : originator_(originator)
	{

	}

	void Backup()
	{
		std::cout << "\nCaretaker: Saving Originator's state...\n";
		this->memento_.push_back(this->originator_->Save());
	}

	void Undo()
	{
		if (!this->memento_.size())
		{
			return;
		}
		Memento* memento = this->memento_.back();
		this->memento_.pop_back();
		std::cout << "Caretaker: Restoring state to: " << memento->GetName() << "\n";
		try
		{
			this->originator_->Restore(memento);
		}
		catch (...)
		{
			this->Undo();
		}
	}

	void ShowHistory() const
	{
		std::cout << "Caretaker: Here's the list of memento:\n";
		for (Memento* memento : this->memento_)
		{
			std::cout << memento->GetName() << "\n";
		}
	}

private:
	std::vector<Memento*> memento_;
	Originator* originator_;
};

void ClientCode() {
	Originator* originator = new Originator("Super-duper-super-puper-super.");
	Caretaker* caretaker = new Caretaker(originator);
	caretaker->Backup();
	originator->DoSomething();
	caretaker->Backup();
	originator->DoSomething();
	caretaker->Backup();
	originator->DoSomething();
	std::cout << "\n";
	caretaker->ShowHistory();
	std::cout << "\nClient: Now, let's rollback!\n\n";
	caretaker->Undo();
	std::cout << "\nClient: Once more!\n\n";
	caretaker->Undo();

	delete originator;
	delete caretaker;
}

int main(int argc, char** argv)
{
	{
		std::srand(static_cast<unsigned int>(std::time(NULL)));
		ClientCode();
	}
	return 0;
}