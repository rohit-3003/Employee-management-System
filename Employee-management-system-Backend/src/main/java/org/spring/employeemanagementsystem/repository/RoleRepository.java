package org.spring.employeemanagementsystem.repository;

import org.spring.employeemanagementsystem.entity.Employee;
import org.spring.employeemanagementsystem.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
}

