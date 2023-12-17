package com.example.student_v01.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.student_v01.Convertor.StudentDTOtoEntity;
import com.example.student_v01.Entity.StudentEntity;
import com.example.student_v01.PostDTO.PostStudentDTO;
import com.example.student_v01.Repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    // public String createStudent(StudentEntity studentEntity){
    //     studentRepository.save(studentEntity);
    //     return ("Student created: " + studentEntity);
    // }
    
    public String createStudent(PostStudentDTO postStudentDTO){
        System.out.println("SSSSSSSSSSSSSSSSSSSSSSSSSService");
        System.out.println(postStudentDTO.toString());
        System.out.println("SSSSSSSSSSSSSSSSSSSStudent DTO original Form :\n" + postStudentDTO);
        StudentEntity studentEntity = StudentDTOtoEntity.convertToEntity(postStudentDTO);
        studentRepository.save(studentEntity);
        return ("Student created: " + studentEntity);
    }

    public List<StudentEntity> getAllStudents(){
        return studentRepository.findAll();
    }
}
