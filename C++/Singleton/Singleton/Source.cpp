#include <iostream>
#include "Singleton.inl"
#include <string>

int main(int argc, char** argv)
{
	{
		*Singleton<std::string>::GetInstance() = "Hello World";

		std::cout << *Singleton<std::string>::GetInstance() << std::endl;
	}
	return 0;
}