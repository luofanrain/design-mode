#include "Singleton.h"

template<typename T>
T* Singleton<T>::pinstance_ = nullptr;

template<typename T>
std::mutex Singleton<T>::mutex_;

template<typename T>
Singleton<T>::Singleton()
{

}

template<typename T>
Singleton<T>::~Singleton()
{
	delete pinstance_;
}

template<typename T>
T* Singleton<T>::GetInstance()
{
	std::lock_guard<std::mutex> lock(mutex_);
	if (nullptr == pinstance_)
	{
		pinstance_ = new T();
	}
	return pinstance_;
}
