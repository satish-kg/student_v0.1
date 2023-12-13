package com.example.student_v01.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.student_v01.Entity.StudentEntity;
import com.example.student_v01.Repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    public String createStudent(StudentEntity studentEntity){
        studentRepository.save(studentEntity);
        return ("Student created: " + studentEntity);
    }
    
}
