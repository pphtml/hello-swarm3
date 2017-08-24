package org.superbiz.service;

import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import org.superbiz.model.Employee;

@ApplicationScoped
public class EmployeeService {

    public List<Employee> findAll() {
        return new ArrayList<Employee>() {{
            add(new Employee(1L, "emp01"));
            add(new Employee(2L, "emp02"));
        }};
    }

}
