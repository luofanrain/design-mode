#pragma once
#include <mutex>

template<typename T>
class Singleton
{
public:
	static T* GetInstance();

	Singleton<T>(Singleton<T>&) = delete;
	void operator=(const Singleton<T>&) = delete;

private:
	Singleton();
	~Singleton();

private:
	static T* pinstance_;
	static std::mutex mutex_;
};


