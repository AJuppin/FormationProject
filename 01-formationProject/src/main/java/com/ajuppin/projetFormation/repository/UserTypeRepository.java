package com.ajuppin.projetFormation.repository;

import com.ajuppin.projetFormation.entity.User;
import com.ajuppin.projetFormation.entity.UserType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserTypeRepository extends JpaRepository<UserType, Integer> {
}
