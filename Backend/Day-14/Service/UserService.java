package com.nandha.meow.Service;

import org.springframework.beans.factory.annotation.Autowired;


//
//import com.food.Entity.UserSignup;
//import com.food.Repository.UserSignupRepository;
import com.nandha.meow.Entity.UserSignupEntity;
import com.nandha.meow.Repository.UserRepository;

public class UserService {

	@Autowired 
	UserRepository repo;
	public Iterable<UserSignupEntity> GetAll(){
		return repo.findAll();
	}

}
