#include <iostream>
#include "Container.h"

class Data
{
public:
	Data(int a = 0) :m_data_(a) {}

	void set_data(int a)
	{
		m_data_ = a;
	}

	int data()
	{
		return m_data_;
	}

private:
	int m_data_;
};

void ClientCode()
{
	std::cout << "_______________Iterator with int________________";
	Container<int> cont;

	for (int i = 0; i < 10; i++)
	{
		cont.Add(i);
	}

	Iterator<int, Container<int>>* it = cont.CreateIterator();
	for (it->First(); !it->IsDone(); it->Next())
	{
		std::cout << *it->Current() << std::endl;
	}
}

int main(int argc, char** argv)
{
	{
		ClientCode();
		system("pause");
	}
	return 0;
}